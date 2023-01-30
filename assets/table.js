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



  // still got question


  var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}
// Function for ingredients tabs


let answers = document.querySelectorAll(".ing-tabs");
answers.forEach((event) => {
    event.addEventListener("click", function () {

        let src = document.getElementById("toggle-icon").src;
        if (src.indexOf('plus-01.svg') != -1) {
            document.getElementById('toggle-icon').src = "./Icon.svg";
            document.getElementById("ingredients-tab-content").style.display = "block";
        }
        else {
            document.getElementById('toggle-icon').src = "./plus-01.svg";
            document.getElementById("ingredients-tab-content").style.display = "none";

        }

    });
});

// swiper


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
      el: '.swiper-scrollbar',
  },
});


// cutom color

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    bulletActiveClass: 'custom-bullet-active'
  },
});


