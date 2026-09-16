/*
 _    _ _____ _____ _   __   _____ 
| |  | |  ___|  ___| | / /  / __  \
| |  | | |__ | |__ | |/ /   `' / /'
| |/\| |  __||  __||    \     / /  
\  /\  / |___| |___| |\  \  ./ /___
 \/  \/\____/\____/\_| \_/  \_____/
                         
Purpose: to act as an API developer and create a new Promise to either Resolve or reject                               

*/

async function fetchGames() {
  let gamesPromise = new Promise((resolve, rej) => {
    let registered = true;
    setTimeout(() => {
      if (registered) {
        const gamesJSON = {
          monday: "leafs",
          tuesday: "raptors",
          wednesday: "skyrim"
        }
        // Static method that comes from JSON class
        let gamesJSONstr = JSON.stringify(gamesJSON)
        resolve(gamesJSONstr)
      } else {
        reject("You must register account or log in")
      }
    }, 2000)
  })

  let result = await gamesPromise
  let testParse = JSON.parse(result)
  console.log(result, testParse);
}

fetchGames();
