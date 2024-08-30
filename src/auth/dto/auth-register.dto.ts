import { Transform } from "class-transformer";
import { IsEmail, IsNotEmpty, MinLength, IsDate, IsString, IsOptional } from "class-validator";
import { dateTransformer } from "src/utils/transformers/date.transformer";
import { lowerCaseTransformer } from "src/utils/transformers/lowercase.transformer";

export class AuthRegisterDto {
  @Transform(lowerCaseTransformer)
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsOptional()
  firstName?: string;

  @IsString()
  @IsOptional()
  lastName?: string;

  @Transform(dateTransformer)
  @IsDate()
  @IsOptional()
  dateOfBirth?: Date;

  @IsString()
  @IsOptional()
  gender?: string;
}
