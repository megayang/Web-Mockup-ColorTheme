// Grab DOM Elements
const litera = document.getElementById("toggle-litera");
const darkly = document.getElementById("toggle-darkly");
const cyborg = document.getElementById("toggle-cyborg");
const superHero = document.getElementById("toggle-superHero");
const pulse = document.getElementById("toggle-pulse");
const solar = document.getElementById("toggle-solar");
const gradient1 = document.getElementById("toggle-gradient1");
const gradient2 = document.getElementById("toggle-gradient2");
const body = document.body;
const isPallete = document.getElementById("isPallete");
const theme = localStorage.getItem("theme");

// Toggle Pallete Display
document.getElementById("theme-palletes").style.display = "none";

function togglePallete() {
  let x = document.getElementById("theme-palletes");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Default Theme : superHero
if (theme) {
  body.classList.add(theme);
  isPallete.innerText = theme;

} else {
  body.classList.add("superHero");
  isPallete.innerText = "SuperHero";
  localStorage.setItem("theme", "superHero");
}
//  Set Litera Theme
litera.onclick = () => {
  if (body.classList.contains("litera")) {
    body.classList.remove("litera");
    isPallete.innerText = "";
    localStorage.setItem("theme", false);
  } else {
    body.classList.add("litera");
    isPallete.innerText = "Litera";
    localStorage.setItem("theme", "litera");
  }
  if (body.classList.contains("darkly")) {
    body.classList.remove("darkly");
  }
  if (body.classList.contains("cyborg")) {
    body.classList.remove("cyborg");
  }
  if (body.classList.contains("superHero")) {
    body.classList.remove("superHero");
  }
  if (body.classList.contains("pulse")) {
    body.classList.remove("pulse");
  }
};
//  Set Darkly Theme
darkly.onclick = () => {
  if (body.classList.contains("litera")) {
    body.classList.remove("litera");
  }
  if (body.classList.contains("darkly")) {
    body.classList.remove("darkly");
    isPallete.innerText = "";
    localStorage.setItem("theme", false);
  } else {
    body.classList.add("darkly");
    isPallete.innerText = "Darkly";
    localStorage.setItem("theme", "darkly");
  }
  if (body.classList.contains("cyborg")) {
    body.classList.remove("cyborg");
  }
  if (body.classList.contains("superHero")) {
    body.classList.remove("superHero");
  }
  if (body.classList.contains("pulse")) {
    body.classList.remove("pulse");
  }
};
//  Set Cyborg Theme
cyborg.onclick = () => {
  if (body.classList.contains("litera")) {
    body.classList.remove("litera");
  }
  if (body.classList.contains("darkly")) {
    body.classList.remove("darkly");
  }
  if (body.classList.contains("cyborg")) {
    body.classList.remove("cyborg");
    isPallete.innerText = "";
  } else {
    body.classList.add("cyborg");
    isPallete.innerText = "Cyborg";
  }
  if (body.classList.contains("superHero")) {
    body.classList.remove("superHero");
  }
  if (body.classList.contains("pulse")) {
    body.classList.remove("pulse");
  }
};
//  Set SuperHero Theme
superHero.onclick = () => {
  if (body.classList.contains("litera")) {
    body.classList.remove("litera");
  }
  if (body.classList.contains("darkly")) {
    body.classList.remove("darkly");
  }
  if (body.classList.contains("cyborg")) {
    body.classList.remove("cyborg");
  }
  if (body.classList.contains("superHero")) {
    body.classList.remove("superHero");
    isPallete.innerText = "";
    localStorage.setItem("theme", false);
  } else {
    body.classList.add("superHero");
    isPallete.innerText = "SuperHero";
    localStorage.setItem("theme", "superHero");
  }
  if (body.classList.contains("pulse")) {
    body.classList.remove("pulse");
  }
};
//  Set Pulse Theme
pulse.onclick = () => {
  if (body.classList.contains("litera")) {
    body.classList.remove("litera");
  }
  if (body.classList.contains("darkly")) {
    body.classList.remove("darkly");
  }
  if (body.classList.contains("cyborg")) {
    body.classList.remove("cyborg");
  }
  if (body.classList.contains("superHero")) {
    body.classList.remove("superHero");
  }
  if (body.classList.contains("pulse")) {
    body.classList.remove("pulse");
    isPallete.innerText = "";
    localStorage.setItem("theme", false);
  } else {
    body.classList.add("pulse");
    isPallete.innerText = "Pulse";
    localStorage.setItem("theme", "pulse");
  }
};

//Set Solar
solar.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
  }
  if (body.classList.contains("gradient1")) {
    body.classList.remove("gradient1");
  }
  if (body.classList.contains("gradient2")) {
    body.classList.remove("gradient2");
  }
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
  } else body.classList.add("solar");
};

//Set Gradient1
gradient1.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
  }
  if (body.classList.contains("gradient1")) {
    body.classList.remove("gradient1");
  }
  if (body.classList.contains("gradient2")) {
    body.classList.remove("gradient2");
  }
  if (body.classList.contains("gradient1")) {
    body.classList.remove("gradient1");
  } else body.classList.add("gradient1");
};

//Set Gradient2
gradient2.onclick = () => {
  if (body.classList.contains("solar")) {
    body.classList.remove("solar");
  }
  if (body.classList.contains("gradient1")) {
    body.classList.remove("gradient1");
  }
  if (body.classList.contains("gradient2")) {
    body.classList.remove("gradient2");
  }
  if (body.classList.contains("gradient2")) {
    body.classList.remove("gradient2");
  } else body.classList.add("gradient2");
};