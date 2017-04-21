const fetch = require("node-fetch");
const moment = require("moment");
const querystring = require("querystring");
const config = require("../config.js");


function getUrl() {
    const fromTime = moment().subtract(1, "days").startOf("day").valueOf();
    const toTime = moment(fromTime).add(config.MEETUP_API_PARAMS.days, "days").endOf("day").valueOf();
    const queryparams = Object.assign(
        { page: 100 },
        config.MEETUP_API_PARAMS,
        { time: `${fromTime},${toTime}` }
    );
    delete queryparams.days;
    const qs = querystring.stringify(queryparams);

    return `https://api.meetup.com/2/open_events?${qs}`;
}


module.exports = {
    fetchEvents: () =>
        fetch(getUrl())
            .then(res => res.json())
            .then((res) => {
                if(res.code === "not_authorized") {
                    throw Error(res.details);
                }
                return res;
            })
};
