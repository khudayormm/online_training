const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()




module.exports = async (req, res) => {
    const { email } = require(req.body)
    
    const admin = prisma.admin.findUnique({
        where: {
            email: email
        }
    })

    if (!admin)
        return res.status(400).json({
            message: "bunday admin bor"
        })
    
}