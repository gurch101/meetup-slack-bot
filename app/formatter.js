const moment = require("moment");


module.exports = {
    // formats message according to https://api.slack.com/docs/message-formatting
    formatMessage: (eventsJson) => {
        const title = `*Meetups for ${moment().format("dddd, MMMM Do YYYY")}*\n\n`;
        if(eventsJson.results.length === 0) {
            return `${title} No meetups today :disappointed:`;
        }
        return title + eventsJson.results.map((event) => {
            let message = "";
            let venueName = "No location";
            if(event.venue) {
                venueName = `<https://www.google.com/maps/place/${encodeURIComponent(event.venue.address_1)}`;
                venueName += `|${event.venue.name} - ${event.venue.address_1}>`;
            }
            message += `>*<${event.event_url}|${event.name}>*\n`;
            message += `>${event.group.name}\n`;
            message += `>${venueName}\n`;
            message += `><!date^${event.time / 1000}^{date} at {time}|${moment(event.time).format("MMMM Do h:mm A")}>`;
            return message;
        })
        .join("\n\n");
    }
};
