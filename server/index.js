const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
var _ = require("lodash");
var flash = require('connect-flash');
var router = require("express").Router();
//google
// const speech = require('@google-cloud/speech');
// const fs = require('fs');
// const client = new speech.SpeechClient();
// const fileName = './resources/audio.raw';
// const file = fs.readFileSync(fileName);
// const audioBytes = file.toString('base64');
// const audio = {
//             content: audioBytes,
//           };
//           const config2 = {
//             encoding: 'LINEAR16',
//             sampleRateHertz: 16000,
//             languageCode: 'en-US',
//           };
//           const request = {
//             audio: audio,
//             config: config2,
//           };
// web speech API
// let speech = new webkitSpeechRecognition();
// speech.lang = 'ja-JP';



//ログイン、ログアウトなど
app.get("/", (req, res, next) => {

    res.redirect("/login");
    // async function main() {
    //   const [response] = await client.recognize(request);
    //   const transcription = response.results
    //         .map(result => result.alternatives[0].transcript)
    //         .join('\n');
    //   console.log(`Transcription: ${transcription}`);
    // }
    // main()
});
app.get('/test', (req,res)=>{

  res.send({
    msg:'HELLO WORLD'
  })
})
// app.get("/login", (_req, res) => {
//   res.redirect("/login");
// });

app.set('port', port)
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }


  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })


}
start()
