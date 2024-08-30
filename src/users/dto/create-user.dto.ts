export class CreateProfileDto {
  firstName?: string;
  lastName?: string;
  dateOfBirth?: Date;
  gender?: string;
}

export class CreateUserDto {
  email: string;
  password: string;
  profile?: CreateProfileDto;
}
