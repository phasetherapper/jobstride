import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt.guard';
import { Reflector } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS for frontend access
  app.enableCors({
    origin: 'http://localhost:5173',
  });

  // Optional: Validation for DTOs
  app.useGlobalPipes(new ValidationPipe());

  // Apply JWT guard globally (except @Public() routes)
  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector));

  // Start server
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();