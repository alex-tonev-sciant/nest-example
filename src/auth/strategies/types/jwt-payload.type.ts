import { IsNotEmpty } from "class-validator";
import { User } from "src/users/entities/user.entity";

export class JwtPayloadDto {
  @IsNotEmpty()
  sub: User['id'];
  // iat: number;
  // exp: number;
}
