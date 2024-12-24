const button = document.querySelector("button")
const modal = document.querySelector("dialog")
const fecharModal = document.getElementById("fecharModal")


button.onclick = function () {
    modal.showModal()
}

fecharModal.onclick = function () {
    modal.close()
}
