import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AtStrategy } from './strategies/at.strategy';
import { RtStrategy } from './strategies/rt.strategy';
/* 
Job: Managing the Process of authentication.
Responsibilities: Comparing passwords, generating Access/Refresh tokens, and locking/unlocking the "gates" (Guards).
Knowledge: It knows how to create tokens, but it does not own the user data. It has to ask the UsersModule for help.
*/
@Module({
  imports: [JwtModule.register({}), UsersModule],
  controllers: [AuthController],
  providers: [AuthService, AtStrategy, RtStrategy],
})
export class AuthModule { }
