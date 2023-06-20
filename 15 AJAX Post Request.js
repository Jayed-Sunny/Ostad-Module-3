// 15. AJAX Post Request:
// a. Implement a JavaScript function that sends an AJAX POST request to the following URL: "https://api.example.com/submit".
// b. Send a JSON payload with the following data: { "name": "John Doe", "email": " johndoe@example.com " }. -->
// -------------------------------------------------------------
function sendPostRequest() {
    const url = "https://api.example.com/submit";
    const data = {
      name: "John Doe",
      email: "johndoe@example.com"
    };
  
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        return response.json();
      })
      .then(data => {
        console.log("Received data:", data);
        // Handle the response data here
      })
      .catch(error => {
        console.error("Error:", error);
        // Handle the error here
      });
  }
  