/*

 _    _ _____ _____ _   __     __  
| |  | |  ___|  ___| | / /    /  | 
| |  | | |__ | |__ | |/ /     `| | 
| |/\| |  __||  __||    \      | | 
\  /\  / |___| |___| |\  \    _| |_
 \/  \/\____/\____/\_| \_/    \___/
                                   
                                   
  PURPOSE: use node to create a server and listen on that
  server for incoming requests, then returna  response

  oh my god i only got 2 hours of sleep last night

*/

import {createServer} from "http";
createServer((request, response) => {
  response.writeHead(200, {
    "Content-Type": "text/html"
  })
  response.end("SERVER IS ON, LFG")
}).listen(3333);
