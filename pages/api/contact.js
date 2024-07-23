import { transporter } from "@/utils/config/mailer";
import { createRouter } from "next-connect";

const router = createRouter();

router.post(async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  try {
    await new Promise((resolve, reject) => {
      transporter.sendMail(
        {
          replyTo: process.env.AUTH_EMAIL,
          from: process.env.AUTH_EMAIL,
          to: process.env.AUTH_EMAIL,
          subject: firstName + " " + lastName,
          text: `Nom: ${phone}\n\nPrénom: ${phone}\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nMessage: ${message}`,
        },
        (err, info) => {
          if (err) {
            reject(err);
          } else {
            resolve(info);
          }
        }
      );
    });
    res.status(200).json({
      message:
        "Nous avons bien reçu votre message et nous vous contacterons dès que possible.",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

export default router.handler();
