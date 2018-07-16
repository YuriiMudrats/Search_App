# To start this app do simple three steps
1) In your CLI write yarn or npm i.
2) yarn start
3) open your browser at "localhost:8000"

with best regards DarkShark developers team


## Development process
1. I utilized the offered libraries and standards such as react-redux, redux-thunk, axios, ES6.
2. I faced a need for the creation of proxy-server on ExpressJS, because there are no cors headers prescribed in this API (https://en.wikipedia.org/w/api.php). That API doesn't allow to run request by modern browsers and doesn't fit the security requirements.
3. If I had more time, I would:
  - pay more attention to styles.
  - wrap http://suggestqueries.google.com/ query in debounce function (e. g. lodash) to increase view performance and make it possible to reduce requests to API.
  - implement more tests, which can cover redux, requests to API and Proxy Server.
