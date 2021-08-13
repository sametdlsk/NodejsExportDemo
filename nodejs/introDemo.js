// Request and response examples in node.js                  examples Exporting modules in node.js

var http = require('http')                                   // start web server
var log = require ('./logDemo.js')
var district = require ('./exportDemo')


log.information ('Server Live')                              // information func
http.createServer(function(request,response){                // we catch request date and response with function 
    response.end('Hello Node')                               // response to end user
}).listen(3000)                                              // node port

console.log(district)                                        /*if we do classification(.) in district only string properties will come
                                                               because data type string */