export function countDown() {
  const days = document.getElementById("days");
  const hours = document.getElementById("hours");
  const minutes = document.getElementById("minutes");
  const seconds = document.getElementById("seconds");
  const miliOfSeconds = 1000;
  const miliOfMinutes = miliOfSeconds * 60;
  const miliOfHours = miliOfMinutes * 60;
  const miliOfDays = miliOfHours * 24;
  const now = new Date();
  const target = new Date("09/24/2023 0:00 AM");
  const duration = target - now;
  
  const remDays = Math.floor(duration / miliOfDays);
  const remHours = Math.floor((duration % miliOfDays) / miliOfHours);
  const remMinutes = Math.floor((duration % miliOfHours) / miliOfMinutes);
  const remSeconds = Math.floor((duration % miliOfMinutes) / miliOfSeconds);

  days.textContent = remDays;
  hours.textContent = remHours;
  minutes.textContent = remMinutes;
  seconds.textContent = remSeconds;
}
