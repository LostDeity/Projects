const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');
const placesRoutes = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');
const HttpError = require('./models/http-error');

const path = require('path');

const app = express();

app.use(bodyParser.json());

app.use('/uploads/images', express.static(path.join('uploads', 'images')));
app.use(express.static(path.join('public')));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*',);
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/places', placesRoutes); // => /api/places/....

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

/* app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
}); */

app.use((error, req, res, next) => {
    if (req.file) {
        fs.unlink(req.file.path, () => {
            console.log(error);
        });
    }
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);

    res.json({ message: error.message || 'An unknown error occured!' });
});

mongoose
    .connect(`mongodb+srv://erincmnl:BCUmx9p1f9L95NHm@cluster0.noyuvpk.mongodb.net/mern-prod?retryWrites=true&w=majority&appName=Cluster0`)// would want to use different mongodb atlas account when going into production. Dataase will also be different.
    .then(() => {
        app.listen(process.env.PORT || 5000);
    })
    .catch(err => {
        console.log(err);
    });

