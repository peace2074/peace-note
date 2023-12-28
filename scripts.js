import PeaceNote from "./PeaceNote.js";

document.querySelector("button").addEventListener("click", () => {
  const pt = new PeaceNote({
    text: "Hello",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  });
});
