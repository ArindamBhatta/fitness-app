import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { TestController } from './modules/test.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'fitness.sqlite',
      autoLoadEntities: true,
      synchronize: true,
      logging: ['query', 'error'],
    }),
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController, TestController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
