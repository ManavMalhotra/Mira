# Mira - WhatsApp userbot

Mira is a userbot for WhatsApp that enhances your messaging experience with various features. You can use Mira to:

- Convert replied images to stickers without ruining your WhatsApp
- Get anime images by searching with anime name
- Get weather information by entering a location
- Do YouTube search and get results as links
- Download YouTube videos or songs by providing a link
- Do text to speech conversion by typing some text
- Get current time in your timezone
- Get server information such as CPU usage, memory usage, etc.

Mira is built with Node.js, Baileys (an unofficial WhatsApp web API), Cheerio.js (a web scraping library), Sharp.js (an image processing library) and other dependencies.

## How to set up Mira in local environment

To run Mira on your local machine, you need to have Node.js and npm installed. You also need to have a WhatsApp account and scan a QR code to authenticate Mira.

Follow these steps to set up Mira:

1. Clone this repository or download the zip file.
2. Open a terminal and navigate to the project folder.
3. Run `npm install` to install all the dependencies.
4. Run `node index.js` to start Mira.
5. Scan the QR code that appears on the terminal with your WhatsApp app.
6. Enjoy using Mira!

## How to use Mira commands

To use Mira commands, you need to type them in any chat window with a dot (`.`) prefix.

For example:

- To convert an image to sticker, reply to an image message with `.sticker`.
- To get anime images, type `.anime <anime name>`. For example: `.anime Naruto`.
- To get weather information, type `.weather <location>`. For example: `.weather London`.
- To do YouTube search, type `.yts <query>`. For example: `.yts funny cats`.
- To download YouTube video or song, type `.ytdl <yt link>` or `.yts <yt link>`. For example: `.ytdl https://www.youtube.com/watch?v=dQw4w9WgXcQ`.
- To do text to speech conversion, type `.tts <text>`. For example: `.tts Hello world`.
- To get current time, type `.time`.
- To get server information, type `.system`.

Note: Some commands may take longer than others depending on your internet speed and server load.

## Disclaimer

Mira is an unofficial userbot for WhatsApp and is not affiliated with WhatsApp Inc. Use it at your own risk and responsibility. The developer of Mira is not liable for any damages or losses caused by using this userbot.
