import { User } from "src/users/entity/user";

export class LoginResponseDto {
  // token: string;
  // refreshToken: string;
  // tokenExpires: number;
  access_token: string;
  user: User;
}
