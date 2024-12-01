import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHomePage(): string {
    return `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Application Deployed</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: black;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
          }
          h1 {
            font-size: 3rem;
          }
        </style>
      </head>
      <body>
        <div>
          <h1>🚀 The application is deployed and running in production!</h1>
          <p>Enjoy your experience!</p>
        </div>
      </body>
      </html>
    `;
  }
}
