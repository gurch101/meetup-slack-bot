const meetup = require("./app/meetup.js");
const formatter = require("./app/formatter.js");
const slack = require("./app/slack.js");


meetup.fetchEvents()
    .then(formatter.formatMessage)
    .then(slack.postMessage)
    .catch(err => console.error(err));
