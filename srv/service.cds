using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { BTPGenAI4S4_StudentAmer47_ex2 as my } from '../db/schema.cds';

@path : '/service/bTPGenAI4S4_StudentAmer47_ex2'
service bTPGenAI4S4_StudentAmer47_ex2Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    @cds.redirection.target
    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
}

annotate bTPGenAI4S4_StudentAmer47_ex2Srv with @requires :
[
    'authenticated-user'
];
