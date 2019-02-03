const Slackbot = require('slackbots')

const {BOT_NAME} = require('./constants')
const {SLACK_BOT_API_KEY} = require('./api_keys')

const slackdownBot = new Slackbot({
    token: SLACK_BOT_API_KEY,
    name: BOT_NAME
})