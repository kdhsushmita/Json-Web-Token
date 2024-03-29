const unAuthenticateError = require("../errors/unauthenticated");

const authenticationMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        throw new unAuthenticateError("No token provided")
    }
    const token = authHeader.split(' ')[1];
    try {
        const luckyNumber = Math.floor(Math.random() * 100)
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).json({ msg: `Hello ${decoded.username}`, secret: `here is your authorized data , your lucky number is ${luckyNumber}` })
        next();
    }
    catch (e) {
        throw new unAuthenticateError("Not authorized to access this route")
    }
}

module.exports = authenticationMiddleware
