/*global QUnit*/

sap.ui.define([
	"comdemo/demo01/controller/index.controller"
], function (Controller) {
	"use strict";

	QUnit.module("index Controller");

	QUnit.test("I should test the index controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
