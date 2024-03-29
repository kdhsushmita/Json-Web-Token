const { StatusCodes } = require("http-status-codes")
const CustomAPIError = require("./custom-error")

class unAuthenticateError extends CustomAPIError {
    constructor(message) {
        super(message)
        this.statusCode = StatusCodes.unAuthenticateError
    }
}

module.exports = unAuthenticateError
