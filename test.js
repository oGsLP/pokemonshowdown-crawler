import psCrawler from "./index.js";

psCrawler.crawlLadder("")

psCrawler.crawlUser("oGsLP").then(data => {
    console.log(data);
}).catch(err=>{
    console.log(err);
});