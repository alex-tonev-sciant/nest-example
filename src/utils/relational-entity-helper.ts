import { instanceToPlain } from 'class-transformer';
import { AfterLoad, BaseEntity } from 'typeorm';

export class EntityRelationalHelper extends BaseEntity {
  toJSON() {
    return instanceToPlain(this);
  }
}
