import showCustomAlert from "./customAlert";
import { quote } from "./getAndInsertQuote"


export default function copyToClipBoard () {
    const buttonCopy= document.querySelector('.share')
    buttonCopy.addEventListener('click',()=> {
    
        if(quote.innerHTML !== '') {
            navigator.clipboard.writeText(quote.innerHTML)
            .then(() => {
               showCustomAlert("Text copied to clipboard")
            })
            .catch(() => {
                showCustomAlert("Error to copy")
            })
        }
    })
    
}