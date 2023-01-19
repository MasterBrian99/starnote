import { BaseEntity } from './base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { GithubAccountsEntity } from './github-accounts.entity';
import { JoinColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({ type: 'varchar' })
  password: string;

  @Column({ nullable: true, type: 'varchar', unique: true })
  email: string;

  @OneToMany(() => GithubAccountsEntity, (account) => account.user)
  @JoinColumn({ name: 'user_id' })
  accounts: GithubAccountsEntity[];
}
