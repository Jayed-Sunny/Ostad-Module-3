// 5.Navigator Object:
// a. Write a JavaScript function that detects the user's browser name and 
// version using the navigator object.
// -----------------------------------------------------------------------------
function detectBrowser() {
    var browserName = navigator.appName;
    var browserVersion = navigator.appVersion;
  
    if (navigator.userAgent.indexOf("Trident") !== -1) {
      // Internet Explorer
      browserName = "Internet Explorer";
      var rvIndex = navigator.userAgent.indexOf("rv:");
      if (rvIndex !== -1) {
        browserVersion = navigator.userAgent.substring(rvIndex + 3);
      }
    } else if (navigator.userAgent.indexOf("Edge") !== -1) {
      // Microsoft Edge
      browserName = "Microsoft Edge";
      var edgeIndex = navigator.userAgent.indexOf("Edge/");
      if (edgeIndex !== -1) {
        browserVersion = navigator.userAgent.substring(edgeIndex + 5);
      }
    } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
      // Chrome
      browserName = "Google Chrome";
      var chromeIndex = navigator.userAgent.indexOf("Chrome/");
      if (chromeIndex !== -1) {
        browserVersion = navigator.userAgent.substring(chromeIndex + 7);
      }
    } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
      // Firefox
      browserName = "Mozilla Firefox";
      var firefoxIndex = navigator.userAgent.indexOf("Firefox/");
      if (firefoxIndex !== -1) {
        browserVersion = navigator.userAgent.substring(firefoxIndex + 8);
      }
    } else if (navigator.userAgent.indexOf("Safari") !== -1) {
      // Safari
      browserName = "Safari";
      var safariIndex = navigator.userAgent.indexOf("Version/");
      if (safariIndex !== -1) {
        browserVersion = navigator.userAgent.substring(safariIndex + 8);
      }
    }
  
    return {
      name: browserName,
      version: browserVersion
    };
  }

// b. Implement the function to display the user's browser name and version.
//   ---------------------------------------------------------------------------
var browserInfo = detectBrowser();
console.log("Browser Name: " + browserInfo.name);
console.log("Browser Version: " + browserInfo.version);