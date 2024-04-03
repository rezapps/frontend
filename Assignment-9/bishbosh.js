const bishDiv = document.querySelector(".bishDiv");

const form = document.querySelector("form");

// using datafragment to avoid rendering multiple times
const df = document.createDocumentFragment();


// second implementation
// output bish-bosh to html page
// ask user for input and print bish-bosh
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const startNum = document.querySelector("#srartNum").value;
    const lengthNum = document.querySelector("#lengthNum").value;
    const bishNum = document.querySelector("#bishNum").value;
    const boshNum = document.querySelector("#boshNum").value;

    printBishBosh(startNum, lengthNum, bishNum, boshNum);

});


// function to calculate and print bish-bosh
function printBishBosh(startNum, lengthNum, bishNum, boshNum) {
    // reset the bishDiv before printing
    bishDiv.innerHTML = "";
    for (let i = startNum; i <= lengthNum; i++) {
        const span = document.createElement("span");
        span.classList.add("bishSpan");

        if (i % bishNum === 0 && i % boshNum === 0) {

            span.textContent = "Bish-Bosh";
            span.classList.add("bishbosh");
        } else if (i % boshNum === 0) {
            span.textContent = "Bosh";
            span.classList.add("bosh");
        }
        else if (i % bishNum === 0) {
            span.textContent = "Bish";
            span.classList.add("bish");
        }
        else {
            span.textContent = i;
        }
        df.appendChild(span);
    }

    bishDiv.appendChild(df);
}

// first implementation
// output bish-bosh if number is divisible by both 3 and 4
let bishbosh = "";
const green = "\x1b[32m";
const red = "\x1b[33m";
const aqua = "\x1b[36m";
const resetColor = "\x1b[0m";


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
        bishbosh += green + "Bish-Bosh " + resetColor;
    } else if (i % 3 === 0) {
        bishbosh += aqua + ("Bish ") + resetColor;
    } else if (i % 4 === 0) {
        bishbosh += red + ("Bosh ") + resetColor;
    } else {
        bishbosh += (i + " ");
    }

}
console.log(bishbosh);
