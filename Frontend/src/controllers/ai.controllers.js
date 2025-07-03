const aiServices = require("../services/ai.services")

module.exports.getReview = async (req , res) => {
    const code = req.body.code
    if (!code) {
        return req.statusCode(400).send("Prompt is required")
    }
    const response = await aiServices(code)
    res.send(response)
}