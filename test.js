const gTTS = require('@killovsky/gtts');

const path = require('path')

const fs = require('fs')
let convo = 'hey bro whats is this'

async function abc(){
	let dpath = path.join(path.resolve(__dirname),'tempStorage', 'tts.mp3')
	let bufferss = await gTTS.create("hi", convo.trim(), false, dpath)
    await fs.writeFile(dpath, bufferss.gtts.buffer, async () => {})
}
console.log(path.resolve(__dirname))

