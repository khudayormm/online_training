const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()


module.exports = async(req, res) => {
    const data = req.body
    console.log(req.body)
    const keys = Object.keys(data) 
    const values = Object.values(data)
    
    try {
        keys.map(async(item, index) => {
            await prisma.markAnswer.create({
                data: {
                    questionId: parseInt(item),
                    answer: values[index]
                }
            })
        })        
    } catch (error) {
        console.log(error)
    }





    try {
        
    } catch (error) {
        console.log(error)
    }
}  