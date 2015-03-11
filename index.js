var wd = require('webdriverio')

var options = {
    desiredCapabilities: {
        browserName: 'chrome',
        name: 'selenium twitter example'
    },
    host: 'ondemand.saucelabs.com',
    port: 80,
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
}

wd
    .remote(options)
    .init()
    .url('http://www.twitter.com/login')
    .waitForEnabled('.js-username-field:nth-child(1)')
    .setValue('.js-username-field:nth-child(1)', 'TinyTimZamboni@gmail.com')
    .setValue('.js-password-field:nth-child(1)', process.env.TWITTER_PASS)
    .click('.primary-btn')
    .waitForExist('#tweet-box-mini-home-profile')
    .setValue('#tweet-box-mini-home-profile', 'posting to my twitter account programmatically using @saucelabs ')
    .waitForEnabled('.js-tweet-btn', 3000)
    .click('.js-tweet-btn')
    .pause(2000)
    .end();
