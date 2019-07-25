
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyparser = require('body-parser');
var session = require('express-session');
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
app.use(session({
    secret:'ddingdong',
    resave:false,
    saveUninitialized:true,
}));
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

router.route(app.post('/',(req,res)=>{
    
    console.log(req.session)
    session=req.session;
    var isLogin = false;
    if(req.session.username){
        isLogin=req.session.username;
    }
    res.send(isLogin);
    
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
            console.log('The solution is ',rows);
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

router.route(app.post('/signin',(req,res)=>{
    console.log(req.session);
    var data = req.body;
    var sql = 'select (id),(password) from user where id like "'+data.id+'"';
    connection.query(sql,function(err,result){
        if(err) throw err;
        var isLogin;
        if(data.id===result[0].id){
            if(data.password===result[0].password){
                isLogin="success"//로그인 성공
                 req.session.username = {id:result[0].id};
                 //res.send(isLogin);
                 //console.log(session);
                 console.log(req.session);
                //  res.redirect('/');
            }else{
                isLogin="pass"//비밀번호 오류
            }
        }else{
            isLogin="id"//ID 오류
        }
        res.send(isLogin);
    })
}));

router.route(app.post('/logout',(req,res)=>{
    console.log(session)
    req.session.destroy(function(err){
        if(err){

        }else{
            console.log(session);
        }
    });
    console.log(session);
}));

app.listen(4000,()=>{
    console.log('Express app listening on port 4000');
});