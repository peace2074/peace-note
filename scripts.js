import PeaceToast from "./PeaceToast.js"

document.querySelector("button").addEventListener("click", () => {
  const pt = new PeaceToast({
    text: "Hello",
    position: "top-left",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})