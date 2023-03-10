import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ActorModule } from './actor/actor.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {MongoConnectionOptions} from "typeorm/driver/mongodb/MongoConnectionOptions";

@Module({
  imports: [ActorModule,
    TypeOrmModule.forRootAsync({
      useFactory: async () =>
          ({
            type: 'mongodb',
            host: 'localhost',
            port: 27017,
            database: 'mydatabase',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
          } as MongoConnectionOptions),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
