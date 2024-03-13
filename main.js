import mongose from "mongose";
import { express } from "express";

await mongose.connect("mongodb://localhost:27017/");

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000) 