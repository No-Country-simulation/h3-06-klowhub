import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendConfirmationEmail(
    to: string,
    fullName: string,
    confirmationLink: string,
  ): Promise<void> {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject: 'Confirma tu cuenta',
      html: `
        <h1>Hola, ${fullName}</h1>
        <p>Gracias por registrarte en nuestra plataforma. Por favor, confirma tu cuenta haciendo clic en el siguiente enlace:</p>
        <a href="${confirmationLink}" target="_blank">Confirmar cuenta</a>
      `,
    };

    await this.transporter.sendMail(mailOptions);
  }
}
