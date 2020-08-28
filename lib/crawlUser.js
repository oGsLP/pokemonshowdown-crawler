import axios from "axios";
import cheerio from "cheerio";
import * as fs from "fs";

async function crawlUser(username) {
    if (username === null || username.length === 0) return null;
    let url = JSON.parse(fs.readFileSync('package.json', 'utf8'))["targetUrl"] + "users/"+ username;
    console.log(url);
    let html = await axios.get(url).then(r => r.data);
    let $ = cheerio.load(html);

    let joinDate = $('.pfx-body > p > small').text().split(":")[1].trim()
    let table = $('.pfx-body table > tbody')

    let sign = false;
    table.each((index, tr)=>{
       if (tr.children('th')){
           if (index !== 0) sign = true;
           return;
       }
       if (sign){

       }
       else {

       }
    });
    // fs.writeFileSync("./test.html", table.toString());
    console.log(joinDate)
    console.log(table)

    return {
        username,
        joinDate,
        Ratings: {
            official:[

            ],
            unofficial:[

            ]
        }
    };

}

export default crawlUser;