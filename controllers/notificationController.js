// const Notification = require('../models/notification');
// const sendEmail = require('../utils/mailer');

// exports.sendNotification = async (req, res) => {
//     console.log('Received body:', req.body);

//   const { userId, type, message, email, phone } = req.body;

//   try {
//     // Create and store in DB
//     const notification = await Notification.create({ userId, type, message });

//     // Handle delivery
//     if (type === 'email') {
//       await sendEmail(email, message);
//     } else if (type === 'sms') {
//       console.log(`SMS to ${phone}: ${message}`);
//     }

//     res.status(200).json({ success: true, data: notification });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// };

// exports.getUserNotifications = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const notifications = await Notification.find({ userId: id });
//     res.json(notifications);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
const Notification = require('../models/notification');
const sendEmail = require('../utils/mailer');

// POST /api/notifications
exports.sendNotification = async (req, res) => {
  try {
    console.log('Received body:', req.body);

    const { userId, type, message, email, phone } = req.body;

    if (!userId || !type || !message) {
      return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    // Store the notification
    const notification = await Notification.create({
      userId,
      type,
      message
    });

    // Send notification based on type
    if (type === 'email') {
      if (!email) return res.status(400).json({ success: false, error: 'Email address is required' });

      await sendEmail(email, message);
      console.log(` Email sent to ${email}`);
    } else if (type === 'sms') {
      if (!phone) return res.status(400).json({ success: false, error: 'Phone number is required' });

      console.log(`SMS to ${phone}: ${message}`);

    } else if (type === 'in-app') {
      console.log(` In-app notification stored for user ${userId}`);
    } else {
      return res.status(400).json({ success: false, error: 'Invalid notification type' });
    }

    res.status(200).json({ success: true, data: notification });

  } catch (error) {
    console.error(' Error in sendNotification:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};

// GET /api/users/:id/notifications
exports.getUserNotifications = async (req, res) => {
  try {
    const { id } = req.params;

    const notifications = await Notification.find({ userId: id });

    res.status(200).json(notifications);
  } catch (error) {
    console.error(' Error in getUserNotifications:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
};


