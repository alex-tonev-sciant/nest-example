import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthLoginDto } from './dto/auth-login.dto';
import * as bcrypt from "bcryptjs";
import { User } from 'src/users/entity/user';
import { LoginResponseDto } from './dto/login-responce.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './strategies/types/jwt-payload.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateLogin(loginDto: AuthLoginDto): Promise<User> {
    const user = await this.usersService.findByEmail(loginDto.email);

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (isPasswordValid) {
      return user;
    }
    return null;  
  }

  async login(user: User): Promise<LoginResponseDto> {
    const payload: JwtPayloadDto = {sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
      user
    }
  }

  async register(registerDto: AuthRegisterDto): Promise<User> {
    const {email, password, firstName, lastName, dateOfBirth, gender} = registerDto;
    const user = await this.usersService.create({
      email, 
      password,
      profile: {
        firstName,
        lastName,
        dateOfBirth,
        gender
      }
    });
    return user;
  }
}
