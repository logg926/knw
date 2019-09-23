var express = require('express');
var app = express();
var path = require('path')

var cors = require('cors');
const multer = require('multer');
// const upload = multer()

app.use(cors());

var sftpStorage = require('multer-sftp')


app.use(express.static('www'));





// var storage = sftpStorage({
//     sftp: {
//       host: 'www.knitnwear.com',
//       port: 8080,
//       username: 'autogen',
//       password: 'autogen!QAZ'
//     },
//     destination: function (req, file, cb) {
//       cb(null, 'upload/')
//     },
//     filename: function (req, file, cb) {
//         // console.log(file.originalname)
//       cb(null, file.originalname)
//     }
//   })

  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload/')
    },
    filename: function (req, file, cb) {
              cb(null, file.originalname)
            }
  })
var upload = multer({ storage: storage }).single('file')

app.post('/api', function (req, res) {

    upload(req, res,function(err){
        if(err){
            return res.end("error uploading file")
        }
        res.end("file is uploaded")
    })

})

app.get("/withsize/*",function(req, res){
    res.redirect('/#/withsize/216/194/1.105/tab1')
})

//     const name = req.body.email+Date.now().toString()+".bmp"

//     var dataurl = req.body.img;
//     // console.log(req.body.email+Date.now().toString()+".bmp");
//     let data = fs.createReadStream('');
//     let remote = req.body.email+Date.now().toString()+".bmp";
// //   res.json(req.body)
// client.connect({
//     host: 'localhost',
//     port: '22',
//     username: 'autogen',
//     password: 'autogen!QAZ'
//   }).then(() => {
//     return client.put(data, remote);
//   })
//   .then(() => {
//     return client.end();
//   })
//   .catch(err => {
//     console.error(err.message);
//   });


// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, 'index.html'))
// });


app.listen(3000, function () {
  console.log('Starting');
});
