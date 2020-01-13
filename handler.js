'use strict'

const https = require('https')
const { BOT_TOKEN, CHAT_ID } = process.env

const get = async url => new Promise((resolve, reject) => {
  https.get(url, (response) => {
    if (response.statusCode !== 200) {
      return reject(`Failed: status code diferente de 200!`)
    }
    return resolve()
  }).on("error", (error) => {
    return reject(error)
  })
})


module.exports.notifier = async (event, context) => {
  try {
    const message = event.Records[0].Sns.Message
    const obj = JSON.parse(message)
    const mountPayload = encodeURIComponent(`${obj.NewStateValue}: ${obj.AlarmDescription}`)
    const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${mountPayload}`
    await get(url);
  } catch (error) {
    console.log(`Failed: ${error && error.message}`);
    throw error
  }
}
