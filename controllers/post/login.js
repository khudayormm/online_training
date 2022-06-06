const { PrismaClient } = require('@prisma/client')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const Joi = require('joi')

const prisma = new PrismaClient()

module.exports = async (req, res) => {
    const { email, password } = req.body

    const schema = Joi.object({
        email: Joi.string().required().min(3).max(55),
        password: Joi.string().required().min(3).max(255)
    })

    const { error } = schema.validate({ email, password }) 
    if (error)
        return res.status(400).json({
            status: "Validation error",
            message: error.details[0].message
        })

    const user = await prisma.user.findFirst({
        where: {
            email: email
        }
    })
    
    if (!user)
        return res.status(400).json({
            status: "Email error",
            message: "Bu email mavjud emas."
        })

    const verifyPassword = await bcrypt.compare(password, user.password)

    if (!verifyPassword)
        return res.status(400).json({
            status: "error",
            message: "Parol xato"
        })
    
    try {
        const token = jwt.sign({ id: user.id }, process.env.SECRET)
        res.cookie('token', token)
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }



}