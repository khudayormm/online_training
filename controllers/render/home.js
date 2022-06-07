

module.exports = (req, res, verify) => {
    const { id } = req.user
    if (!id)
        return  res.render('index')
    res.render('tests_page')
} 