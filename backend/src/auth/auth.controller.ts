import {
  Controller,
  Post,
  Body,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Public } from './public.decorator';

@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const { username } = body;
    this.logger.log(`AuthController: Login attempt for user "${username}"`);

    try {
      const result = await this.authService.login(body.username, body.password);
      this.logger.log(`AuthController: Login successful for user "${username}"`);
      return result;
    } catch (err) {
      this.logger.warn(`AuthController: Login failed for user "${username}" - ${err?.message || err}`);
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}