// ETHSCAN BLOCK CALLS

// My API Key - note: should not store here!!
const YourApiKeyToken = "";
const AppName = "MyFirstEthScanApp";



// private functions

const uri = "https://api.etherscan.io/api"; // this needs to be in a config




// Get Block And Uncle Rewards by BlockNo
    // const url = "https://api.etherscan.io/api";
    // const apiKey = YourApiKeyToken;
    // const blockNo = "2165403";
export const getBlockReward (url,apiKey,blockNo) => {

  const module = "block";
  const action = "getblockreward";
	
  const fetchRequest = url + "?module=" + module + "&action=" + action + "&blockno=" + blockNo + "&apikey=" + apiKey;

  fetch(fetchRequest)
    .then(response => {
      response.json()
    })
    .then(data => console.log(data));
}


//Get Estimated Block Countdown Time by BlockNo
    // const url = "https://api.etherscan.io/api";
    // const apiKey = YourApiKeyToken;  
    // const blockNo = "2165403";
export const getBlockCountdown (url,apiKey,blockNo) => {

  const module = "block";
  const action = "getblockcountdown";
  
  const fetchRequest = url + "?module=" + module + "&action=" + action + "&blockno=" + blockNo + "&apikey=" + apiKey;

  fetch(fetchRequest)
    .then(response => response.json())
    .then(data => console.log(data));
}


// Get Block Number by Timestamp
// [Parameters]
// timestamp: Unix timestamp (in seconds)
// closest: 'before' | 'after'
    // const url = "https://api.etherscan.io/api";
    // const apiKey = YourApiKeyToken;    
    // const timeStamp = "1578638524";  
    // const closest = "before";
export const getBlockNoByTime (url,apiKey,timeStamp,closest) => {

  const module = "block";
  const action = "getblocknobytime";
  
  const fetchRequest = url + "?module=" + module + "&action=" + action + "&timestamp=" + timeStamp + "&closest=" + closest + "&apikey=" + apiKey;

  fetch(fetchRequest)
    .then(response => response.json())
    .then(data => console.log(data));
}


/*
// [PRO] Get Daily Average Block Size
// [Parameters] startdate and enddate format 'yyyy-MM-dd'

fetchRequest = "https://api.etherscan.io/api?module=stats&action=dailyavgblocksize&startdate=2019-02-01&enddate=2019-02-28&sort=asc&apikey=" + YourApiKeyToken;

fetch(fetchRequest)
  .then(response => response.json())
  .then(data => console.log(data));
  

// [PRO] Get Daily Block Count and Rewards
// [Parameters] startdate and enddate format 'yyyy-MM-dd'

fetchRequest = "https://api.etherscan.io/api?module=stats&action=dailyblkcount&startdate=2019-02-01&enddate=2019-02-28&sort=asc&apikey=" + YourApiKeyToken;

fetch(fetchRequest)
  .then(response => response.json())
  .then(data => console.log(data));
  

// [PRO] Get Daily Block Rewards
// [Parameters] startdate and enddate format 'yyyy-MM-dd'

fetchRequest = "https://api.etherscan.io/api?module=stats&action=dailyblockrewards&startdate=2019-02-01&enddate=2019-02-28&sort=asc&apikey=" + YourApiKeyToken;

fetch(fetchRequest)
  .then(response => response.json())
  .then(data => console.log(data));
  

// [PRO] Get Daily Average Block Time for A Block to be Included in the Ethereum Blockchain
// [Parameters] startdate and enddate format 'yyyy-MM-dd'

fetchRequest = "https://api.etherscan.io/api?module=stats&action=dailyavgblocktime&startdate=2019-02-01&enddate=2019-02-28&sort=asc&apikey=" + YourApiKeyToken;

fetch(fetchRequest)
  .then(response => response.json())
  .then(data => console.log(data));
  

// [PRO] Get Daily Uncle Block Count and Rewards
// [Parameters] startdate and enddate format 'yyyy-MM-dd'

fetchRequest = "https://api.etherscan.io/api?module=stats&action=dailyuncleblkcount&startdate=2019-02-01&enddate=2019-02-28&sort=asc&apikey=" + YourApiKeyToken;

fetch(fetchRequest)
  .then(response => response.json())
  .then(data => console.log(data));
  
*/