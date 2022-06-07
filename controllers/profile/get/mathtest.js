const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

module.exports = async (req, res) => {
    const { id } = req.user
    if (!id)
        return res.redirect('/')    
    try {
        const questions = await prisma.question.findMany()
        res.render('cabinet/tests/math', {
            questions
        })
    } catch (error) { 
        console.log(error)
    }

}