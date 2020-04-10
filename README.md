# make-fetch-happen-304

This is a demonstration of the issue in https://github.com/npm/make-fetch-happen/issues/28. To see the problem, run the following:

1. `npm install`
2. `npm start`

Note how Request 1 and Request 2 result in responses with different HTTP statuses, content-type headers, and `ok` booleans.
