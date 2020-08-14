import axios from "axios";
import cheerio from "cheerio";
import * as fs from "fs";

async function crawlUser(username) {
    if (username === null || username.length === 0) return null;
    let url = JSON.parse(fs.readFileSync('package.json', 'utf8'))["targetUrl"] + "users/"+ username;
    console.log(url);
    let html = await axios.get(url).then(r => r.data);
    let $ = cheerio.load(html);
    return $(div).length;
}

export default crawlUser;