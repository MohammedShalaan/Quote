

const getBtn = document.getElementById('btn')
let privesNumber = -1;

getBtn.addEventListener("click", function () {
    const getQuite = document.querySelectorAll("blockquote")

    if (privesNumber !== -1) {
        getQuite[privesNumber].style = "display:none"
    }

    let maxRandomNumber = (getQuite.length) - 1
    let rond = (Math.random()) * maxRandomNumber;
    let randomNumber = rond.toFixed();
    if (randomNumber == privesNumber) {
        console.log("the number repited")
        if (randomNumber >= maxRandomNumber) {
            let randomNumberRep = Number(randomNumber) - 1
            console.log(randomNumberRep)
            privesNumber = randomNumberRep
            getQuite[randomNumberRep].style = "display:block"
        } else {
            let randomNumberRep1 = Number(randomNumber) + 1
            console.log(randomNumberRep1)
            privesNumber = randomNumberRep1
            getQuite[randomNumberRep1].style = "display:block"
        }
    } else {
        privesNumber = randomNumber
        console.log(randomNumber)
        getQuite[randomNumber].style = "display:block"
    }

})

