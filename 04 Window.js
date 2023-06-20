// 4.Window Object:
// a. Create a function that opens a new window with a specified URL and dimensions (width and height).
// --------------------------------------------------------------------------------------------------------------------
function openNewWindow(url, width, height) {
    var left = (window.innerWidth - width) / 2;
    var top = (window.innerHeight - height) / 2;
    var options = "width=" + width + ",height=" + height + ",top=" + top + ",left=" + left;
    
    window.open(url, "_blank", options);
}

// b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
// ---------------------------------------------------------------------------------------------------------------------
openNewWindow("https://example.com", 800, 600);