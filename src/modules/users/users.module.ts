import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
/* 
Job: Managing the User Entity and the database.
Responsibilities: Creating a new user record, finding a user by email, updating a user's hashed refresh token, or deleting a user.
Knowledge: It knows about the database schema, but it does not know anything about JWT tokens, cookies, or login logic. It just manages data.
*/
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {
  //  consumer
  //   .apply(SomeSpecificMiddleware)
  //    .forRoutes('users'); // Only applies to routes starting with /users
}
