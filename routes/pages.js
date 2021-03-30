const {Router} = require('express');
const router = Router();
const db = require('../db')


router.get('/', async (req, res) => {
    let query="SELECT * FROM production";
  
    res.render('index',{
        title: 'Главная',
        isIndex: true
    });
});

router.get('/computer', async (req, res) => {
    let query="SELECT * FROM production";
  
    db.query(query, (err, result) =>{
        if(err){
        return console.error("Ошибка: " + err.message);
        }
        const getproductionrows = result;
        
        res.render('computer',{
        title: 'Компьютеры',
        isComputer: true,
        getproductionrows
    })
    });
});

router.get('/laptops', async (req, res) => {
    let query="SELECT * FROM laptops";
  
    db.query(query, (err, result) =>{
        if(err){
        return console.error("Ошибка: " + err.message);
        }
        const getproductionrows = result;
        
        res.render('laptops',{
        title: 'Ноутбуки',
        isLaptops: true,
        getproductionrows
    })
    });
});

router.get('/periphery', async (req, res) => {
    let query="SELECT * FROM periphery";
  
    db.query(query, (err, result) =>{
        if(err){
        return console.error("Ошибка: " + err.message);
        }
        const getproductionrows = result;
        
        res.render('periphery',{
        title: 'Переферия',
        isPeriphery: true,
        getproductionrows
    })
    });
});

router.get('/create', (req, res) => {
    res.render('create',{
        title: 'Создать',
        isCatalog: true
    })
});

router.post('/create', async (req, res) => {

    const createForm = {
        name: req.body.name,
        direction: req.body.direction,
        price: req.body.price
    }
    
    const query = db.query('INSERT INTO production SET ?', {id: '', name: createForm.name, direction: createForm.direction, price: createForm.price}, function (error, results) {
        if (error) throw error;
        // Neat!
        });

    res.redirect('/');

})

module.exports = router;

