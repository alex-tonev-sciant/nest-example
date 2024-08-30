import { IsNotEmpty } from "class-validator";
import { User } from "src/users/entity/user";

export class JwtPayloadDto {
  @IsNotEmpty()
  sub: User['id'];
  // iat: number;
  // exp: number;
}
