/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "com/demo/demo01/model/models",
    "sap/m/routing/RouteMatchedHandler"
],
    function (UIComponent, Device, models, RouteMatchedHandler) {
        "use strict";

        return UIComponent.extend("com.demo.demo01.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                // this.getRouter().initialize();
                var oRouter = this.getRouter();
                this.routeHandle = new RouteMatchedHandler(oRouter);
                oRouter.initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);