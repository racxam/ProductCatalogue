sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
    ,

],
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("com.demo.demo01.controller.index", {
            onInit: function () {

            },
            onLogin: function () {
                var email = this.getView().byId("email").getValue();
                var password = this.getView().byId("password").getValue();


                if (email === "sumit" && password === "123") {
                    MessageToast.show(
                        "Login Successful"
                    );
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("catalogue");
                    console.log(oRouter);




                } else {
                    MessageToast.show("Invalid Username and password !");
                    this.getView().byId("email").setValue("")
                    this.getView().byId("password").setValue("")
                }
            }
        });
    });
