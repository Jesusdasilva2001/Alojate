require('dotenv').config();
      var express = require('express');
      var path = require('path');
      var cookieParser = require('cookie-parser');
      var morgan = require('morgan');
      
      var app = express();
      
      app.use(morgan('dev'));
      app.use(express.json());
      app.use(express.urlencoded({ extended: false }));
      app.use(cookieParser(process.env.COOKIE_SECRET));
      app.use(express.static(path.join(__dirname, 'public')));
      const port = parseInt(process.env.port || '8080');
      app.listen(port,function() {
        console.log("Server running at http://localhost:"+port);
      });