/*
 _    _ _____ _____ _   __   _____ 
| |  | |  ___|  ___| | / /  / __  \
| |  | | |__ | |__ | |/ /   `' / /'
| |/\| |  __||  __||    \     / /  
\  /\  / |___| |___| |\  \  ./ /___
 \/  \/\____/\____/\_| \_/  \_____/

Purpose: to act as an API developer and create a new Promise to either Resolve or reject                               

*/

let url = "https://isitdownstatus.com/api/v1/status/netflix"

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.data.status);
  })
  .catch(() => {
    console.log(error);
  })
