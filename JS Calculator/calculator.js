
const historyBtn = document.querySelector(".his-btn")
const sideBar = document.querySelector(".side-bar")
const closeBtn = document.getElementById("clo-btn")
const zeroBtn = document.getElementById("zero")
const oneBtn = document.getElementById("one")
const twoBtn = document.getElementById("two")
const threeBtn = document.getElementById("three")
const fourBtn = document.getElementById("four")
const fiveBtn = document.getElementById("five")
const sixBtn = document.getElementById("six")
const sevenBtn = document.getElementById("seven")
const eightBtn = document.getElementById("eight")
const nineBtn = document.getElementById("nine")
const clearBtn = document.getElementById("clear")
const backBtn =  document.getElementById("back-btn")
const tArea = document.getElementById("t-area")
const tArea2 = document.getElementById("t-area2")
let textArea = document.querySelector(".text-area")
let textArea2 = document.querySelector(".text-area-2")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
const multiBtn = document.getElementById("multi")
const dividBtn = document.getElementById("divid")
const equalBtn = document.getElementById("equal")
const pointBtn = document.getElementById("point")
const plusMinusBtn = document.getElementById("plus-minus")
const lftBtn = document.getElementById("lft-btn")
const ritBtn = document.getElementById("rit-btn")
const lftBtn2 = document.getElementById("lft-btn2")
const ritBtn2 = document.getElementById("rit-btn2")
const txtAra = document.getElementById("txt-ara")
const txtAra2 = document.getElementById("txt-ara-2")
let historyGen = document.querySelector(".side-bar-flipped")

///
let history = document.querySelector(".history")
let history2 = document.querySelector(".history2")
let lhsBtn = document.querySelector(".lhs-btn")
let rhsBtn = document.querySelector(`.rhs-btn`)
let lhsBtn2 = document.querySelector(".lhs-btn2")
let rhsBtn2 = document.querySelector(".rhs-btn2")

let myValue = []
let valueValue = []
let symbols = []
let symbols1 = []
let symbols2 = []
let numbers1 = []
let numbers2 = []
let array1 = []
let array2 = []
let array3 = []

var value = null
let click = null
let shlick = null
let clicked = null
let clicked2 = null
let pointCount = null
let equalPressed = null
let symbolPressed = null
let s = null
let s1 = 1
let s2 = null
let valueCount = 0
let symbolPoped = null
let lftClk = 0
let scroll = null
let scroll2 = null
let classCounter = 0
let historyScrollPosition = 0

function rightButtonClicked(number) {
    let container = document.querySelector(`.C${number}`)
    let button = document.querySelector(`.R${number}`)
    let button2 = document.querySelector(`.L${number}`)
    button2.classList.remove("lhs-hidden")


    let a 
    let b
    a = container.scrollLeft 
    container.scrollLeft += 20
    b = container.scrollLeft

    if (a === b) {
        button.classList.add("rhs-hidden")
    }

}

function leftButtonClicked(number) {
    let container = document.querySelector(`.C${number}`)
    let button = document.querySelector(`.R${number}`)
    let button2 = document.querySelector(`.L${number}`)
    button.classList.remove("rhs-hidden")

    let a 
    let b
    a = container.scrollLeft 
    container.scrollLeft -= 20
    b = container.scrollLeft

    console.log(container.scrollLeft)
    if (container.scrollLeft === 0) {
        button2.classList.add("lhs-hidden")
    }
}

function rightButtonClicked2(number) {
    console.log("right2 button clicked")

    let container = document.querySelector(`.c${number}`)
    let button = document.querySelector(`.r${number}`)
    
    let button2 = document.querySelector(`.l${number}`)
    
    button2.classList.remove("lhs-hidden")

    let a 
    let b
    a = container.scrollLeft 
    container.scrollLeft += 20
    b = container.scrollLeft

    console.log(container.scrollLeft)

    if (a === b) {
        button.classList.add("rhs-hidden")
    }

}

function leftButtonClicked2(number) {
    console.log("left2 button clicked")

    let container = document.querySelector(`.c${number}`)
    let button = document.querySelector(`.r${number}`)
    let button2 = document.querySelector(`.l${number}`)
    button.classList.remove("rhs-hidden")

    let a 
    let b
    a = container.scrollLeft 
    container.scrollLeft -= 20
    b = container.scrollLeft

    console.log(container.scrollLeft)
    if (container.scrollLeft === 0) {
        button2.classList.add("lhs-hidden")
    }
}

window.addEventListener("resize", function() {
    console.log("ooey hoey")
    scroller()
    scroller2()
    historyScroller1()
    historyScroller2()
});

function scrollDetector() {
    txtAra.scrollLeft = scroll
}

function scrollDetector2() {
    txtAra2.scrollLeft = scroll2
}

lftBtn.addEventListener("click", function() {
    let a
    let b
    a = txtAra.scrollLeft
    txtAra.scrollLeft -= 20
    b = txtAra.scrollLeft
    ritBtn.classList.remove("rit-btn")
    console.log(a, b)
    if (a === b) {
        lftBtn.classList.add("lft-btn")
    }
    scroll = txtAra.scrollLeft
}) 

ritBtn.addEventListener("click", function() {
    let a
    let b
    a = txtAra.scrollLeft
    txtAra.scrollLeft += 20
    b = txtAra.scrollLeft
    lftBtn.classList.remove("lft-btn")
    if (a === b) {
        ritBtn.classList.add("rit-btn")
    }
    scroll = txtAra.scrollLeft
})

lftBtn2.addEventListener("click", function() {
    let a
    let b
    a = txtAra2.scrollLeft
    txtAra2.scrollLeft -= 20
    b = txtAra2.scrollLeft
    ritBtn2.classList.remove("rit-btn2")
    console.log(a, b)
    if (a === b) {
        lftBtn2.classList.add("lft-btn2")
    }
    scroll2 = txtAra2.scrollLeft
}) 

ritBtn2.addEventListener("click", function() {
    let a
    let b
    a = txtAra2.scrollLeft
    txtAra2.scrollLeft += 20
    b = txtAra2.scrollLeft
    lftBtn2.classList.remove("lft-btn2")
    if (a === b) {
        ritBtn2.classList.add("rit-btn2")
    }
    scroll2 = txtAra2.scrollLeft
})

historyBtn.addEventListener("click", function () {
    historyBtn.classList.add("hi-btn")
    sideBar.classList.add("si-bar")
    historyScroller1()
    historyScroller2()
})

closeBtn.addEventListener("click", function () {
    historyBtn.classList.remove("hi-btn")
    sideBar.classList.remove("si-bar")
})

function Operators(n) {
    if (click) {
        if(myValue[myValue.length - 1] === ".") {
            myValue.pop()
        }
        symbolPressed = true
        click = null
        valueValue.push(myValue.length)
        myValue.push(n)
        symbols.push(n)
        renderValue()
        if(!clicked) {
            array1.push(s1)
        }
        s = null
        s1 = 1
        array1.push(5)
        clicked = null
        pointCount = null
    }
}

plusBtn.addEventListener("click", function () {
    Operators("+")
})

minusBtn.addEventListener("click", function () {
    Operators("−")
})

multiBtn.addEventListener("click", function () {
    Operators("x")
})

dividBtn.addEventListener("click", function () {
    Operators("÷")
})

function renderValue2() {
    let mukarram = valueValue[valueValue.length-1]
    let i = 0
    textArea2.innerHTML = ""
    for (i = 0; i < myValue.length- (myValue.length - mukarram); i++) {
        textArea2.innerHTML += myValue[i]
        scroller2()
    }
    textArea.innerHTML = ""
    for (i; i < myValue.length; i++) {
        textArea.innerHTML += myValue[i]
        scroller()
        if(!(myValue[i] >= 0 && myValue[i] <= 9)  && myValue[i] != ".") {
            click = null
        } else {
            click = true
        }     
    }
}

function scroller() {
    ritBtn.classList.add("rit-btn")
    txtAra.scrollLeft = txtAra.scrollWidth;
    scroll = txtAra.scrollLeft

    if(txtAra.scrollLeft > 0) {
        lftBtn.classList.remove("lft-btn")
    } else {
        lftBtn.classList.add("lft-btn")
    }
}

function scroller2() {
    ritBtn2.classList.add("rit-btn2")
    txtAra2.scrollLeft = txtAra2.scrollWidth;
    // scroll2 = txtAra2.scrollLeft

    if(txtAra2.scrollLeft > 0) {
        lftBtn2.classList.remove("lft-btn2")
    } else {
        lftBtn2.classList.add("lft-btn2")
    }
}

function historyScroller1() {
    for (let x = 0; x <= classCounter; x++) {
        let container = document.querySelector(`.C${x}`)
        let button = document.querySelector(`.R${x}`)
        button.classList.remove("rhs-hidden")

        // let m = historyScrollDetector(x)
        let m = container.scrollWidth

        // container.scrollLeft = container.scrollWidth
        container.scrollLeft = m

        console.log(m)
        console.log(container.scrollLeft++)

        console.log("this is the scroll width", container.scrollWidth)

        if (container.scrollLeft++ === 0) {
            button.classList.add("rhs-hidden")
        }

        container.scrollLeft = 0
    }
}

function historyScroller2() {
    // let x = classCounter
    for (let x = 0; x <= classCounter; x++) {
        let container = document.querySelector(`.c${x}`)
        let button = document.querySelector(`.r${x}`)
        button.classList.remove("rhs-hidden")

        console.log("this is the problem", x)

        // let m = historyScrollDetector(x)
        let m = container.scrollWidth

        // container.scrollLeft = container.scrollWidth
        container.scrollLeft = m

        console.log(m)
        console.log(container.scrollLeft++)

        console.log("this is the scroll width", container.scrollWidth)

        if (container.scrollLeft++ === 0) {
            button.classList.add("rhs-hidden")
        }

        container.scrollLeft = 0
    }
}

function renderValue() {
    if (clicked) {
        pointCount++
    }
    renderValue2()
    equalPressed = null
}

function Numbers(n) {

    if(!click) {
        valueValue.push(myValue.length)
    }
    if(!symbolPressed) {
        s1 *= 10
    } else {
        if(n != 0) {
            s1 *= 10
        }
    }
    if (equalPressed) {
        clears()
    }
    // let k = n / s1
    let k = Math.round((n / s1) * 1e12) / 1e12
    array1.push(k)
    symbolPressed = null
    myValue.push(n)
    renderValue()
    click = true
}

zeroBtn.addEventListener("click", function () {
    if (myValue[myValue.length - 1] === 0) {
        if(!(myValue[myValue.length - 2] >= 0 && myValue[myValue.length - 2] <= 9)  && myValue[myValue.length - 1] != ".") {

        }
        else {
            Numbers(0)
        }
    } else {
        Numbers(0)
    }
    
    if (myValue[0] === 0) {
        myValue.pop()
    }
})

oneBtn.addEventListener("click", function () {
    
    Numbers(1)
})

twoBtn.addEventListener("click", function () {
    Numbers(2)
})

threeBtn.addEventListener("click", function () {
    Numbers(3)
})

fourBtn.addEventListener("click", function () {
    Numbers(4)
})

fiveBtn.addEventListener("click", function () {
    Numbers(5)
})

sixBtn.addEventListener("click", function () {
    Numbers(6)
})

sevenBtn.addEventListener("click", function () {
    Numbers(7)
})

eightBtn.addEventListener("click", function () {
    Numbers(8)
})

nineBtn.addEventListener("click", function () {
    Numbers(9)
}) 

function pointChecking() {
    if (array1[array1.length-1] > 1) {
        array1.pop()
    }
    for (let i = 1;; i++) {
        if (array1[array1.length-i] === 5) {
            clicked = null
            break;
        } else if (array1[array1.length-i] >= 1) {
            clicked = true
            s = true
            break;
        } else if (array1.length-i === 0) {
            clicked = null
            break
        }
    }
}

backBtn.addEventListener("click", function () {
    if(myValue.length) {
        if(equalPressed) {
            clears()
        } else {
            scroller()
            myValue.pop()
            if(!(myValue[myValue.length - 1] >= 0 && myValue[myValue.length - 1] <= 9)  && myValue[myValue.length - 1] != ".") {
                valueValue.pop()
            }
             renderValue()

            if(array1[array1.length-1] < 1) {
                
                array1.pop()
                s1 /= 10
            } else if (array1[array1.length-1] === 1) {
                array1.pop()
                clicked = null
                s = null
            }
            else if (array1[array1.length-1] === 5) {
                array1.pop()
                valueValue.pop()
                renderValue()
                
                symbols.pop()
                symbolPoped = true
                pointChecking()
                if(array1[array1.length-1] === 0){
                    let j = null
                    let z = 1
                    let w = 1
                    for(let i = 0;;i++) {
                        if (array1[array1.length-i] > 0) {
                            break;
                        }
                        j = i
                    }
                    for(let i = 0; i < j; i++) {
                        w *= 10
                    }
                    if(array1[array1.length-(j+1)] < 1) {
                        for(let i = 0;;i++) {
                            z *= 10
                            if(z * array1[array1.length-(j+1)] >= 1) {
                                break;
                            }
                        }
                    } else if(array1[array1.length-(j+1)] === 5) {
                        array1.pop()
                        z=1
                        w=1
                    } else if(array1[array1.length-(j+1)] === 1) {
                        array1.pop()
                    } else {
                        z = array1[array1.length-(j+1)]
                    }
                    s1 = z * w
                } else if (array1[array1.length-1] === 1) {
                    array1.pop()
                    clicked = null
                    z=1
                    w=1
                } else if(array1[array1.length-1] < 1) {
                    z = 1
                    for(let i = 0;;i++) {
                        z *= 10
                        if(z * array1[array1.length-1] >= 1) {
                            break;
                        }
                    }
                    s1 = z
                } else {
                    z = array1[array1.length-1]
                    array1.pop()
                    s1 = z
                } 
                
            } else {
                s1 = array1[array1.length-1]
                array1.pop()
                clicked = null
                s = null
            }
        }
    }
})

clearBtn.addEventListener("click", function () {
    clears()
})

function clears() {
    textArea.innerHTML = ` `
    myValue = []
    valueValue = []
    renderValue()
    symbols = []
    symbols1 = []
    numbers1 = []
    numbers2 = []
    array1 = []
    array2 = []
    value = null
    click = null
    clicked = null
    pointCount = null
    equalPressed = null
    symbolPressed = null
    s = null
    s1 = 1
    scroller()
    scroller2()
}

equalBtn.addEventListener("click", function () {
    if(myValue.length) {
        combiner()
        numbers1 = array2
        operations()
        textArea.innerHTML = `=${Math.round((value) * 1e12) / 1e12}`
        lftBtn.classList.add("lft-btn")
        txtAra.scrollLeft = txtAra.scrollWidth;
        console.log("hello g", txtAra.scrollLeft)
        if(txtAra.scrollLeft > 0) {
            ritBtn.classList.remove("rit-btn")
        } else {
            ritBtn.classList.add("rit-btn")
        }
        lftBtn2.classList.add("lft-btn2")
        txtAra2.scrollLeft = txtAra2.scrollWidth;
        console.log("hello g", txtAra2.scrollLeft)
        if(txtAra2.scrollLeft > 0) {
            ritBtn2.classList.remove("rit-btn2")
        } else {
            ritBtn2.classList.add("rit-btn2")
        }
        textArea.scrollLeft = 0
        textArea2.scrollLeft = 0

        tArea.classList.remove("text-area")
        tArea2.classList.remove("text-area-2")
        history.classList.add("text-area")
        history2.classList.add("text-area-2")

        textArea = document.querySelector(".text-area")
        textArea2 = document.querySelector(".text-area-2")

        renderValue()
        textArea.innerHTML = `=${Math.round((value) * 1e12) / 1e12}`
        
        historyScroller1()
        historyScroller2()

        console.log("ooo hello")
        history.classList.remove("text-area", "history")
        history2.classList.remove("text-area-2", "history2")

        tArea.classList.add("text-area")
        tArea2.classList.add("text-area-2")

        textArea = document.querySelector(".text-area")
        textArea2 = document.querySelector(".text-area-2")
        scroll = 0
        scroll2 = 0
        myValue = [Math.round((value) * 1e12) / 1e12]
        symbols = []
        symbols1 = []
        numbers1 = []
        numbers2 = []
        array1 = []
        array2 = [Math.round((value) * 1e12) / 1e12]
        click = true
        clicked = null
        pointCount = null
        equalPressed = true
        symbolPressed = null
        s = null
        s1 = 1

    
        historyGenerator()
    }

})

function historyGenerator() {
    classCounter++
    historyGen.innerHTML += `
        <br />
        <button class="lhs-btn2 lhs-hidden l${classCounter}" onclick="leftButtonClicked2(${classCounter})">
            <b>&lt;</b>
        </button>
        <button class="rhs-btn2 rhs-hidden r${classCounter}" onclick="rightButtonClicked2(${classCounter})">
            <b>&gt;</b>
        </button>
        <h1 
            class="history2 c${classCounter}"
            style="
              color: #747474;
              font-size: 25px;
              text-align: left;
              overflow-x: scroll;
              padding-bottom: 0;
              margin-top: 0px;
            "
          >
          </h1>
          <button class="lhs-btn lhs-hidden L${classCounter}" onclick="leftButtonClicked(${classCounter})">
            <b>&lt;</b>
          </button>
          <button class="rhs-btn rhs-hidden R${classCounter}" onclick="rightButtonClicked(${classCounter})">
            <b>&gt;</b>
          </button>
          <h1
            class="history C${classCounter}"
            style="overflow-x: scroll; text-align: left; padding-bottom: 0px;"
          ></h1>
          <br />
          <br />
    `
    history = document.querySelector(".history")
    history2 = document.querySelector(".history2")
}




pointBtn.addEventListener("click", function () {
    if (!clicked) {
        if(!s) {
            if (!symbolPressed) {
                array1.push(s1)
            } else {
                array1.push(0)
            }
            s = true
        }
        s1 = 1

        valueValue.push(myValue.length)
        myValue.push(0)

        if (myValue[myValue.length - 2] >= 0 && myValue[myValue.length - 2] <= 9) {
            valueValue.pop()
            myValue.pop()
         }
        myValue.push(".")
        renderValue()
        click = true
        clicked = true
    }
})


// plusMinusBtn.addEventListener("click", function() {
//     // if (!lp) {
//         if(!plusminus) {
//             myValue.unshift("-")
//             renderValue()
//             plusminus = true
//         } else if(plusminus) {
//             myValue.shift()
//             renderValue()
//             plusminus = null
//         }   
//         click = null
//     // }
// })

// function plusminusclicked() {
//     value = 0 - value
// }

function combiner() {
    Operators("+")
    symbols.pop()
    myValue.pop()
    renderValue()
    if(array1[0] === 1) {
        array1.shift()
        if (array1[0] === 5) {
            array1.shift()
        }
    }
    
    for(let i = 1;; i++) {
        let y = null
        if(array1[1] < 1) {
            y = Math.round((array1[0] + array1[1]) * 1e12) / 1e12
            array1[1] = y
            y = null
            array1.shift()
        } else if (array1[1] === 5) {
            array2.push(array1[0])
            array1.shift()
            array1.shift()
        } else {
            y = Math.round((array1[0] * array1[1]) * 1e12) / 1e12
            array1[1] = y
            y = null
            array1.shift()
        }
            
        if(array1.length === 1) {
            break;
        }
    }
}

function operations() {

    let temp = null
    let tempSymbol = null

    for (let i = 0; i < 4; i++) {

        if (i === 0) {
            tempSymbol = "÷"
        } else if (i === 1) {
            tempSymbol = "x" 
        } else if (i === 2) {
            tempSymbol = "−"
        } else if (i === 3) {
            tempSymbol = "+"
        }
            
        for(let k = 0; k <= symbols.length; k++) {

            if (symbols[k] === tempSymbol) {
                for(let l = k; symbols[l] === tempSymbol; l++) {

                    if (i === 0) {
                         numbers1[l+1] = numbers1[l] / numbers1[l+1]
                    } else if (i === 1) {
                        numbers1[l+1] = numbers1[l] * numbers1[l+1] 
                    } else if (i === 2) {
                        numbers1[l+1] = numbers1[l] - numbers1[l+1]
                    } else if (i === 3) {
                        numbers1[l+1] = numbers1[l] + numbers1[l+1]
                    }

                    k++
                    temp = l+1
                }
                        
                symbols1.push(symbols[temp])
                numbers2.push(numbers1[temp])

            } else {
                symbols1.push(symbols[k])
                numbers2.push(numbers1[k])
            }
        }
        symbols1.pop()
        arrayCopy() 

        if (i === 3) {
            value = Math.round((numbers1[0]) * 1e12) / 1e12
            numbers1 = []
            break;
        }
    }
}

function arrayCopy() {
    numbers1 = []
    symbols = []
    for(let i = 0; i < numbers2.length; i++) {
        numbers1[i] = numbers2[i]
    }
    for(let j = 0; j < symbols1.length; j++) {
        symbols[j] = symbols1[j]
    }
    numbers2 = []
    symbols1 = []
}