const {constants} = require('../constant')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode || 500
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation error",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.NOTFOUND_ERROR:
            res.json({
                title: "Not found",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.UNAUTHORISED_ERROR:
            res.json({
                title: "Not Authorized",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        case constants.SERVER_SIDE_ERROR:
            res.json({
                title: "Server side issue",
                message: err.message,
                stackTrace: err.stack
            });
            break;
        default:
            console.log('No err')
    }
}

module.exports = errorHandler