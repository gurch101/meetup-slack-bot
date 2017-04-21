const fetch = require("node-fetch");
const config = require("../config.js");


module.exports = {
    postMessage: (message) => {
        if(!config.SLACK_CONFIG.webhook_url) {
            throw Error("Please set SLACK_MEETUP_WEBHOOK_URL");
        }
        return fetch(config.SLACK_CONFIG.webhook_url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text: message })
        }).then(res => res.text()).then((text) => {
            if(text !== "ok") {
                throw Error("Failed to post message to slack");
            }
        });
    }
};
