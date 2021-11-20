const db = require("../data/db-config")

function findAll () {
    return db("recipies")
}

async function getRecipeById (rec_id) {
    const recipies = await db("recipies")
    .where('recipie_id',rec_id)
    return recipies
}


module.exports = {
    getRecipeById,
    findAll
}