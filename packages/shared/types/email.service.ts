export interface IEmailService {
    sendEmail(
      to: string,
      subject: string,
      content: string,
    ): Promise<void>;
  }
  