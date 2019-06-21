
//we require http module to working.
//Somewhere within Node.js lives a module called “http”, and we
// can make use of it in our own code by requiring it and assigning
// the result of the require to a local variable.
// This makes our local variable an object that carries all the public
// methods the http module provides.


var http = require("http");
var url = require("url");

function start(route,handle)
{

http.createServer(function(request,response)
{
  var postData = ""
var path = url.parse(request.url).pathname;
console.log("request for"+ path + "is recived");
route(handle, path, response, request);   
// request.setEncoding("utf-8");

// request.addListener("data", (postDataChunk)=> {
//     postData = postData + postDataChunk;
//     console.log("Received POST data chunk '"+
//     postDataChunk + "'.");
//     });

//     request.addListener("end", function() {
      
//         });




// var content = route(handle,path);

// route(handle,path,response);
// response.writeHead(200,{"Content-Type":"text/plain"});
// response.write(content);

// response.end();

}).listen(8888);


console.log("server has started");
}   

exports.start = start;



// http module have a function called "createServer()" this method returns the object and this object have a method called listen()
// and this method takes the port number.

//we write code for starting server like this

// var http = require("http");
// var object = http.createServer();
// object.listen(8888);




//NOTE ==> 
// request and response are objects, and you can use their methods to handle the
// details of the HTTP request that occured and to respond to the
// request (i.e., to actually send something over the wire back to the
// browser that requested your server).
// And our code does just that: Whenever a request is received, it
// uses the response.writeHead() function to send an HTTP status
// 200 and content-type in the HTTP response header, and the
// response.write() function to send the text “Hello World” in the
// HTTP response body.
// At last, we call response.end() to actually finish our response.
// At this point, we don’t care for the details of the request, which
// is why we don’t use the request object at all.



// now we make router when request comes which So, we need to look into the HTTP requests and extract the
// requested URL as well as the GET/POST parameters from them.

// All the information we need is available through the request
// object which is passed as the first parameter to our callback
// function onRequest(). But to interpret this information, we need
// some additional Node.js modules, namely url and querystring.



// now we import the "url" module , 
// The url module provides methods which allow us to extract the
// different parts of a URL (like e.g. the requested path and query
// string), and querystring can in turn be used to parse the query
//string for request parameters:


// url looks like this
// http://localhost:8888/start?foo=bar&hello=world

// here "start" is a pathname and we extract like this

// var path = url.parse(http://localhost:8888/start?foo=bar&hello=world).pathname
// or
// var path = url.parse(request.url).pathname;      "request is a object we pass in callback"


// here "foo=bar&hello=world" is a query parameters and extract like 

// var query = url.parse(request.url).query;


// querystring(string)["foo"],querystring(string)["hello"]







// handling post request
// Now that we are becoming expert novices, we are no longer
// surprised by the fact that handling POST data is done in a non-
// blocking fashion, by using asynchronous callbacks.Which makes sense, because POST requests can potentially be
// very large - nothing stops the user from entering text that is multiple megabytes in size. Handling the whole bulk of data in
// one go would result in a blocking operation.

// To make the whole process non-blocking, Node.js serves our code
// the POST data in small chunks, callbacks that are called upon
// certain events. These events are data (an new chunk of POST
// data arrives) and end (all chunks have been received).


// We need to tell Node.js which functions to call back to when
// these events occur. This is done by adding listeners to the request
// object that is passed to our onRequest callback whenever an
// HTTP request is received.




// /This basically looks like this:


// request.addListener("data", function(chunk) {
// // called when a new chunk of data was received
// });
// request.addListener("end", function() {
// // called when all chunks of data have been received
// });