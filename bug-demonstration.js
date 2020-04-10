const fetch = require('make-fetch-happen').defaults({ cacheManager: './my-cache' });

fetch('http://localhost:8976').then(r => {
  console.log("Request 1:")
  console.log('content-type', r.headers.get('content-type')); // text/html
  console.log('status', r.status); // 200
  console.log('ok', r.ok); // true

  return r.json().then(json => {
    console.log('body', json);

    // now use the cache
    return fetch('http://localhost:8976');
  })
}).then(r => {
  console.log("\nRequest 2:")
  console.log('content-type', r.headers.get('content-type')); // null
  console.log('status', r.status); // 304
  console.log('ok', r.ok); // false

  return r.json().then(json => {
    console.log('body', json)
  })
})