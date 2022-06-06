const express = require('express');
const app = express();
const cors = require('cors');
const { use } = require('express/lib/application');
const PORT = 8080;

const earth = {
    continents:{
        'Africa': {
            'name': 'Africa',
            'country-count': '54',
            'oceans':{
                'summary':'Surrounded by three oceans.',
                'list': ['South-Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
            },
            'religion':['Christianity(48%)', 'Islam(45.5%)', 'Other(6.5%)'],
            'size': '30.37 million km²',
            'population': '1,216,130,000',
            'biggest-country':{
                'name':'ALgeria',
                'size':'',
                'geographical-position':''
            },
            'smallest-country': {},
            'landmarks':{},
            'geographical-position':'',
            'images':['https://www.nationsonline.org/gallery/africa/Flag-Globe-Africa.jpg" alt="map of africa']
        },
        'Antarctica': {},
        'Asia':{},
        'Australia': {},
        'Europe':{},
        'North-america': {},
        'South-america':{}
    },
    oceans:{}
}

app.use(cors())
app.use(express.static('public'))

app.get('/', (reg, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api',cors(), (req,res)=>{
    return res.json(earth)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})