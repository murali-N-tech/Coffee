const nodemailer = require('nodemailer');

// @desc    Send contact email
// @route   POST /api/v1/contact
const sendContactEmail = async (req, res) => {
  const { name, phone, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill in all required fields' });
  }

  try {
    // 1. Create Transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 2. Define Email Options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender address
      to: process.env.ADMIN_EMAIL,   // Receiver (Cafe Owner)
      subject: `New Contact Message from ${name}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${message}
        </blockquote>
      `,
    };

    // 3. Send Email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email Send Error:', error);
    res.status(500).json({ message: 'Email could not be sent', error: error.message });
  }
};

module.exports = { sendContactEmail };