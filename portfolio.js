// Add a hover event listener to the spans to show "Copy to Clipboard" on hover
document.querySelectorAll(".social-links").forEach((link) => {
   link.addEventListener("click", () => {
      var copyText = link.textContent;
      if (link.id == "email") {
         copyText = copyText.split("!")[1];
      }

      navigator.clipboard
         .writeText(copyText)
         .then(function () {
            alert("Text copied to clipboard: \n" + copyText);
         })
         .catch(function (error) {
            alert("Failed to copy text: \n" + error);
         });
   });
});
