const IncomeSchema = require("../models/incomeModel")



exports.addIncome = async (req, res) => {
    const {title, amount, date, category, description} = req.body

    const income = new IncomeSchema
}