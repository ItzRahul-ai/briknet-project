// mobile menu toggle (with height animation)
document.getElementById("btn").addEventListener("click", () => {

  const menu = document.getElementById("mobile-menu");

  if (menu.classList.contains("hidden")) {

    menu.classList.remove("hidden");

    menu.style.height = "0px";

    let fullHeight = "250px";

    requestAnimationFrame(() => {
      menu.style.height = fullHeight;
    });

  } else {

    menu.style.height = "0px";

    setTimeout(() => {
      menu.classList.add("hidden");
    }, 250);
  }
});
