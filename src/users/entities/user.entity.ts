import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  OneToOne,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { Profile } from './profile.entity';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';

@Entity()
export class User extends EntityRelationalHelper {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Index({ unique: true })
  @Column()
  email: string;

  @Exclude({toPlainOnly: true})
  @Column()
  password: string;

  @OneToOne(() => Profile, (profile) => profile.user, { cascade: true })
  profile: Profile;
}
