const getContacts = async(req, res) => {
    res.status(200).json({message: 'Get all contact list'})
}

const addContacts = async(req, res) => {
    console.log(req.body)
    const {name, age} = req.body;
    if(!name || !age) {
        res.status(400)
        throw new Error("All Fields are mandatory")
    }
    res.status(201).json({message: 'Add all contact list'})
}

const getContactById =  async(req, res) => {
    res.status(200).json({message: `Get contact with id ${req.params.id}`})
}

const updateContact = async(req, res) => {
    res.status(200).json({message: `Update contact with id: ${req.params.id}`})
}

const deleteContact = async(req, res) => {
    res.status(200).json({message: `Delete contact with id: ${req.params.id}`})
}

module.exports = {getContacts, addContacts, getContactById, updateContact, deleteContact}