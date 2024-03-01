const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3339
const conn = require('./db/conn')
const Task = require('./models/Task')
const tasksRoutes = require('./routes/tasksRoutes')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({extended: true,}))

app.use(express.json())
app.use(express.static('public'))
app.use(express.static('images'))

app.use('/tasks', tasksRoutes)

conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando com sucesso na porta ${port}`);
    })
}).catch((err) => console.log(err))