const express = require('express')
const router = express.Router()

const MenuItem= require('./../models/MenuItem')



router.get('/', async function (req, res) {
    try {
      const data = await MenuItem.find()
      console.log('data fetched');
      res.status(200).json(data)
    } catch (err) {
      console.log(err);
      res.status(500).json({error:'Internal server error'})
    } 
    })
    
    
    
    
    router.post('/',async (req, res) =>{
     try {
      const data = req.body
      const newMenu = new MenuItem(data)
      const response = await newMenu.save()
      console.log('data saved');
      res.status(200).json(response)
     } catch (err) {
      console.log(err);
      res.status(500).json({error:'Internal server error'})
     }
    })


    
router.get('/:taste',async(req,res) => {
    try {
      const workType=req.params.taste
  
      if(workType == 'chef' || workType == 'manager'  || workType == 'waiter' ){
        const response = await Person.find({work:workType})
        console.log('response fetched');
        res.status(200).json(response)
      }else{
        res.status(404).json({error : "Invalid work type"})
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({error:'Internal server error'})
    }
  })
    
   module.exports = router