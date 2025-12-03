const IncomeSchema = require("../models/incomeModel")



exports.addIncome = async (req, res) => {
    const {title, amount, date, category, description} = req.body

    const income = new IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validation
        if(!title || !amount || !date || !category || !description){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <= 0 || !amount === "number"){
            return res.status(400).json({message: "Amount must be positive number"})
        }
        await income.save();
        res.status(200).json({message: "Income added successfully"})
    } catch (error) {
       res.status(500).json({message: "Server Error"}) 
    }

    console.log(income)
}


exports.getIncomes = async (req, res) => {
    try {
        const incomes = (await IncomeSchema.find().sort({createdAt: -1}));
        res.status(200).json(incomes)
        
    } catch (error) {
        res.status(500).json({message: "Server Error"})
        
    }
}


exports.deleteIncome = async (req, res) => {
    const { id } = req.params;
    console.log(params);
    IncomeSchema.findByIdAndDelete(id)
    .then((income) => {
        res.status(200).json({message: "Income deleted successfully"})
    })
    .catch((error) => {
        res.status(500).json({message: "Server Error"})
    })
}