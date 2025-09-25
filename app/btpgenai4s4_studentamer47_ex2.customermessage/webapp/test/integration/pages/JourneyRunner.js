sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"btpgenai4s4studentamer47ex2/customermessage/test/integration/pages/CustomerMessageList",
	"btpgenai4s4studentamer47ex2/customermessage/test/integration/pages/CustomerMessageObjectPage"
], function (JourneyRunner, CustomerMessageList, CustomerMessageObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('btpgenai4s4studentamer47ex2/customermessage') + '/test/flpSandbox.html#btpgenai4s4studentamer47ex2cus-tile',
        pages: {
			onTheCustomerMessageList: CustomerMessageList,
			onTheCustomerMessageObjectPage: CustomerMessageObjectPage
        },
        async: true
    });

    return runner;
});

