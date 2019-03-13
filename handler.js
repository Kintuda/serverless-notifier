'use strict'
const https = require('https')
const get = async (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(`Failed: status code diferente de 200!`)
      }
      resolve()
    }).on("error", (error) => {
      reject(error && error.message)
    })
  })
}


module.exports.notifier = async (event, context) => {
  try {
    const message = event.Records[0].Sns.Message
    const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=${message}`
    await get(url);
  } catch (error) {
    console.log(`Failed: ${error}`);
    throw error
  }
}
