import { Module } from '@nestjs/common';
import { ProposalService } from './services/proposal.service';
import { ProposalController } from './controllers/proposal.controller';

@Module({
  controllers: [ProposalController],
  providers: [ProposalService],
})
export class ProposalModule {}
