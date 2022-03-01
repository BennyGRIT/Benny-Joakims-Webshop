// Functions to handle the cart
import { fetchTheShit } from "./fetch.js";




// function cartFunction(productArray)
// {

// //     // document.getElementById("hpOmenQ").innerHTML = "3"
// //     const btn0 = document.getElementById("btn0")
// //     const btn1 = document.getElementById("btn1")
// //     const btn2 = document.getElementById("btn2")
// //     const btn3 = document.getElementById("btn3")
// //     const btn4 = document.getElementById("btn4")

// //     const nrInput0 = document.querySelector(".wazzaaap0");
// //     btn0.addEventListener("click", function()
// //     {
// //         console.log('kanpp0')
// //         console.log(nrInput0);
// //         productArray[0].quantity - nrInput0.value;
// //     });
    
// // }
function testaSomFan(productArray){

    
    const hpQ = document.getElementById("hpOmenQ")
    const msiKQ = document.getElementById("msiKatanaQ")
    const msigpQ = document.getElementById("msiGpQ")
    const lenovoQ = document.getElementById("lenovoIdeaPadQ")
    const asusQ = document.getElementById("asusRogZQ")


// document.getElementById("totalProductsQ").innerHTML = hpQ.value+msiKQ


    class bjCart{
        constructor (totalNr, thePrice){
        this.totalNr=totalNr,
        this.thePrice=thePrice
        }
    
        myHP(){
            console.log(hpCart)
        hpQ.innerHTML = this.totalNr
        document.getElementById("hpPrice").innerHTML = this.thePrice

        document.getElementById("totalProductsQ").innerHTML = hpKnappen.value,+msiKatKnappen.value

        // +msiGPKnappen.value+lenovoKnappen.value+myAsusRogKnappen.value

        console.log(typeof hpKnappen.value)
        };
        myMSIKatana(){
            console.log(msiKatanaCart)
            document.getElementById("msiKatanaQ").innerHTML = this.totalNr
            document.getElementById("msiKatPrice").innerHTML = this.thePrice
    
        }
        myMsiGP(){
            console.log("msi GP");
            document.getElementById("msiGpQ").innerHTML = this.totalNr
            document.getElementById("msiGpPrice").innerHTML = this.thePrice

        }
        myLenovo(){
            console.log("Lenovo")
            document.getElementById("lenovoIdeaPadQ").innerHTML = this.totalNr
            document.getElementById("lenovoPrice").innerHTML = this.thePrice

            
        };
        myAsusROG(){
            console.log("ASUS")
            document.getElementById("asusRogZQ").innerHTML = this.totalNr
            document.getElementById("asusRogPrice").innerHTML = this.thePrice

        }
    }
    const hpKnappen = document.querySelector("#wazzaaap0");
    const msiKatKnappen = document.querySelector("#wazzaaap1")
    const msiGPKnappen = document.querySelector("#wazzaaap2")
    const lenovoKnappen = document.querySelector("#wazzaaap3")
    const myAsusRogKnappen = document.querySelector("#wazzaaap4")

    
    const hpCart = new bjCart(
        hpKnappen.value,
        productArray[0].price*hpKnappen.value
    )
    hpKnappen.value+msiKatKnappen.value+msiGPKnappen.value+lenovoKnappen.value+myAsusRogKnappen.value
    const msiKatanaCart = new bjCart(
        msiKatKnappen.value,
        productArray[1].price*msiKatKnappen.value
    )

    const msigpCart = new bjCart(
        msiGPKnappen.value,
        productArray[2].price*msiGPKnappen.value
    )

    const lenovoCart = new bjCart(
        lenovoKnappen.value,
        productArray[3].price*lenovoKnappen.value
    )

    const asusRogZCart = new bjCart(
        myAsusRogKnappen.value,
        productArray[4].price*myAsusRogKnappen.value
    )

    
    hpCart.myHP();
    msiKatanaCart.myMSIKatana()
    msigpCart.myMsiGP()
    lenovoCart.myLenovo()
    asusRogZCart.myAsusROG()
    // const hpKnappen = document.querySelector(".wazzaaap0");
    // document.getElementById("hpOmenQ").innerHTML = hpKnappen.value
    // // document.getElementById("hpPrice").innerHTML = `${productArray[0].price}`
    // document.getElementById("hpPrice").innerHTML = productArray[0].price

    // // productArray[0].quantity - nrInput0.value;
    // // + * + `${productArray[ i ].quantity}`;;
}






function emptyMyShit(){
    alert("Nu tömmer du varukorgen")
    location.reload()
}
function buyMyShit(){
    let visaCard = prompt("Nu köper du. Fyll i ditt VISAkorts uppgifter")
    alert(`Tack! Ditt VISAkorts uppgifter är: ${visaCard}. Du får dina produkter inom 2-3 år`)
    location.reload()
}


export {testaSomFan, emptyMyShit, buyMyShit}