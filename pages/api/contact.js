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

  const mailDataToMe = {
    from: `Luke the Web Dev <${process.env.NAMECHEAP_EMAIL_USER}>`,
    to: process.env.NAMECHEAP_EMAIL_USER,
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    replyTo: req.body.email,
  };

  const mailDataToCustomer = {
    from: `Luke the Web Dev <${process.env.NAMECHEAP_EMAIL_USER}>`,
    to: req.body.email,
    subject: "Message Received",
    text: "Thanks for your enquiry! I will get back to you very soon. Regards, Luke",
  };

  const mailSendToMe = await transporter.sendMail(mailDataToMe);
  const mailSendToCustomer = await transporter.sendMail(mailDataToCustomer);
  res.send(200);
}
