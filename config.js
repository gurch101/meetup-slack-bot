module.exports = {
    // querystring parameters to pass to the meetup open events API:
    // documentation: https://www.meetup.com/meetup_api/docs/2/open_events/
    MEETUP_API_PARAMS: {
        // get a key here: https://secure.meetup.com/meetup_api/key/
        key: process.env.MEETUP_API_KEY,
        // tech
        category: 34,
        // vancouver, BC
        lat: 49.2827,
        lon: -123.1207,
        // used to format time=<start>,<end>
        days: 1
    },
    SLACK_CONFIG: {
        // create a webhook here: https://slack.com/services/new/incoming-webhook
        webhook_url: process.env.SLACK_MEETUP_WEBHOOK_URL
    }
};
