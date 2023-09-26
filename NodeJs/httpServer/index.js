//The http.createServer() method includes request and reponse parameters which is supplied by node.js
//
// The request object can be used to get the current HTTp request
// eg, url. request header and data

// the response object can be used to send a response for a current HTTP requesr

// If the response from the http  server is supposed to be displayed as HTMl,
// you should include an HTTP header with the correct content type

const http = require("http");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  if (req.url == "/") {
    res.end("Hello from the home page");
  } else if (req.url == "/about") {
    res.end("Hello from the about page");
  } else if (req.url == "/contact") {
    res.end("Hello from the contact page");
  } else {
    res.writeHead(404, {"content type": "text/html"});
    res.end(" <h1>Error! page not Found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listning on port 8000");
});
