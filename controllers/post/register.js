const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const moment = require('moment')
const Joi = require('joi')
const bcrypt = require('bcryptjs')


module.exports = async(req, res) => {
    const { firstname, lastname, email, phone, birthday, gender, province, username, password } = req.body

    const schema = Joi.object({
        firstname: Joi.string().required().min(3).max(55),
        lastname: Joi.string().required().min(3).max(55),
        email: Joi.string().required().min(3).max(55),
        phone: Joi.string().required().min(3).max(55),
        birthday: Joi.required(),
        gender: Joi.string().required(),
        province: Joi.string().required(),
        username: Joi.string().required().min(3).max(55),
        password: Joi.string().required().min(3).max(255)
    })


    const { error } = schema.validate({ 
        firstname, lastname, email, phone, birthday, gender, province, username, password
     })

    if (error)
       return res.status(400).json({
            status: "Validation error",
            message: error.details[0].message
        })

    const emailExist = await prisma.user.findFirst({
        where: {
            email: email
        }
    })

    const phoneExist = await prisma.user.findFirst({
        where: {
            phone: phone
        }
    })

    const userExist = await prisma.user.findFirst({
        where: {
            username: username
        }
    })

    if (emailExist)
        return res.status(400).json({
            status: "Email error",
            message: "Bu email allaqachon ro'yxatdan o'tgan."
        })

    if (phoneExist)
        return res.status(400).json({
            status: "Phone error",
            message: "Bu phone allaqachon ro'yxatdan o'tgan."
        })
        
    if (userExist)
        return res.status(400).json({
            status: "Username error",
            message: "Bu username allaqachon ro'yxatdan o'tgan."
        })

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
        

    try {
        await prisma.user.create({
            data: {
                firstname,
                lastname,
                email,
                phone,
                birthday: moment(birthday).format(),
                gender,
                province,
                username,
                password: hashedPassword
            }
        })

        res.redirect('/login')
    } catch (error) {
        console.log(error)
    }
}