const http = require('http');

const server = http.createServer((req, res) => {
  if (req.headers['if-none-match']) {
    res.statusCode = 304;
    res.end();
  } else {
    const body = JSON.stringify({hi: 'there'})
    res.setHeader('content-type', 'application/json')
    res.setHeader('content-length', body.length)
    res.setHeader('etag', '5f6d7s87678f9sdsfd67sdf66sf7879s')
    res.setHeader('cache-control', 'public,')
    res.write(body)
    res.end()
  }
})

server.listen(8976)