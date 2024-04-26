const asyncHandler = require("express-async-handler");
const {ContactModel} = require("../database");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await ContactModel.find({userId: req.user.id});
  res.status(200).json(contacts);
});

//@desc Create New contact
//@route POST /api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await ContactModel.create({
    name,
    email,
    phone,
    userId: req.user.id
  });

  res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@access private
const getContact = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  } else {
    console.log('Hi')
    res.status(200).json(contact);
  }
  
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@access private
const updateContact = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.userId.toString() != req.user.id) {
    req.status = 403
    throw new Error('User is not authorized to update')
  }

  const updatedContact = await ContactModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.status(200).json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access private
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await ContactModel.findById(req.params.id);
  if (!contact.length) {
    res.status(404);
    throw new Error("Contact not found");
  }

  if(contact.userId.toString() != req.user.id) {
    req.status = 403
    throw new Error('User is not authorized to delte')
  }

  await ContactModel.deleteOne({ _id: req.params.id });
  res.status(200).json(contact);
});

//@desc Add fav contact
//@route PUT /api/contacts/favourite
//@access private
const addFavouriteContact = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'fav contact'});
});

//@desc remove fav contact
//@route DELETE /api/contacts/favourite/1
//@access private
const removeFavouriteContact = asyncHandler(async (req, res) => {
  res.status(200).json({message: 'remove fav contact'});
});


module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
  addFavouriteContact,
  removeFavouriteContact
};