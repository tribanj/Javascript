const http = require("http");
var requests = require("requests");

const fs = require("fs");

const homeFile = fs.readFileSync("home.html", "utf-8");

const replaceVal = (tempVal, orgVal) => {
  let tempreture = tempVal.replace("{%tempval%}", orgVal.main.temp);
  tempreture = tempreture.replace("{%tempmin%}", orgVal.main.temp_min);
  tempreture = tempreture.replace("{%tempmax%}", orgVal.main.temp_max);
  tempreture = tempreture.replace("{%location%}", orgVal.name);
  tempreture = tempreture.replace("{%country%}", orgVal.sys.country);
  tempreture = tempreture.replace("{%tempStatus%}", orgVal.weather.main);
  return tempreture;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=Jalandhar&appid=6eb2e37c94b493b8bc2030b06f5cb8ab"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
          console.log(objData.main.temp);
        const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
        res.write(realTimeData);
        console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
        console.log("end");
      });
  }
});

server.listen(8000, "127.0.0.1");
