function addButton(checkbox) {
  if (checkbox.checked) {
    var button = document.createElement("button");
    button.innerHTML = checkbox.value + " &times;";
    button.value = checkbox.value;
    button.onclick = function () {
      removeButton(this);
    };
    document.getElementById("selectedItems").appendChild(button);
  } else {
    removeButton(checkbox);
  }
}

function removeButton(element) {
  var buttons = document.getElementById("selectedItems").children;
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].value === element.value) {
      document.getElementById("selectedItems").removeChild(buttons[i]);
      break;
    }
  }
  var checkboxes = document.getElementsByTagName("input");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].value === element.value) {
      checkboxes[i].checked = false;
      break;
    }
  }
}


// menu js

 const icon = document.getElementById("icon");
  const menu = document.getElementById("menu");
  const closeButton = document.getElementById("close-button");

  icon.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    menu.classList.remove("active");
  });