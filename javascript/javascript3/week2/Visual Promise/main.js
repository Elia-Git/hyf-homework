//Given Target positions
// Red circle target: x: 20 px, y: 300 px;
// Blue circle target: x: 400 px, y: 300 px;
// Green circle target: x: 400 px, y: 20 px;

//One by one
const span = document.querySelector("span");
async function translateOneByOne() {
    return new Promise((resolve) => {
        try {
            moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
                    x: 20,
                    y: 300,
                })
                .then(() => {
                    console.log("Red element has been moved");
                })
                .then(() =>
                    moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
                        x: 400,
                        y: 300,
                    })
                )
                .then(() => {
                    console.log("Then, Blue element has been moved");
                })
                .then(() =>
                    moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
                        x: 400,
                        y: 20,
                    })
                )
                .then(() => {
                    console.log("finally, Green element has been moved");
                })
                .then(() => {
                    setTimeout(() => {
                        span.classList.add("shown"), {
                            x: 400,
                            y: 20,
                        };
                        console.log("Yehhh,moved one after another, Thumps up");
                    }, 300);
                });
        } catch (error) {
            console.log(error);
        }
    });
}

translateOneByOne();

// All at once
function translateAllAtOnce() {
    const promiseR = moveElement(
        document.querySelector("ul.marks li:nth-child(1)"), {
            x: 20,
            y: 300,
        }
    );
    const promiseB = moveElement(
        document.querySelector("ul.marks li:nth-child(2)"), {
            x: 400,
            y: 300,
        }
    );
    const promiseG = moveElement(
        document.querySelector("ul.marks li:nth-child(3)"), {
            x: 400,
            y: 20,
        }
    );
    Promise.all([promiseR, promiseB, promiseG])
        .then(() => {
            console.log("All elements moved at Once");
        })
        .then(() => {
            setTimeout(() => {
                span.classList.add("shown");
                console.log("Yes, moved all together, Thumps up");
            }, 300);
        });
}

// translateAllAtOnce();