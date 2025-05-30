import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User, validateUser } from './users';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(
    username: string,
    password: string,
  ): Promise<Omit<User, 'password'> | null> {
    console.log('AuthService.validateUser() called with:', username, password);

    const user = validateUser(username, password);
    if (user) {
      console.log('✅ User validated:', user);
      const { password, ...result } = user;
      return result;
    }

    console.log('❌ Validation failed');
    return null;
  }

  async login(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    console.log('AuthService.login() called with:', username, password);

    const user = validateUser(username, password);
    if (!user) {
      console.log('❌ Invalid credentials for:', username);
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      username: user.username,
      sub: user.id,
      role: user.role,
    };

    try {
      const token = this.jwtService.sign(payload);
      console.log('✅ Token issued:', token);
      return { access_token: token };
    } catch (error) {
      console.error('❌ JWT signing failed:', error);
      throw new UnauthorizedException('JWT signing failed');
    }
  }
}