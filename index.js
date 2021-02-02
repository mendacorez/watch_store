const express = require('express');
const app = express();
const cors = require('cors');

//ROUTES
const color = require('./Routes/color')
const listofgoodsAdmin = require('./Routes/listofgoodsadmin')
const clients = require('./Routes/clients')
const gender = require('./Routes/gender')
const manufacturercountry = require('./Routes/manufacturercountry')
const mechanismtype = require('./Routes/mechanismtype')
const orderdetails = require('./Routes/orderdetails')
const orders = require('./Routes/orders')
const strapsize = require('./Routes/strapsize')
const straptype = require('./Routes/straptype')
const watchmanufacturer = require('./Routes/watchmanufacturer')

const listofgoodsClient = require('./Routes/listofgoodsclient')

const themostpopularwatch = require('./Routes/themostpopularwatch')
const themostactiveclient = require('./Routes/themostactiveclient')
const salesfromto = require('./Routes/salesfromto')
const clientsOrder = require('./Routes/clientsorder')

const email = require('./Routes/email')

//middleware
app.use(cors());
app.use(express.json()); //req.body


//color
app.use('/color', color);
//listofgoodsADMIN
app.use('/listofgoodsadmin', listofgoodsAdmin)
//clients
app.use('/clients', clients)
//gender
app.use('/gender', gender)
//manufacturercountry
app.use('/manufacturercountry', manufacturercountry)
//mechanismtype
app.use('/mechanismtype', mechanismtype)
//orderdetails
app.use('/orderdetails', orderdetails)
//orders
app.use('/orders', orders)
//strapsize
app.use('/strapsize', strapsize)
//straptype
app.use('/straptype', straptype)
//watchmanufacturer
app.use('/watchmanufacturer', watchmanufacturer)

//listofgoodsCLIENT
app.use('/listofgoodsclient', listofgoodsClient)


//QUERIES//

//themostpopularwatch
app.use('/themostpopularwatch', themostpopularwatch)
//themostactiveclient
app.use('/themostactiveclient', themostactiveclient)
//salesfromto
app.use('/salesfromto', salesfromto);
//clients order
app.use('/clients-order', clientsOrder)

//EMAIL//
app.use('/email', email)



app.listen(5000, () => {
    console.log('Well done!')
})

