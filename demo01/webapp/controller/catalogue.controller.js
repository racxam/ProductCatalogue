sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function (Controller) {
        "use strict";

        return Controller.extend("com.demo.demo01.controller.catalogue", {
            onInit: function () {
            //   var oModel=this.getOwnerComponent().getModel();
            //   var oJSONModel=new sap.ui.model.json.oJSONModel();
            //   oModel.read("/Employees",{
            //     sucess:function (response) {
            //         debugger;
            //         oJSONModel.setData(response.result);
            //         this.getView().setModel(oJSONModel,"EmployeesDataModel")
            //         debugger;

            //     }
            //   })
            },


        });

    }
);
