sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"btpgenai4s4studentamer47ex2/productfaqapplication/test/integration/pages/ProductFAQList",
	"btpgenai4s4studentamer47ex2/productfaqapplication/test/integration/pages/ProductFAQObjectPage"
], function (JourneyRunner, ProductFAQList, ProductFAQObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('btpgenai4s4studentamer47ex2/productfaqapplication') + '/test/flpSandbox.html#btpgenai4s4studentamer47ex2pro-tile',
        pages: {
			onTheProductFAQList: ProductFAQList,
			onTheProductFAQObjectPage: ProductFAQObjectPage
        },
        async: true
    });

    return runner;
});

