const cheerio = require('cheerio')
const request = require('request')
const pretty = require('pretty')
const fs = require('fs')

async function animeImages(anime) {
  let cleanAnime = anime.trim()
  let cleanAnime2 = cleanAnime.replace(' ', '+')
    request(`https://wall.alphacoders.com/search.php?search=${anime}`, async (err, res, body) => {
        if (err) {
          console.log(err)
        };
        let $ = cheerio.load(body)

        let image = await $('picture > .img-responsive.thumb-desktop');

        let api = [];
        for (var i = 0; i < image.length; i++) {
          let obj = {attr: "", img: "" };

          obj.attr = image[i].attribs.alt
          obj.img = image[i].attribs.src

          api.push(obj)

        }

        fs.writeFile("animeImages.json", JSON.stringify(api), (err) => {})
      })

    }

module.exports = animeImages
