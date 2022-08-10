var express = require('express');
var router = express.Router();
var axios = require('axios')
var FoodList = require("../FoodList")
var API_URL = 'https://forkify-api.herokuapp.com/api/search'
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', async(req, res)=>{
  // const foods = await axios.get(`${API_URL}?q=ribs`)
  // console.log(foods.data)
  // console.log(foods.data)

  res.render('index', {foodlist: FoodList})
})
router.get('/food/:food', async(req, res)=>{
  const foods = await axios.get(`${API_URL}?q=${req.params.food}`)
  console.log(foods.data.recipes[0])
  // console.log(foods.data)

  res.render('foods', {foods: foods.data, category: req.params.food})
})
router.get('/about', (req,res)=>{
  res.render('foods')
})

module.exports = router;
