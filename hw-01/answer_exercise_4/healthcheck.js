var http = require("http");

var request = http.request('http://localhost:3000/health', (res) => {
  console.log(`status->: ${res.statusCode}`);
  if (res.statusCode == 200) {
    process.exit(0);
  } else {
    process.exit(1);
  }
});

request.on("error", function (err) {
  process.exit(1);
});

request.end();
