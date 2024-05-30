document.getElementById("imgLoL").addEventListener(
  "click",
  function () {
    if(document.getElementById("LoLinfo").hidden == false){
      document.getElementById("LoLinfo").hidden = true;
    }
    else{
      document.getElementById("LoLinfo").hidden = false;
      document.getElementById("valorantinfo").hidden = true;
      document.getElementById("RLinfo").hidden = true;
      window.scrollTo({
      top: 1000,
      behavior: "smooth",
      });
    }
  },
  false,
);

document.getElementById("imgValo").addEventListener(
  "click",
  function () {
    if(document.getElementById("valorantinfo").hidden == false){
      document.getElementById("valorantinfo").hidden = true;
    }
    else{
      document.getElementById("valorantinfo").hidden = false;
      document.getElementById("LoLinfo").hidden = true;
      document.getElementById("RLinfo").hidden = true;
      window.scrollTo({
      top: 1000,
      behavior: "smooth",
      });
    }
  },
  false,
);

document.getElementById("imgRL").addEventListener(
  "click",
  function () {
    if(document.getElementById("RLinfo").hidden == false){
      document.getElementById("RLinfo").hidden = true;
    }
    else{
      document.getElementById("RLinfo").hidden = false;
      document.getElementById("LoLinfo").hidden = true;
      document.getElementById("valorantinfo").hidden = true;
      window.scrollTo({
      top: 1000,
      behavior: "smooth",
      });
    }
  },
  false,
);

document.getElementById("logo-akali").addEventListener(
  "click",
  function () {
      document.getElementById("akaliinfo").style.display = "grid";
  },
  false,
);

document.getElementById("logo-ahri").addEventListener(
  "click",
  function () {
      document.getElementById("ahriinfo").style.display = "grid";
  },
  false,
);

document.getElementById("logo-qiyi").addEventListener(
  "click",
  function () {
      document.getElementById("qiyanainfo").style.display = "grid";
  },
  false,
);

document.getElementById("logo-vandal").addEventListener(
  "click",
  function () {
      document.getElementById("vandalinfo").style.display = "grid";
  },
  false,
);

document.getElementById("cross").addEventListener(
  "click",
  function () {
      document.getElementById("akaliinfo").style.display = "none";
  },
  false,
);

document.getElementById("cross2").addEventListener(
  "click",
  function () {
      document.getElementById("ahriinfo").style.display = "none";
  },
  false,
);

document.getElementById("cross3").addEventListener(
  "click",
  function () {
      document.getElementById("qiyanainfo").style.display = "none";
  },
  false,
);

document.getElementById("cross4").addEventListener(
  "click",
  function () {
      document.getElementById("vandalinfo").style.display = "none";
  },
  false,
);