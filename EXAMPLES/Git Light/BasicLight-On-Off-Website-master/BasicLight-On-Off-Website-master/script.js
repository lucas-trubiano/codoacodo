const turnOn = document.getElementById("turn-on");
const turnOff = document.getElementById("turn-off");

const bulbImage = document.getElementById("bulb-img");

const turnOnAction = () => {
  bulbImage.src =
    "https://static.wixstatic.com/media/2cd43b_af7f50d35aa54624874e08f14305cc93~mv2_d_1955_2400_s_2.png/v1/fill/w_320,h_393,q_90/2cd43b_af7f50d35aa54624874e08f14305cc93~mv2_d_1955_2400_s_2.png";
};

const turnOffAction = () => {
  bulbImage.src =
    "https://www.freeiconspng.com/thumbs/bulb-off-icon/bulb-off-icon-25.png";
};
turnOn.addEventListener("click", turnOnAction);
turnOff.addEventListener("click", turnOffAction);
