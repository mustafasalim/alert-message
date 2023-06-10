//select elements
const alert = document.querySelector(".alert")
const btnSuccess = document.querySelector(".btn1")
const btnDanger = document.querySelector(".btn2")

//event start
eventListeneer()

//event start function
function eventListeneer() {
  btnSuccess.addEventListener("click", addAlertSuccess)
  btnDanger.addEventListener("click", addAlertDanger)
}

//show alert create      //You can get icon names from this address https://ionic.io/ionicons //
function addShowAlert(message, type, iconname) {
  const showAlertDiv = document.createElement("div")

  showAlertDiv.classList = `show-alert show-alert-${type}`

  showAlertDiv.innerHTML += `

    <div class="icon"> <ion-icon name="${iconname}"></ion-icon></div>
    <h4>${message}</h4>

    `
  alert.appendChild(showAlertDiv)

  setTimeout(function () {
    showAlertDiv.remove()
  }, 3000)
}


//show alert start
function addAlertSuccess() {
  addShowAlert("Success", "success", "checkmark-outline")
}
//show alert start
function addAlertDanger() {
    addShowAlert("Not Found", "danger", "alert-outline")
}