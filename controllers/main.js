const BadRequestError = require("../errors");

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new BadRequestError(`Please provide email and password`, 400)
    }

    const id = new Date().getDate()

    const token = jwt.sign({ id, username }, process.env.JWT_SECRET, { expiredIn: '30d' })
    res.status(200).json({ msg: "user created", token })
}

const dashboard = async (req, res) => {



    res.status(200).json({ msg: `Hello, Jon Doe`, secret: `Here is your authorized data ${luckyNumber}` })
}

module.exports = {
    login, dashboard
}