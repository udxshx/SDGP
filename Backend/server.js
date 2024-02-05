const express = require('express');
const mongoose = require('mongoose');
const organizationRoutes = require('./routes/organizationRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const schoolRoutes = require('./routes/schoolRoutes');
const seminarRoutes = require('./routes/seminarRoutes');
require('dotenv').config();

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
   console.log(req.path, req.method);
   next();
})

//routes
app.use('/api/organizations', organizationRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/seminars', seminarRoutes);

//connect to mongodb
mongoose.connect(process.env.MONGO_URI)
.then(() => {
   console.log('connected to mongodb');

   //listen to port
   app.listen( process.env.PORT,() => {
      console.log('Listening for requests on PORT', process.env.PORT)
   })
})
.catch((err) => {
    console.log(err);
})
