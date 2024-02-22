import axios from "axios";
const root_url = "https://exposed-scraper.onrender.com/api";
// const root_url = "http://127.0.0.1:3001/api";

async function getData(route) {
  const data = await axios
    .get(root_url + route)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      if (error.constructor === AxiosError) {
        if (error.response) {
          console.error(`Error: HTTP status code ${error.response.status}`);
        } else if (error.request) {
          console.error("Error: Network error");
        } else {
          console.error("Error: Setting up the request");
        }
      } else {
        console.error(error); // Handle other errors
      }
    });

  // It would return an array
  return data;
}

export async function getLiveData() {
    const data = await getData("/live");
    return data.data;
}

export async  function getTodayData() {
    const data = await getData("/today");
    return data.data;
}

export async function getYesterdayData() {
    const data = await getData("/yesterday");
    return data.data;
}

export async  function getEndedData() {
    const data = await getData("/ended");
    return data.data;
}

