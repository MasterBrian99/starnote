import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'github_accounts' })
export class GithubAccountsEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.accounts)
  user: UserEntity;

  @Column({ name: 'username', nullable: false })
  username: string;
}
