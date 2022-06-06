const express = require('express');
const app = express();
const cors = require('cors');
const { use } = require('express/lib/application');
const PORT = 8080;

const earth = {
    continents:{
        'Africa': {
            'name': 'Africa',
            'country-count': '57',
            'country-list': ['Algeria','Angola','Benin','Botswana','Burkina Faso','Burundi' ,'Cameroon','Cape Verde','Central African Republic', 'Chad','Comoros','Congo Congo-Brazzaville', 'Congo-Kinshasa',
                 'd\'Ivoire Côte d\'Ivoire','Djibouti','Egypt','Equatorial Guinea', 'Eritrea','Ethiopia','Gabon', 'The Gambia','Ghana','Guinea', 'Guinea-Bissau','Kenya','Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi',  'Mali','Mauritania', 'Mauritius', 'Mayotte', 'Morocco','Mozambique','Namibia','Niger','Nigeria','Réunion','Rwanda','Saint Helena','São Tomé and Príncipe','Senegal','Seychelles','Sierra Leone','Somalia','South Africa','Sudan','Swaziland','Tanzania','Togo','Tunisia','Uganda','Western Sahara ( SADR)', 'Zambia','Zimbabwe'],
            'oceans':{
                'summary':'Surrounded by three oceans.',
                'list': ['South-Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
            },
            'religion':['Christianity(48%)', 'Islam(45.5%)', 'Other(6.5%)'],
            'size': '30.37 million km²',
            'population': '1,216,130,000',
            'biggest-country':{
                'name':'Algeria',
                'size':'2.382 million km²',
                'longitude':'28.0339° N',
                'latitude': '1.6596° E',
                'population':'44 million'
            },
            'smallest-country': {
                'name':'Saint Helena, Ascension and Tristan da Cunha',
                'size':'420 km²',
                'longitude':'24.1435° S',
                'latitude': '10.0307° W',
                'population':' 6,112'
            },
            'landmarks':{},
            'longitude':'8.7832° S',
            'latitude': '34.5085° E',
            'images':['https://www.nationsonline.org/gallery/africa/Flag-Globe-Africa.jpg" alt="map of africa'],
            'country-detail':{
                
            }
        },
        'Antarctica': {
            'name': 'Antarctica',
            'country-count': '0(though 12countries claim part of it.)',
            'country-list': ['France (Adélie Land)', ' United Kingdom (British Antarctic Territory)',  'New Zealand (Ross Dependency)',  'Norway (Peter I Island and Queen Maud Land)',  'Australia (Australian Antarctic Territory)',  'Chile (Chilean Antarctic Territory)',  'Argentina (Argentine Antarctica)',  'Australia',  'Belgium',  'Japan',  'South Africa',  'USA',  'Russia'],
            'oceans':{
                'summary':'The Southern Ocean encircles Antarctica, and its area is usually defined as extending from the edge of the continent (and its ice shelves) to the position of the \'polar front\' separating it from the surrounding Pacific, Indian and South Atlantic Oceans.',
                'list': ['Southern Ocean'],
            },
            'size': '14.2 million km²',
            'population': 'No Permanent inhabitants, although seasonally there are 5000 people (not including those on ships), but this drops to just 1000 people continent-wide during the long, dark, cold winter.',
            'landmarks':{},
            'longitude':'82.8628° S',
            'latitude': '135.0000° E',
            'images':['https://www.nationsonline.org/maps/antarctica_map.jpg'],
            'country-detail':{
                
            }
        },
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
    return res.json(earth.continents)
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})