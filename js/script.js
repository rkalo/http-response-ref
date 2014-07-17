var color_bank = {
  1: "steelblue",
  2: "forestgreen",
  3: "goldenrod",
  4: "darkred",
  5: "chocolate"
};

var response_bank = {
  100: "Continue", 
  101: "Switching Protocols",
  200: "OK", 
  201: "Created",
  202: "Accepted", 
  203: "Non-Authoratative Information", 
  204: "No Content", 
  205: "Reset Content", 
  206: "Partial Content", 
  300: "Multiple Choices", 
  301: "Moved Permanently", 
  302: "Found", 
  303: "See Other", 
  304: "Not Modified", 
  305: "Use Proxy", 
  306: "Unused", 
  307: "Temporary Redirect",
  400: "Bad Request",
  401: "Unauthorized",
  402: "Payment Required",
  403: "Forbidden", 
  404: "Not Found", 
  405: "Method Not Allowed", 
  406: "Not Acceptable",
  407: "Proxy Authentication Required", 
  408: "Request Timeout", 
  409: "Conflict", 
  410: "Gone", 
  411: "Length Required", 
  412: "Precondition Failed", 
  413: "Request Entry Too Large",  
  414: "Request URI Too Long", 
  415: "Unsupported Media Type", 
  416: "Requested Range Not Satisfiable", 
  417: "Expectation Failed", 
  500: "Internal Server Error", 
  501: "Not Implemented",
  502: "Bad Gateway", 
  503: "Service Unavailable", 
  504: "Gateway Timeout", 
  505: "HTTP Version Not Supported"
};
  

$(".status-codes a").on ("click", function(){
  var response_status = $(this).text();
  $(".response-text").text("HTTP/1.1 " + response_status);
  $(".response-text + p").text(response_bank[response_status]);
  
  var color_key = response_status.charAt(0);
  $("body").css("background", color_bank[color_key]);
});
