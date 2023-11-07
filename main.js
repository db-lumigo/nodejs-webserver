var http = require("http");

// javascript
const lumigo = require("@lumigo/opentelemetry");
//const Resource = require('@opentelemetry/resources');
//const BasicTracerProvider = require('@opentelemetry/sdk-trace-base');

const tracerProvider = (await lumigo.init).tracerProvider;

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   console.log("sdadsada");
   response.end('Hello World\n');
}).listen(8081);
//try {
//  await tracerProvider.forceFlush();
//} catch (err) {
//  console.error(err);
//}

// Console will print the message
console.log(process. env);
console.log('Server running at http://127.0.0.1:8081/');
