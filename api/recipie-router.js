const express = require("express")
const router = express.Router()
// const Recipies = require("./recipie-model")

router.get("/", async (req, res,next) => {
    try{

        console.log("Get All is working")
        // const recipies = Recipies.findAll()
        // res.status(200).json(recipies)

    } catch (next){

    }
})

router.get("/:id", async (req, res,next) => {
    try{

        console.log("Get recipie by is working")
        // const { recipe_id } = req.params.id
        // const recipie = getRecipeById(recipe_id)
        // res.status(200).json(recipie)

    } catch (next){

    }
})

router.use( (err,req,res,next) => {
    res.status( err.status || 500).json({
        message: err.message,
        stack: err.stack,
    })
})

module.exports = router