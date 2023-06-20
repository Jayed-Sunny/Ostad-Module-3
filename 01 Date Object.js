// 1.Date Object:
// a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and 
// returns the day of the week for that date. The function should use the Date object.
// ---------------------------------------------------------------------------------------
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayIndex = date.getDay();
  
  return daysOfWeek[dayIndex];
}

const dayOfWeek = getDayOfWeek("2023-06-19");
console.log(dayOfWeek); // Output: Monday


// -----------------------------------------------------------------------------------------
// b. Implement the function to display the day of the week for the current date.
function getCurrentDayOfWeek() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayIndex = currentDate.getDay();
    
    return daysOfWeek[dayIndex];
  }

const currentDayOfWeek = getCurrentDayOfWeek();
console.log(currentDayOfWeek); // Output: The current day of the week (e.g., "Monday")