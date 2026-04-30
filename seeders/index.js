require("dotenv").config();
const mongoose = require("mongoose");

const seedServices = require("./service.seeder");
const seedHomePage = require("./homePage.seeder");
const seedUsers = require("./admin.seeder");
const seedContactPage = require("./ContactPage.seeder");

const runSeeders = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected");

    await seedServices();
    console.log("Services seeded");

    await seedHomePage();
    console.log("Home page seeded");

    await seedUsers();
    console.log("Users seeded");

    await seedContactPage();
    console.log("contact page seeded");

    await seedContactPage();
    console.log("contact page seeded");

    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runSeeders();
