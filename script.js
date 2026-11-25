// Pathfinder: Web Creator starter script.
// Day 1: this already works on your site. Day 4: you read it line by line and change it.

// 1. Find the button and the box in the page. The page the browser built is called the DOM.
const toggleButton = document.querySelector("#toggle-button");
const details = document.querySelector("#details");

// 2. Remember whether the box is open. This is the page's "state".
let isOpen = false;

// 3. When the button is clicked, run this function.
// Only run this on a page that has the button.
if (toggleButton) {
  toggleButton.addEventListener("click", function () {
    if (isOpen) {
      details.hidden = true;
      toggleButton.textContent = "Show this week's challenge";
      isOpen = false;
    } else {
      details.hidden = false;
      toggleButton.textContent = "Hide this week's challenge";
      isOpen = true;
    }
    console.log("Box open:", isOpen);
  });
}

// Day 4, Block 2: first add the list section to index.html (the page gives you the HTML),
// then delete the slash-star line below and the star-slash line at the end to switch this on.

const items = ["Build a web page", "Make a game", "Program a robot", "make different codes"];
const list = document.querySelector("#item-list");

// Only run this on a page that has the list.
if (list) {
  for (const item of items) {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  }
  console.log("Items shown:", items.length);
}
// Day 6, Block 1: show every session from data.js on the Sessions page
const dataList = document.querySelector("#data-list");

// Only run this on a page that has the session list.
if (dataList) {
  for (const session of sessions) {
    const li = document.createElement("li");
    let spaces = "";
    if (session.spacesLeft === 0) {
      spaces = "Full";
    } else {
      spaces = session.spacesLeft + " spaces left";
    }
    li.textContent = session.name + ": " + session.day + ", " + session.level + ". " + spaces;
    dataList.appendChild(li);
  }
  console.log("Sessions shown:", sessions.length);
}
// Day 6, Block 2: keep only the free clubs
// Only run this on a page that has the data list.
if (dataList) {
  const free = clubs.filter(function (club) {
    return club.costKsh === 0;
  });

  const filterCount = document.querySelector("#filter-count");
  const filterList = document.querySelector("#filter-list");
  filterCount.textContent = free.length + " of " + clubs.length + " clubs match.";

  for (const club of free) {
    const li = document.createElement("li");
    li.textContent = club.name + " on " + club.day;
    filterList.appendChild(li);
  }

  if (free.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No clubs match";
    filterList.appendChild(li);
  }
}
