const express = require("express");
const router = express.Router();
const {contactUsController,confirmSubscription,askSupport,subscribeUsController} = require("../Controller/subscribeLetterController.js")
router.route("/contact").post(contactUsController);
// router.route("/subscribe").post(subscribeUsController);
router.route("/confirmSubscription").post(confirmSubscription);
router.route("/ask").post(askSupport);

module.exports =  router;