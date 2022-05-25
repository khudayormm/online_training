const { PrismaClient } = require('@prisma/client')
const path = require('path')
 
const prisma = new PrismaClient()


module.exports = async (req, res) => {
    var que_logo = undefined
    if (req.file) {
        que_logo = `data/uploads/${path.basename(req.file.path)}` 
    }

    const { question, variant_a, variant_b, variant_c, variant_d, box } = req.body

    try {
        const new_question = await prisma.question.create({
            data: {
                question,
                variant_a,
                variant_b, 
                variant_c,
                variant_d,
                science: "Matematika",
                correct_v: box,
                que_logo: que_logo
            }
        })

        res.json(new_question)
        
    } catch (error) {
        console.log(error)
    }
    
}