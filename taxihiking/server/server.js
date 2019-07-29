
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken')
const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'maxim1658',
    port:'3306',
    database:'ddingdong'
});
connection.connect();

var app = express();
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

router.route(app.post('/',(req,res)=>{
    var isLogin;
    try{ 
        var userdata=jwt.verify(req.body.token,'ddingdong');
        console.log(userdata)
        if(userdata.id){
            isLogin=userdata.id
        }
    }catch(err){
        isLogin=false
    }
    res.send(isLogin)
}));

router.route(app.post('/list',(req,res)=>{
    console.log(req.body.category);
    var category;
    switch(req.body.category){
        case 'koreanfood':
            category="한식"
        break;
        case 'westfood':
            category="양식"
        break;
        case 'japanfood':
            category="일식"
        break;
        case 'chinafood':
            category="중식"
        break;
        case 'chicken':
            category="치킨"
        break;
        case 'pizza':
            category="피자"
        break;
        case 'pigfoot':
            category="족발"
        break;
        case 'boon':
            category="분식"
        break;
        default:

    }
    connection.query('SELECT * FROM store where category like "'+category+'"',function(err,rows,fields){
        if(!err){
            res.send(rows);         
        }else{
            console.log('Error while performing Query',err);
        }
    });
}));

router.route(app.post('/signup',(req,res)=>{
    var data = req.body;
    var sql='INSERT INTO user VALUES("'+data.id+'","'+data.password+'","'+data.name+'","'+data.storename+'","'+data.phone+'","'+data.birth+'")';
    console.log(sql);
    connection.query(sql,function(err,result){
        if(err) {
            throw err;
        }
        console.log("INSERT OK");
    })
}));

app.post('/signin',(req,res)=>{
    var data = req.body;
    var sql = 'select (id),(password) from user where id like "'+data.id+'"';
    let isLogin;
        connection.query(sql,function(err,result){
            if(err) throw err;
            console.log(result);
            console.log(data.id)
            if(data.id===result[0].id){
                if(data.password===result[0].password){
                    //로그인 성공
                    let token = jwt.sign({
                        id:data.id
                    },
                    'ddingdong',{
                     expiresIn:'10m'
                    })
                    isLogin=token;
                    console.log(isLogin)
                }else{
                    isLogin="pass"//비밀번호 오류
                }
            }else{
                isLogin="id"//ID 오류
            }
            res.send(isLogin)
        })

});

router.route(app.post('/menu',(req,res)=>{
    var data = req.body;
    var sql = 'select * from store where storeID like "'+data.storeID+'"';
    connection.query(sql,function(err,result){
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
    
}))

router.route(app.post('/storemanage',(req,res)=>{
    var data = req.body;
    var token = jwt.verify(req.body.token,'ddingdong');
    var sql = 'select * from store where userid like "'+token.id+'"';
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
    })
}))

app.listen(4000,()=>{
    console.log('Express app listening on port 4000');
});