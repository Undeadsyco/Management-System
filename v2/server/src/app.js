/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const router = require('./routes');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser({ credentials: true, origin: true }));
app.use(cors());

app.use((req, res, next) => {
  req.startTime = new Date().getTime();
  next();
});

app.use('/', router);

app.use(({ error, status }, req, res, next) => {
  if (error) {
    next({ error });
  }
  if (status === 'successful') {
    fs.appendFile(
      path.join('logs', 'reqLog.txt'),
      `request to route: '${req.url}'; took ${new Date().getTime() - req.startTime}ms to complete\n`,
      {},
      (err) => {
        if (err) next({ err });
      },
    );
  } else {
    res.send('unable to find page');
  }
});

app.use(({ error }, req, res, next) => {
  fs.appendFile(
    path.join('logs', 'errorLog.txt'),
    `occuered at: ${new Date()},\nerror status: ${error?.status},\nerror message: ${error?.message},\nerror stack: ${error?.stack}, \n\n\n\n\n`,
    {},
    (err) => {
      if (err) console.log(err);
    },
  );
});

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, autoIndex: false },
  (error) => {
    if (error) {
      fs.appendFile(
        path.join('logs', 'errorLog.txt'),
        `occuered at: ${new Date()},\nerror status: ${error?.status},\nerror message: ${error?.message},\nerror stack: ${error?.stack}, \n\n\n\n\n`,
        {},
        (err) => {
          if (err) console.log('logging failed\n', err);
        },
      );
      process.exit();
    } else {
      console.log('connected to database');
      app.listen(process.env.PORT || 5000, (err) => {
        if (error) console.log('err in listen function', err);
        console.log(`app running on port ${process.env.PORT || 5000}`);
      });
    }
  },
);
