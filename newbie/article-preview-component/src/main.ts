const container = document.getElementById("container") as HTMLDivElement;
const shareButton = document.querySelector(".shareButton") as HTMLButtonElement;
const icon = document.querySelector(".fa-share") as HTMLSpanElement;


const toggleClass = (): void => {
  const screenSize: number = window.innerWidth;

  container.classList.toggle("hidden");

  if (screenSize <= 768) {
    const currentColor = getComputedStyle(icon).color;

    const isBlack = currentColor === "rgb(0, 0, 0)";
    icon.style.color = isBlack ? "white" : "black";
  }
};

shareButton.addEventListener("click", toggleClass);
