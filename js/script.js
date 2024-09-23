// common function
function getButtonById(id) {
  return document.getElementById(id);
}

function getInputValueById(id) {
  const value = document.getElementById(id).value;
  return parseFloat(value);
}

const mainSection = document.getElementById("main-section");
const historySection = document.getElementById("history-section");

const donateBtn = getButtonById("donate-button");
const historyBtn = getButtonById("history-button");

historyBtn.addEventListener("click", function () {
  mainSection.classList.add("hidden");
  historySection.classList.remove("hidden");

  donateBtn.className = "";
  donateBtn.className =
    "bg-zinc-50 font-medium text-sm sm:text-lg py-2 px-3 sm:py-3 sm:px-8 rounded-lg border border-zinc-300";

  historyBtn.className = "";
  historyBtn.className =
    "bg-btnBgColor font-semibold text-sm sm:text-lg py-2 px-3 sm:py-3 sm:px-8 rounded-lg";
});

donateBtn.addEventListener("click", function () {
  mainSection.classList.remove("hidden");
  historySection.classList.add("hidden");

  donateBtn.className = "";
  donateBtn.className =
    "bg-btnBgColor font-semibold text-sm sm:text-lg py-2 px-3 sm:py-3 sm:px-8 rounded-lg";

  historyBtn.className = "";
  historyBtn.className =
    "bg-zinc-50 font-medium text-sm sm:text-lg py-2 px-3 sm:py-3 sm:px-8 rounded-lg border border-zinc-300";
});

const donateBtnOne = getButtonById("donateBtnOne");

donateBtnOne.addEventListener("click", function () {
  const donateOneValue = getInputValueById("donateOneField");
  const mainBalance = document.getElementById("main-balance");

  if (!donateOneValue || donateOneValue < 0) {
    return alert("Please enter a value number");
  } else if (parseFloat(mainBalance.innerText) < donateOneValue) {
    return alert("Insufficient Balance!");
  } else {
    document.getElementById("my_modal_1").showModal();
  }

  const mainBalanceNumber = parseFloat(mainBalance.innerText);
  mainBalance.innerText = mainBalanceNumber - donateOneValue;

  let donateMoney = document.getElementById("donateOneMoney");

  const num = Number(donateMoney.innerHTML) + donateOneValue;
  donateMoney.innerHTML = "";
  donateMoney.innerHTML += num;
  document.getElementById("donateOneField").value = "";

  const historySection = document.getElementById("history-section");

  let div = document.createElement("div");
  div.className = "border border-zinc-400 p-3 md:p-5 rounded-lg mb-3";
  div.innerHTML = `
    <h3 class="font-bold text-base lg:text-xl mb-3">
          <span>${donateOneValue}</span> Taka is Donated for
          <span>Donate for Flood at Noakhali, Bangladesh</span>
        </h3>
        <p class="text-sm">Date: <span> ${new Date()}</span></p>
    `;

  historySection.append(div);
});

const donateBtnTwo = getButtonById("donateBtnTwo");

donateBtnTwo.addEventListener("click", function () {
  const donateTwoValue = getInputValueById("donateTwoField");
  const mainBalance = document.getElementById("main-balance");

  if (!donateTwoValue || donateTwoValue < 0) {
    return alert("Please enter a value number");
  } else if (parseFloat(mainBalance.innerText) < donateTwoValue) {
    return alert("Insufficient Balance!");
  } else {
    document.getElementById("my_modal_1").showModal();
  }

  const mainBalanceNumber = parseFloat(mainBalance.innerText);
  mainBalance.innerText = mainBalanceNumber - donateTwoValue;

  let donateMoney = document.getElementById("donateTwoMoney");

  const num = Number(donateMoney.innerHTML) + donateTwoValue;
  donateMoney.innerHTML = "";
  donateMoney.innerHTML += num;
  document.getElementById("donateTwoField").value = "";

  // history added

  const historySection = document.getElementById("history-section");

  let div = document.createElement("div");
  div.className = "border border-zinc-400 p-3 md:p-5 rounded-lg mb-3";
  div.innerHTML = `
    <h3 class="font-bold text-base lg:text-xl mb-3">
          <span>${donateTwoValue}</span> Taka is Donated for
          <span>Donate for Flood Relief in Feni,Bangladesh</span>
        </h3>
        <p class="text-sm">Date: <span> ${new Date()}</span></p>
    `;

  historySection.append(div);
});

const donateBtnThree = getButtonById("donateBtnThree");

donateBtnThree.addEventListener("click", function () {
  const donateThreeValue = getInputValueById("donateThreeField");
  const mainBalance = document.getElementById("main-balance");

  if (!donateThreeValue || donateThreeValue < 0) {
    return alert("Please enter a value number");
  } else if (parseFloat(mainBalance.innerText) < donateThreeValue) {
    return alert("Insufficient Balance!");
  } else {
    document.getElementById("my_modal_1").showModal();
  }

  const mainBalanceNumber = parseFloat(mainBalance.innerText);
  mainBalance.innerText = mainBalanceNumber - donateThreeValue;

  let donateMoney = document.getElementById("donateThreeMoney");

  const num = Number(donateMoney.innerHTML) + donateThreeValue;
  donateMoney.innerHTML = "";
  donateMoney.innerHTML += num;
  document.getElementById("donateThreeField").value = "";

  // history added

  const historySection = document.getElementById("history-section");

  let div = document.createElement("div");
  div.className = "border border-zinc-400 p-3 md:p-5 rounded-lg mb-3";
  div.innerHTML = `
    <h3 class="font-bold text-base lg:text-xl mb-3">
          <span>${donateThreeValue}</span> Taka is Donated for
          <span>Aid for Injured in the Quota Movement</span>
        </h3>
        <p class="text-sm">Date: <span> ${new Date()}</span></p>
    `;

  historySection.append(div);
});

// blog button

document.getElementById("blog-button").addEventListener("click", function () {
  window.location.href = "./blog.html";
});
