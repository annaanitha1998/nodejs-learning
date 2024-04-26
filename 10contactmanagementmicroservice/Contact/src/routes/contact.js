const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  updateContact,
  deleteContact,
  addFavouriteContact,
  removeFavouriteContact
} = require("../controller/contact");
const {validateToken} = require("../utils/middleware");

router.use(validateToken)
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);
router.put("/favourite", addFavouriteContact);
router.delete("/favourite/:id", removeFavouriteContact);

module.exports = router;