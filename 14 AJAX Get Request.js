// 14.AJAX Get Request:
// a. Implement a JavaScript function that sends an AJAX GET request to the following URL: "https://api.example.com/data".
// ---------------------------------------------------------------
function sendGetRequest() {
    fetch("https://api.example.com/data")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Request failed with status code " + response.status);
        }
      })
      .then(data => {
        // Handle the response data here
        console.log(data);
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error(error);
      });
  }
  