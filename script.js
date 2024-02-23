const inputIp = document.getElementById("ip-input");
const btn = document.querySelector(".btn");

const getAddres = async () => {
  const ipNumber = inputIp.value;
  const apiUrl = `http://ip-api.com/json/${ipNumber}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  console.log(data);
};

btn.addEventListener("click", (e) => {
  e.preventDefault();
  getAddres();
});
