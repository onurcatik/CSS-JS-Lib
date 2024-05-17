// Form

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");

  // Clear previous error messages
  nameError.textContent = "";
  emailError.textContent = "";

  // Validate name
  if (!name.value.trim()) {
    nameError.textContent = "Name is required";
    return;
  }

  // Validate email
  if (!email.value.trim()) {
    emailError.textContent = "Email is required";
    return;
  }

  // Validate email format
  if (!isValidEmail(email.value)) {
    emailError.textContent = "Please enter a valid email";
    return;
  }

  alert("Form submitted successfully!");
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Button

var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");

function activateButton(buttonName) {
  console.log("Button clicked / activated", buttonName);
}

function directButton(buttonName) {
  console.log("Direct button activated!", buttonName);
  window.location.href = "pages/subpage1.html";
}

// CheckBox

function selectCheckBoxes() {
  var selectAll = document.getElementById("selectAll");
  var checkbox1 = document.getElementById("checkbox1");
  var checkbox2 = document.getElementById("checkbox2");
  var checkbox3 = document.getElementById("checkbox3");

  // Check/uncheck all checkboxes based on the "selectAll" checkbox
  if (selectAll.checked) {
    checkbox1.checked = true;
    checkbox2.checked = true;
    checkbox3.checked = true;
    console.log("All checkboxes selected");
  } else {
    checkbox1.checked = false;
    checkbox2.checked = false;
    checkbox3.checked = false;
    console.log("All checkboxes deselected");
  }
}

// CheckBox - Select all

function selectAll() {
  var checkboxes = document.querySelectorAll(".item-checkbox input[type='checkbox']"
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = true;
  });
  console.log("All checkboxes selected");
}

// CheckBox - Deselect all

function deselectAll() {
  var checkboxes = document.querySelectorAll(
    ".item-checkbox input[type='checkbox']"
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.checked = false;
  });
  console.log("All checkboxes deselected");
}

// Radio Button

function selectRadioButton() {
  var radios = document.getElementsByName("radio");
  var selectedOption;
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      selectedOption = radios[i].value;
      break;
    }
  }
  if (selectedOption) {
    console.log("Selected Option :" + selectedOption);
  } else {
    console.log("An option was not selected.");
  }
}

// Switch

function toggleSwitch() {
  const checkbox = document.querySelector('.toggle-switch input[type="checkbox"]');
  console.log("Toggle switch state:", checkbox.checked);
}

// Date

function datePickAndShow() {
  var secilenTarih = document.getElementById("Date").value;
  console.log(secilenTarih);
}

// DropDown

function logSelection() {
  var selectedOption = document.getElementById("elementSelect").value;
  console.log(selectedOption);
}

// TextArea

function enterText() {
  const textarea = document.getElementById("textInput");
  const text = textarea.value;
  console.log(text);
}

// Toggle

function toggleDarkMode() {
  var body = document.body;
  var buttons = document.getElementsByClassName("toggleMode");

  // Toggle body class
  body.classList.toggle("darkMode");

  // Toggle button text
  for (var l = 0; l < buttons.length; l++) {
    if (body.classList.contains("darkMode")) {
      buttons[l].innerText = "Toggle Light Mode";
    } else {
      buttons[l].innerText = "Toggle Dark Mode";
    }
  }

  // Log toggle action
  console.log("Dark mode toggled");
}

// Side Bar

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const currentLeft = parseInt(window.getComputedStyle(sidebar).left);
  if (currentLeft < 0) {
    sidebar.style.left = "0";
    console.log("Sidebar opened");
  } else {
    sidebar.style.left = "-200px";
    console.log("Sidebar closed");
  }
}

// Get sidebar and content elements

var sidebar = document.getElementById("sidebar");
var content = document.getElementById("content");

// Function to show the sidebar
function showSidebar() {
  sidebar.style.transform = "translateX(0)";
}

// Function to hide the sidebar
function hideSidebar() {
  sidebar.style.transform = "translateX(-100%)";
}


// Pop-Up Menu

document.getElementById('item-popupButton').addEventListener('click', function() {
  var popupMenu = document.getElementById('item-popupMenu');
  if (popupMenu.style.display === 'block') {
    popupMenu.style.display = 'none';
  } else {
    popupMenu.style.display = 'block';
  }
  console.log('Pop-Up button clicked');
});

document.getElementById('item-popupMenu').addEventListener('click', function(event) {
  var popupMenu = document.getElementById('item-popupMenu');
  var popupButton = document.getElementById('item-popupButton');
  if (event.target !== popupMenu && event.target !== popupButton) {
    popupMenu.style.display = 'none';
  console.log("Option Selected")
   
  }
});


