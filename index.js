const deepClone = require('./lib/deepClone');
const startingObject = {name: "Paddy", address: {town: "Lerum", country: "Sweden"}};
const haversine = require('./lib/haversine');
const partners = require('./data.json');

deepClone(startingObject);
haversine(partners);