import { Controller, UseGuards, Request, Get } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private service: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  getProfile(@Request() req) {
    const userId = req.user.sub;
    return this.service.getById(userId);
  }
}
