const router = require('express').Router()
const { Item, Category, User } = require('../../models')

//GET all items
router.get('/', (req,res) => {
    Item.findAll({
        attributes: ['id', 'item_name', 'category_id', 'picture', 'user_id'],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbItemData => res.json(dbItemData))
    .catch(err => res.status(500).json(err))
})

//GET one item
router.get('/:id', (req,res) =>{
    Item.findOne({
        where: {id: req.params.id},
        attributes: ['id', 'item_name', 'category_id', 'picture', 'user_id'],
        include: [
            {
                model: Category,
                attributes: ['id', 'category_name']
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbItemData => {
        if(!dbItemData){
            res.status(404).json({Message: 'No item found with that ID'})
            return
        }
        res.json(dbItemData)
    })
    .catch(err => res.status(500).json(err))
})

//Update an item
router.put('/:id', (req,res) => {
    User.update(req.body, {
        indiviualHooks: true,
        where:{id:req.params.id}
    })
    .then(dbItemData => {
        if(!dbItemData){
            res.status(404).json({Message: 'No item found with that ID'})
            return
        }
    })
    .catch(err => res.status(500).json(err))
})

//Create an item
router.post('/', (req,res) => {
    Item.create(req.body)
    .then(dbItemData => res.json(dbItemData))
    .catch(err => res.status(400).json(err))
})

//delete an item
router.delete('/:id', (req,res) => {
    Item.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbItemData => {
        if(!dbItemData){
            res.status(404).json({Message: 'No item found with this ID'})
            return
        }
    })
    .catch(err => res.status(500).json(err))
})

module.exports = router