using { BTPGenAI4S4_StudentAmer47_ex2 as my } from '../db/schema.cds';

@path: '/service/bTPGenAI4S4_StudentAmer47_ex2'
@requires: 'authenticated-user'
service bTPGenAI4S4_StudentAmer47_ex2Srv {
  @odata.draft.enabled
  entity CustomerMessage as projection on my.CustomerMessage;
}