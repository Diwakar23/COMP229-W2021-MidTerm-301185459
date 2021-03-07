// Created by Diwakar Vikram Singh
//Section: 401
//Roll No: 301185459
//Semester 01: Midterm Exam 
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Price: Number,
    Author: String,
    Genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
