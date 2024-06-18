let currentSlide = 1;

showProject(currentSlide);

function changeProject(n) {
   showProject((currentSlide += n));
}

function currentProject(n) {
   showProject((currentSlide = n));
}

function showProject(n) {
   const projects = document.querySelectorAll(".project");
   const dots = document.querySelectorAll(".dot");

   if (n > projects.length) {
      currentSlide = 1;
   }
   if (n < 1) {
      currentSlide = projects.length;
   }

   for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = "none";
   }

   for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("active");
   }

   projects[currentSlide - 1].style.display = "block";
   dots[currentSlide - 1].classList.add("active");
}
