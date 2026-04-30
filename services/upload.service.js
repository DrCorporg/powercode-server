const {
  S3Client,
  PutObjectCommand,
  DeleteObjectCommand,
} = require("@aws-sdk/client-s3");
const { v4: uuidv4 } = require("uuid");

const requiredEnv = [
  "R2_ENDPOINT",
  "R2_ACCESS_KEY_ID",
  "R2_SECRET_ACCESS_KEY",
  "R2_BUCKET_NAME",
  "R2_PUBLIC_URL",
];

for (const key of requiredEnv) {
  if (!process.env[key] || !String(process.env[key]).trim()) {
    throw new Error(`Missing required env variable: ${key}`);
  }
}

const r2 = new S3Client({
  region: "auto",
  endpoint: process.env.R2_ENDPOINT.trim(),
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID.trim(),
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY.trim(),
  },
});

const bucketName = process.env.R2_BUCKET_NAME.trim();
const publicBaseUrl = process.env.R2_PUBLIC_URL.trim().replace(/\/+$/, "");

const extractKeyFromUrl = (url) => {
  if (!url || typeof url !== "string") return null;

  if (!url.startsWith(publicBaseUrl)) return null;

  const key = url.replace(`${publicBaseUrl}/`, "").trim();
  return key || null;
};

const deleteImageFromR2ByKey = async (key) => {
  if (!key) return;

  await r2.send(
    new DeleteObjectCommand({
      Bucket: bucketName,
      Key: key,
    }),
  );
};

const deleteImageFromR2ByUrl = async (url) => {
  const key = extractKeyFromUrl(url);
  if (!key) return;
  await deleteImageFromR2ByKey(key);
};

const uploadImageToR2 = async (file, folder = "uploads", oldUrl = "") => {
  if (!file) {
    throw new Error("File is required");
  }

  const ext = file.originalname?.includes(".")
    ? file.originalname.split(".").pop()
    : "bin";

  const key = `${folder}/${uuidv4()}.${ext}`;

  await r2.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: key,
      Body: file.buffer,
      ContentType: file.mimetype,
    }),
  );

  const url = `${publicBaseUrl}/${key}`;

  if (oldUrl) {
    try {
      await deleteImageFromR2ByUrl(oldUrl);
    } catch (error) {
      console.error("Failed to delete old image from R2:", error.message);
    }
  }

  return { key, url };
};

module.exports = {
  uploadImageToR2,
  deleteImageFromR2ByUrl,
  deleteImageFromR2ByKey,
  extractKeyFromUrl,
};
