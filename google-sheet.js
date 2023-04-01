
window.onload = function() {
    const formClass = document.getElementsByClassName('fill-data')
    for(let i = 0; i< formClass.length; i++) {
      formClass[i].addEventListener("submit", async function (e) {
        e.preventDefault();
        fillDataToGoogleSheets(formClass[i])
      })
    }

};


const fillDataToGoogleSheets = async (form) => {
  const formData = new FormData(form)
  await fetch("https://google-spead-sheet.onrender.com", {
    method: "POST",
    body: JSON.stringify(Object.fromEntries(formData.entries())),
    headers: {
      "Content-Type": "application/json",
    },
  })
  const inputs = document.getElementsByClassName('ladi-form-control')
    for(let i = 0; i< inputs.length; i++) {
      inputs[i].value = ""
    }
}
