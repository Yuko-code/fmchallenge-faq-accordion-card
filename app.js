const accordion=document.getElementsByClassName("card__accordion");


for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {

      /* Toggle between adding and removing the "active" class,
      to highlight the button that controls the panel */
      this.classList.toggle("active");

      /* Toggle between hiding and showing the active panel */
      var panel = this.nextElementSibling;
      const arrow=this.children[0];
      if (panel.style.display === "block") {
        panel.style.display = "none";
        arrow.classList.remove("arrow__up");
      } else {
        panel.style.display = "block";
        arrow.classList.add("arrow__up")
      }
    });
  }