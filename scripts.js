import PeaceToast from "./PeaceToast.js"

document.querySelector("button").addEventListener("click", () => {
  const pt = new PeaceToast({
    text: "Hello",
    position: "top-right",
    pauseOnHover: true,
    pauseOnFocusLoss: true,
  })
})