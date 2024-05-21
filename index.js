const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  let path = './';
  switch (req.url) {
    case '/': {
      path += 'index.html';
      res.statusCode = 200;
      break;
    }
    case '/about': {
      path += 'about.html';
      res.statusCode = 200;
      break;
    }
    case '/contact': {
      path += 'contact.html';
      res.statusCode = 200;
      break;
    }
    default: {
      path += '404.html';
      res.statusCode = 404;
      break;
    }
  }
  fs.readFile(path, (err, data) => {
    if (err) throw err;
    else res.end(data);
  });
});

server.listen(8080);
