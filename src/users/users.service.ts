import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcryptjs';
import { Profile } from './entities/profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    @InjectRepository(Profile) private profileRepository: Repository<Profile>
  ) {}

  async findByEmail(email: User['email']): Promise<User | null> {
    return this.userRepository.findOne({where: {email}});
  }

  async getProfile(id: User['id']): Promise<Profile> {
    return this.profileRepository.findOne({where: {userId: id}})
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    const newUser = await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword
    });
    await this.userRepository.save(newUser);
    return newUser; 
  }
}
