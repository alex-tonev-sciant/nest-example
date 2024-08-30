import { User } from "src/users/entities/user.entity";

export class LoginResponseDto {
  // token: string;
  // refreshToken: string;
  // tokenExpires: number;
  access_token: string;
  user: User;
}
