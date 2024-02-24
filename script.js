const inputIp = document.getElementById("ip-input");
const btn = document.querySelector(".btn");
const ipE = document.getElementById("ip");
const locationE = document.getElementById("location");
const timezoneE = document.getElementById("timezone");
const ispE = document.getElementById("isp");
const mainE = document.querySelector(".main");

const getAddress = async () => {
  const ipNumber = inputIp.value;
  const apiUrl = `http://ip-api.com/json/${ipNumber}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  inputIp.value = "";

  mainE.classList.add("slideIn");

  ipE.textContent = data.query;
  locationE.textContent = `${data.city}, ${data.region}`;
  timezoneE.textContent = `${data.timezone
    .replace("/", " - ")
    .replace("_", " ")}`;
  ispE.textContent = data.isp;

  console.log(data);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getAddress();
});
