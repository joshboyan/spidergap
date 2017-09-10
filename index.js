const deepClone = require('./deepClone');
const startingObject = {name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
const haversine = require('./haversine');
const partners = require('./data.json');

deepClone(startingObject);
haversine(partners);