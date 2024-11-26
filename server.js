const app=require('express')
const cors= require('cors')
const bodyParser= require('body-parser')
const Port= process.env.PORT || 5000
app.use(cors())

app.use(bodyParser.json())
 app.listen(PORT,()=>{
   console.log(`${Port}`)
 })
