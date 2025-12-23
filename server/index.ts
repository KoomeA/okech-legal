import express from 'express';
import { createServer } from 'http';
import path from 'path';
import { fileURLToPath } from 'url';
import formData from 'form-data';
import Mailgun from 'mailgun.js';

const __filename = fileURLToPath(import.meta.url );
const __dirname = path.dirname(__filename);

// Initialize Mailgun Client
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY || '',
});

async function startServer() {
  const app = express();
  const server = createServer(app);

  app.use(express.json());

  const staticPath =
    process.env.NODE_ENV === 'production'
      ? path.resolve(__dirname, 'public')
      : path.resolve(__dirname, '..', 'dist', 'public');

  app.use(express.static(staticPath));

  app.post('/api/profile-download', async (req, res) => {
    try {
      const { name, phone, email, message } = req.body;

      if (!name || !phone || !email || !message) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      console.log('Profile Download Registration:', { name, phone, email, timestamp: new Date().toISOString() });

      // --- Mailgun Email Sending Logic ---
      const mailgunDomain = process.env.MAILGUN_DOMAIN;
      const adminEmail = process.env.ADMIN_EMAIL;
      const fromEmail = process.env.MAILGUN_FROM_EMAIL;

      if (mailgunDomain && adminEmail && fromEmail) {
        const emailData = {
          from: `Okech Legal <${fromEmail}>`,
          to: [adminEmail],
          subject: `New Profile Download Request from ${name}`,
          html: `
            <div style="font-family: sans-serif; line-height: 1.6;">
              <h2 style="color: #333;">New Profile Download Request</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p><strong>Message:</strong></p>
              <div style="padding: 10px; border-left: 3px solid #eee;">
                <p style="margin: 0;">${message.replace(/\n/g, '  
')}</p>
              </div>
              <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
              <p style="font-size: 0.8em; color: #777;">This email was sent from the profile download form on your website.</p>
            </div>
          `,
        };

        try {
          const msg = await mg.messages.create(mailgunDomain, emailData);
          console.log('Mailgun response:', msg);
        } catch (emailError) {
          console.error('Error sending email via Mailgun:', emailError);
          // Note: We don't block the user response even if the email fails
        }
      } else {
        console.warn('Mailgun environment variables are not set. Skipping email notification.');
      }
      // --- End of Mailgun Logic ---

      res.json({ success: true, message: 'Registration received successfully.' });

    } catch (error) {
      console.error('Error processing profile download request:', error);
      res.status(500).json({ success: false, message: 'An error occurred on the server.' });
    }
  });

  app.get('*', (_req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'));
  });

  const port = process.env.PORT || 3000;
  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/` );
  });
}

startServer().catch(console.error);