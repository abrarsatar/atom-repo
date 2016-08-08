var express = require('express'),
  app = express,
  port = process.env.PORT || 1337,
  logger = require ('morgan'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
