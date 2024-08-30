import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private service: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @HttpCode(200)
  @Post('login')
  async login(@Request() req) {
    return this.service.login(req.user);
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() createUserDto: AuthRegisterDto): Promise<void> {
    await this.service.register(createUserDto);
  }
}
