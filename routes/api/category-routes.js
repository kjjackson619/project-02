const router = require('express').Router()
const { Item, Category, User } = require('../../models')

//Get all categories
router.get('/', (req, res) =>{
    Category.findAll({
        attributes:['id', 'category_name'],
        include:{
            model: Item,
            attributes: ['id', 'item_name'],
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        }
    })
    .then(dbCatData => res.json(dbCatData))
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.get('/:id', (req,res) =>{
    Category.findOne({
        where: {
            id: req.params.id
        },
        attributes:['id', 'category_name'],
        include:{
            model: Item,
            attributes: ['id', 'item_name'],
            include: {
                model: User,
                attributes: ['id', 'username']
            }
        }
    })
    .then(dbCatData => {
        if(!dbCatData){
            res.status(404).json({Message: 'No category found with this ID'})
            return
        }
        res.json(dbCatData)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err)
    })
})

router.post('/', (req,res))

