const URL = require('../models/url')
const shortid = require('shortid')

const handleGenerateShortURL = (req, res) => {
    const shortId = shortid(8)
    const body = req.body
    if(!body.url) {
        return res.status(400).json({err: 'URL is not present'})
    }
    URL.create({
        shortUrl: shortId,
        redirectUrl: body.url,
        history: []
    })
    return res.status(200).json({id: shortId})
}

module.exports = handleGenerateShortURL