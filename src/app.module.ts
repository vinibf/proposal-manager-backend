import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ProposalModule } from './proposal/proposal.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ProposalModule, UserModule, AuthModule],
})
export class AppModule {}
