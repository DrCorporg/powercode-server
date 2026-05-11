# Email Configuration Setup

## Overview

Contact form submissions now automatically send emails with the following features:

- **Smart routing** to different departments based on contact category
- **Confirmation emails** sent to the person who submitted the form
- **Admin replies** with proper reply-to functionality

## Configuration

### Email Settings (.env)

All email credentials are configured in your `.env` file:

```
EMAIL_HOST=smtp.office365.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=admin@drcorp.co
EMAIL_PASSWORD=dfqtnyhchhjxzgbs
EMAIL_FROM=admin@drcorp.co
EMAIL_FROM_NAME=DrCorp
```

### Email Routing

Contacts are routed to different department emails based on the `category` field:

```
SUPPORT_EMAIL=support@drcorp.co
HR_EMAIL=career@drcorp.co
GENERAL_EMAIL=support@drcorp.co
PARTNERSHIPS_EMAIL=sales@drcorp.co
```

## API Usage

### Submit a Contact Form

**POST** `/contact/`

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "I have a question about your services",
  "category": "support"
}
```

Supported categories:

- `support` - Routes to support@drcorp.co
- `hr` - Routes to career@drcorp.co
- `general` - Routes to support@drcorp.co (default)
- `partnerships` - Routes to sales@drcorp.co

**What happens when submitted:**

1. ✅ Contact saved in database
2. ✅ Email sent to appropriate department (with Reply-To: john@example.com)
3. ✅ Confirmation email sent to submitter

### Reply to a Contact

**POST** `/contact/:id/reply`

Request body:

```json
{
  "message": "Thank you for contacting us. We'll get back to you soon."
}
```

**What happens:**

1. ✅ Reply saved in database
2. ✅ Email sent to the original submitter
3. ✅ Contact status updated to "replied"

### Get All Contacts

**GET** `/contact/`

Returns all contacts sorted by newest first.

## Email Templates

### Incoming Contact Email (to department)

- Subject: `New Contact Form Submission - [CATEGORY]`
- Contains: Name, email, phone, category, message, and contact ID
- Reply-To: Original submitter's email

### Confirmation Email (to submitter)

- Subject: `We received your message`
- Confirms receipt and provides copy of submitted message
- Sent from: admin@drcorp.co (DrCorp)

### Reply Email (to submitter)

- Subject: `Re: [CATEGORY] - Your inquiry response`
- Contains: Admin's reply message
- Reply-To: admin@drcorp.co

## Testing

Test the email system with curl:

```bash
curl -X POST http://localhost:5000/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "your-email@example.com",
    "phone": "1234567890",
    "message": "Test message",
    "category": "support"
  }'
```

## Troubleshooting

If emails aren't being sent:

1. Check that all environment variables are properly set in `.env`
2. Verify Office 365 credentials are correct
3. Check server logs for error messages: `console.error()`
4. Ensure the server has internet connection
5. Check if less secure apps are enabled in Office 365 account settings
6. Verify firewall doesn't block SMTP port 587

## Files Modified

- **Contact.model.js** - Added `category` field with enum options
- **contact.controller.js** - Updated with Office 365 SMTP configuration and email routing
- **.env** - Added email configuration and routing credentials
