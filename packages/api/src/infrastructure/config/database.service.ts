import { Injectable, Logger } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { OnModuleInit } from '@nestjs/common'; // Importar la interfaz OnModuleInit

@Injectable()
export class DatabaseService implements OnModuleInit {
  private readonly logger = new Logger(DatabaseService.name);

  constructor(@InjectConnection() private readonly connection: Connection) {}

  async onModuleInit() {
    try {
      await this.connection.db.command({ ping: 1 });
      this.logger.log('MongoDB conectado exitosamente');
    } catch (error) {
      if (error instanceof Error) {
        this.logger.error('Error al conectar a MongoDB', error.stack);
      } else {
        this.logger.error('Error desconocido al conectar a MongoDB', error);
      }
    }
  }
}
