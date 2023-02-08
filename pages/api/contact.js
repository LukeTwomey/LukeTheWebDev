import nodemailer from "nodemailer";

export default async function (req, res) {
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "mail.privateemail.com",
    auth: {
      user: process.env.NAMECHEAP_EMAIL_USER,
      pass: process.env.NAMECHEAP_EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.NAMECHEAP_EMAIL_USER,
    to: process.env.NAMECHEAP_EMAIL_USER,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    replyTo: req.body.email,
  };

  const mailsend = await transporter.sendMail(mailData);
  res.send(200);
}
