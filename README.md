
# Notification Service (Backend API)

A simple Node.js + Express backend to send and store different types of notifications — Email, SMS, and In-App — and retrieve them by user(in direct gmail account or by mailtrap).

---

📁 Project Structure
notification-service/
├── config/ # MongoDB connection setup
├── controllers/ # API controller logic
├── models/ # Mongoose model for notifications
├── routes/ # Express routes
├── utils/ # Email utility (Nodemailer)
├── .env # Environment variables
├── app.js # Main server entry point
├── package.json



## 🚀 Features

- Send and store:
  - 📧 Email Notifications
  - 📱 SMS Notifications (console-based)
  - 💬 In-App Notifications
- Retrieve all notifications for a user
- Data saved in MongoDB using Mongoose
