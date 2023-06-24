import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {HospitalrecordsModule } from './hospitalrecords/hospitalrecords.module';
@Module({
imports: [TypeOrmModule.forRoot({
type: "postgres",
host: "localhost",
port: 5434,
username: "postgres",
password: "postgres",
database: "hospitalrecords",
entities: [
"dist/**/*.entity{.ts,.js}"
],
synchronize: true
}), HospitalrecordsModule],
controllers: [AppController],
providers: [AppService],
})
export class AppModule {}