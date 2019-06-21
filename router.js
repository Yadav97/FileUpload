function route(handle,path,response,request)
{
console.log("about to route a request for " + path);
if(typeof handle[path]=== "function")
{
    handle[path](response,request);

}
else
{
    console.log("no request handler found for" + path);
    response.writeHead(404,{"Content-Type":"text/plain"});
    response.write("404 not found");
    response.end();
}


}
exports.route = route;


// Now, the request object can be used in our upload request
// handler function.