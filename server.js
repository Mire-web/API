const express = require('express');
const app = express();
const cors = require('cors');
const { use } = require('express/lib/application');
const PORT = 8888;

const earth = {
    continents:{
        'Africa': 'Nigeria',
        'Antarctica': 'Real Cold',
        'Australia': 'New-zealand',
        'North-america': 'USA'
    }
}

app.use(cors())
app.use(express.static('public'))

app.get('/', (reg, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req,res)=>{
    return res.json(earth)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})