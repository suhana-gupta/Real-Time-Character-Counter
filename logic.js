const textArea = document.getElementById("textarea")
const totalChar=document.getElementById("total-char")
const remainchar=document.getElementById("Remaining-char")
textArea.addEventListener("keyup",()=>{
    updateCounter()
    
})
function updateCounter(){
    totalChar.innerText = textArea.value.length
    remainchar.innerText = textArea.getAttribute("maxlength")-textArea.value.length

}
