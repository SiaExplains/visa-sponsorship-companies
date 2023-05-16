const austria = require("./austria.json");
const belgium = require("./belgium.json");
const england = require("./england.json");
const finland = require("./finland.json");
const france = require("./france.json");
const germany = require("./germany.json");
const ireland = require("./ireland.json");
const italy = require("./italy.json");
const netherlands = require("./netherlands.json");
const newZealand = require("./new-zealand.json");
const norway = require("./norway.json");
const spain = require("./spain.json");
const sweden = require("./sweden.json");

const ALL_COUNTRIES = () => {
  const allCountries = [];
  allCountries.push(
    ...austria,
    ...belgium,
    ...england,
    ...finland,
    ...france,
    ...germany,
    ...ireland,
    ...italy,
    ...netherlands,
    ...newZealand,
    ...norway,
    ...spain,
    ...sweden
  );

  return allCountries;
};

export default ALL_COUNTRIES;
