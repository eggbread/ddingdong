// import Category from '../src/components/Category';
const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const multer =require('multer');
const fs = require('fs');

const connection = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'maxim1658',
    port:'3306',
    database:'ddingdong'
});
connection.connect();
var multer_settings = multer({
    dest:'./'
})
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
        if(userdata.id){
            isLogin=userdata.id
        }
    }catch(err){
        isLogin=false
    }
    res.send(isLogin)
    
}));

router.route(app.post('/list',(req,res)=>{
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
        case 'all':
            category="%"
        break;
        default:

    }
    // '+/*req.body.location*/+'
    connection.query('SELECT * FROM store where category like "'+category+'" AND postNumber like "%";',function(err,rows,fields){
        if(!err){
            res.send(rows);         
        }else{
            console.log('Error while performing Query',err);
        }
    });
}));

router.route(app.post('/signup',(req,res)=>{
    var data = req.body;
    var sql='INSERT INTO user VALUES("'+data.id+'","'+data.password+'","'+data.name+'","'+data.phone+'","'+data.birth+'")';
    var dir='../src/asset/images/';
        if(!fs.existsSync(dir+data.id)){
            fs.mkdirSync(dir+data.id)
        }
    connection.query(sql,function(err,result){
        if(err) {
            throw err;
        }
        console.log("INSERT OK");
        res.sendStatus(200)
    })
}));

app.post('/signin',(req,res)=>{
    var data = req.body;
    var sql = 'select (id),(password) from user where id like "'+data.id+'"';
    let isLogin;
        connection.query(sql,function(err,result){
            if(err) throw err;
            if(data.id===result[0].id){
                if(data.password===result[0].password){
                    //로그인 성공
                    let token = jwt.sign({
                        id:data.id
                    },
                    'ddingdong',{
                     expiresIn:'100m'
                    })
                    isLogin=token;
                }else{
                    isLogin="pass"//비밀번호 오류
                }
            }else{
                isLogin="id"//ID 오류
            }
            res.send(isLogin)
        })

});
app.post('/menu/search', (req, res) => {
    var client = require('cheerio-httpcli');
    var data = req.body.data;
    var word = encodeURIComponent(data)
    let url = 'https://www.google.com/search?q=' + word;
    var re = []
    client.fetch(url, re, function(err, $, res) {
      if (err) {
        console.log(err);
        return;
      }
      $(".rc").each(function(post) {
        var param = {
          title : $(this).find('.r').find('.LC20lb').text(),
          link : $(this).find('.r').children().attr('href'),
          passage : $(this).find('.s').text()
        }
        re.push(param)
      })
   })
   setTimeout(function() {
     res.send(re);
   }, 1500);
  });
router.route(app.post('/menu',(req,res)=>{
    var data = req.body;
    var sql = 'select * from store where storeID like "'+data.storeID+'"';
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
    })
    
}))

router.route(app.post('/storemanage',(req,res)=>{
    var io = require('socket.io').listen(server);
    var order = io.of('/storemanage').on('connection',function(socket){
        socket.on('order message',function(data){
            var storeId = socket.storeID = data.storeID;
            order.emit(storeId,data.order);
        })
    })
    var data = req.body;
    var token = jwt.verify(req.body.token,'ddingdong');
    var sql = 'select * from store where userid like "'+token.id+'"';
    connection.query(sql,function(err,result){
        if(err) throw err;
        res.send(result);
    })
}))

router.route(app.post('/storemanage/fix',multer_settings.single('mainImg'),(req,res)=>{
    const file = req.file;
    const input_data=req.body;
    //DB에 추가
    let storeId;
    connection.query('select * from store where userid like "'+input_data.userId+'"',function(err,result){
        if(err) throw err;
        if(result.length===0){
            var len;
            connection.query('select * from store',function(err,result1){
                // console.log(result1)
                len=result1.length+1
            })
            storeId=len;
        }else{
            storeId=result.storeID
        }
    })
    console.log(storeId)
    fs.readFile(file.path,(err,data)=>{
    var dir='../src/asset/images/'+input_data.userId+"/";
        // if(fs.existsSync(dir+data.input_userId)){
        //     fs.mkdirSync(dir+input_data.userId)
        //     // if(fs.existsSync(dir+input_data.userId+"/"+input_data.storeID))
        // }
        // var filepath = dir+file.originalname;
        // fs.writeFile(filepath,data,function(err){
        //     if(err){
        //         throw err;
        //     }else{
        //         fs.unlink(file.path,function(remove){
        //             if(remove){
        //                 throw remove;
        //             }
        //         })
        //     }
        // })
    })
}))

var server=app.listen(4000,()=>{
    console.log('Express app listening on port 4000');
});