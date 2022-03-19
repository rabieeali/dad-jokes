const date = document.querySelector(".date");
const month = document.querySelector(".month");
const astrology = document.querySelector(".astrology");
let component = "";
let sign;

$(document).ready(() => {
  $(".month").on("change touchstart", (e) => {
    e.preventDefault();
    sign = String(e.target.value.toLowerCase());
    fetch(
      "https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign="+sign+"&day=today", {
        method: "POST",
        headers: {
          "x-rapidapi-host": "sameer-kumar-aztro-v1.p.rapidapi.com",
          "x-rapidapi-key":
            "38c438708fmsh8691ceee9c0547cp1ba0c6jsn8b5c7bcf8981",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        date.innerText = `Today is ${data.current_date}`;
        component = `
        <div class="card text-white bg-success my-3">
        <div class="card-header display-5 text-capitalize text-light text-center">${sign}</div>
        <div class="card-body">
            <h4 class="card-title text-capitalize text-dark">Today's astrology</h4>
            <p class="card-text text-capitalize">${data.description}</p>
            <h4 class="card-title text-capitalize text-dark">you are today compatible with</h4>
            <p class="card-text text-capitalize">${data.compatibility}</p>
            <h4 class="card-title text-capitalize text-dark">your lucky number today is</h4>
            <p class="card-text text-capitalize">${data.lucky_number}</p>
            <h4 class="card-title text-capitalize text-dark">your lucky time today is</h4>
            <p class="card-text text-capitalize">${data.lucky_time}</p>
            <h4 class="card-title text-capitalize text-dark">your today's mood is</h4>
            <p class="card-text text-capitalize">${data.mood}</p>
        </div>
        </div>
        `;
        astrology.innerHTML = component;
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
