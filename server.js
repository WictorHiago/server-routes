const express = require('express')
const app = express()
const multer = require('multer')


app.get('/', (req, res) =>{
    res.send('SERVER EXPRESS TEST ROUTES')
})

const upload = multer({ dest: './public/data/uploads/' })

app.post('/fonts', upload.single('file'), (req, res) => {
   console.log(req.file, req.body)
   res.send('arquivo enviado')
});



app.listen(3000,console.log('Server on: http://localhost:3000 '))