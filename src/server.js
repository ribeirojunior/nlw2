
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//nunjucks//template engine
const nunjucks = require('nunjucks')
nunjucks.configure("src/views", {
    express: server,
    nocache: true,

})


server
//receber os dados do rec.body
.use(express.urlencoded({extended: true}))

//Congirugrar os arquivos estaticos
.use(express.static("public"))


//caminhos da app
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

