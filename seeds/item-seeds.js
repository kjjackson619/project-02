const {Item} = require ('../models/')

const itemData = [
    {
        item_name: 'Beach',
        picture: 'https://media.istockphoto.com/photos/tropical-white-sand-beach-with-coco-palms-picture-id1181563943?k=20&m=1181563943&s=612x612&w=0&h=r46MQMvFnvrzzTfjVmvZED5nZyTmAYwISDvkdtM2i2A=',
        category_id: '1',
        user_id: '1',
    },
    {
        item_name: 'Cool clothes',
        picture: 'https://cdn.cnn.com/cnnnext/dam/assets/210909202132-07-new-york-fashion-week-2021-0908.jpg',
        category_id: '2',
        user_id: '2',
    },
    {
        item_name: 'Air Force 1s',
        picture: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoes-5QFp5Z.png',
        category_id: '3',
        user_id: '3',
    },
    {
        item_name: 'Pho',
        picture: 'https://www.recipetineats.com/wp-content/uploads/2019/04/Beef-Pho_6.jpg',
        category_id: '4',
        user_id: '4',
    },
    {
        item_name: 'Verde British 812 Superfast',
        picture: 'https://external-preview.redd.it/ey-WfugPaRSg9u4CJ4zE1rc683j1nfjhZJOw7Ozb340.jpg?width=640&crop=smart&auto=webp&s=89cee9cf20c154f06a2fa5e8387476bcfc50e8aa',
        category_id: '5',
        user_id: '5',
    },
    {
        item_name: 'The One',
        picture: 'https://www.dirt.com/wp-content/uploads/2021/01/Screen-Shot-2021-01-10-at-11.00.00-AM.png',
        category_id: '6',
        user_id: '1',
    },
    {
        item_name: 'Cute Bedroom',
        picture: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/10/featured-image-bedroom-decor.jpeg.jpg',
        category_id: '7',
        user_id: '3',
    },
    {
        item_name: 'Finish this project',
        picture: 'https://foundr.com/wp-content/uploads/2016/11/finishing-the-project-foundr-blog.jpg',
        category_id: '8',
        user_id: '2',
    },
    {
        item_name: 'YEAAAAH BUDDYYYYY LIGHT WEIGHT!',
        picture: 'https://www.muscleandfitness.com/wp-content/uploads/2019/02/ronnie-coleman-squat-barbell-1109.jpg?w=1109&h=614&crop=1&quality=86&strip=all',
        category_id: '9',
        user_id: '4',
    },
    {
        item_name: 'Lofi',
        picture: 'https://wallpapercave.com/wp/wp9421135.jpg',
        category_id: '10',
        user_id: '5',
    },
    {
        item_name: 'GO DAWGS!',
        picture: 'https://s3.amazonaws.com/sidearm.sites/georgiadogs.com/custompages/gallery/FB_Alabama_011022/thumbs/_middle_220111_mlm_fb_natty_32424.jpg',
        category_id: '11',
        user_id: '1',
    },
    {
        item_name: 'Phone Holder',
        picture: 'https://wooddad.com/wp-content/uploads/2019/05/wooden-mobile-holder-2.png',
        category_id: '12',
        user_id: '2',
    },
    {
        item_name: 'IDK What to put here',
        picture: 'https://www.businessbalancesheet.com/wp-content/uploads/2021/11/ideas.jpg',
        category_id: '13',
        user_id: '3',
    },
    {
        item_name: 'Pembroke Welsh Corgi',
        picture: 'https://www.akc.org/wp-content/uploads/2017/11/Pembroke-Welsh-Corgi-standing-outdoors-in-the-fall.jpg',
        category_id: '14',
        user_id: '4',
    },
    {
        item_name: 'Survive this class',
        picture: 'https://media.cdnandroid.com/2b/84/9a/5d/imagen-bright-todo-0big.jpg',
        category_id: '15',
        user_id: '5',
    },
]

const seedItems = () => Item.bulkCreate(itemData)

module.exports = seedItems