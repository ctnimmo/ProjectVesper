// ETHSCAN BLOCK CALLS

// My API Key - note: should not store here!!
const YourApiKeyToken = "MVI4D114V86VQK4ENMQ5IZ6G7V8AXQJ1UZ";
const AppName = "MyFirstEthScanApp";

// Get Block And Uncle Rewards by BlockNo
export const getblockreward () => {
	
  const fetchRequest = "https://api.etherscan.io/api?module=block&action=getblockreward&blockno=2165403&apikey=" + YourApiKeyToken;

  fetch(fetchRequest)
    .then(response => {
      response.json()
    })
    .then(data => console.log(data));
}


//Get Estimated Block Countdown Time by BlockNo
export const getblockcountdown () => {

  const fetchRequest = "https://api.etherscan.io/api?module=block&action=getblockcountdown&blockno=9100000&apikey=" + YourApiKeyToken;

  fetch(fetchRequest)
    .then(response => response.json())
    .then(data => console.log(data));
}


// Get Block Number by Timestamp
// [Parameters] timestamp format: Unix timestamp (supports Unix timestamps in seconds), closest value: 'before' or 'after'
export const getblocknobytime () => {
  
  const fetchRequest = "https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=1578638524&closest=before&apikey=" + YourApiKeyToken;

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