sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'btpgenai4s4studentamer47ex2.productfaqapplication',
            componentId: 'ProductFAQObjectPage',
            contextPath: '/ProductFAQ'
        },
        CustomPageDefinitions
    );
});