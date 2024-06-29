export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const convertTimestampToTime = (timestamp: number) => {
  // Create a new Date object from the timestamp
  const dateObj = new Date(timestamp);

  // Extract the hours and minutes
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  // Determine AM or PM
  const ampm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format minutes to always have two digits
  const minutesStr = minutes < 10 ? "0" + minutes : minutes;

  // Construct the time string
  const timeStr = `${hours}:${minutesStr} ${ampm}`;

  return timeStr;
};
