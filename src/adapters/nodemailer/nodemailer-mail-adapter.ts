import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6e469b6f15c0a4",
      pass: "06a907c9ebbb23"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        
    await transport.sendMail({
        from:'Equipe Feedget <equipe@feedget.com',
        to: 'Guilherme H V Santos <guilhermehvs@outlook.com',
        subject,
        html: body
    });

    }
}