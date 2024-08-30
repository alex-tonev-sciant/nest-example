import { Injectable } from '@nestjs/common';
import { Profile } from 'src/users/entities/profile.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class ProfileService {
  constructor(private usersService: UsersService) {}

  async getById(id: Profile['userId']): Promise<Profile | null> {
    return this.usersService.getProfile(id);
  }
}
