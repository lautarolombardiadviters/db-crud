import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressesModule } from './addresses/addresses.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarBrandsModule } from './car_brands/car_brands.module';
import { CarModelsModule } from './car_models/car_models.module';
import { CarsModule } from './cars/cars.module';
import { ColorsModule } from './colors/colors.module';
import { typeORM } from './config/typeORM';
import { CountriesModule } from './countries/countries.module';
import { ProgrammingLanguagesModule } from './programming_languages/programming_languages.module';
import { RolesModule } from './roles/roles.module';
import { StatesModule } from './states/states.module';
import { UsersModule } from './users/users.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeORM()),
    AppModule,
    CountriesModule,
    CarsModule,
    RolesModule,
    ProgrammingLanguagesModule,
    CarBrandsModule,
    AddressesModule,
    UsersModule,
    StatesModule,
    ColorsModule,
    CarModelsModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
