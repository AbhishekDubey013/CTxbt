// src/cron/jobs.js
const cron = require('node-cron');
const { updateSubscribers } = require('../services/subscriptionService');
const { processTweets } = require('../services/tweetsService');
const { fetchAndUpdateCoins } = require('../services/coinsService');
const { messageSender } = require('../services/messageSender');
const { addSubscriber } = require('../services/addSubscribers');

function startCronJobs() {
    // // updateSubscribers will run every 12 hours (at midnight and noon)
    // cron.schedule('0 */12 * * *', async () => {
    //     console.log('Starting active subscription updater at:', new Date().toISOString());
    //     await updateSubscribers();
    // });

    // // // processTweets will run every day at 10 AM
    // // cron.schedule('0 22 * * *', async () => {
    // //     console.log('Starting tweets processing job at:', new Date().toISOString());
    // //     await processTweets();
    // // });

    // // Coins Update Job remains scheduled to run every day at midnight
    // cron.schedule('0 0 * * *', async () => {
    //     console.log('Starting coins update job at:', new Date().toISOString());
    //     await fetchAndUpdateCoins();
    // });

    // // messageSender will run every 6 hours
    // cron.schedule('0 */6 * * *', async () => {
    //     console.log('Starting message sender job at:', new Date().toISOString());
    //     await messageSender();
    // });

    console.log('Cron jobs are scheduled.');

    // console.log('Starting active subscription updater at:', new Date().toISOString());
    // updateSubscribers();
    // console.log('Starting coins update job at:', new Date().toISOString());
    // fetchAndUpdateCoins();
    console.log('Starting tweets processing job at:', new Date().toISOString());
    processTweets();
    // console.log('Starting message sender job at:', new Date().toISOString());
    // messageSender();

    // const twitterHandles = [
    //     "Steve_Cryptoo",
    //     "aixbt_agent",
    //     "dippy_eth",
    //     "cryptostasher",
    //     "KAPOTHEGOAT01",
    //     "CryptoDona7",
    //     "IncomeSharks"
    // ];
    // const subscriber = "chain_l";

    // addSubscriber(twitterHandles, subscriber);
}

module.exports = { startCronJobs };
