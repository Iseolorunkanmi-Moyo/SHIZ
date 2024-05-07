var telegram_bot_id = "6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4";
var chat_id = 5549088466;
var menuBtn = document.getElementById("menu")
var navLinks = document.getElementById("navLinks")
var closeMenu = document.getElementById("closeMenu")
var copy = document.getElementById("copy")
var contractAddress = "contractAddress"
var subWal = document.getElementById("subWal")


subWal.addEventListener("click", sendToTelegram)

const form = document.querySelector('#form')

var walletInput = document.getElementById("walletInput").value

// const bot = new Bot("6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4", 5549088466);


form.addEventListener("submit", (e) => {
    e.preventDefault()
    sendToTelegram();


})

function sendToTelegram() {

    // if (document.getElementById("walletInput").value.length == 0) {
    //         document.getElementById("subWarning").style.display = "flex"
    //         setTimeout(() => {
    //             document.getElementById("subWarning").style.display = "none"
    //         }, 2000);
    // }

    // else if (document.getElementById("walletInput").value.length > 0) {

    //     fetch("./data.json")

    //     .then(res => {

    //             return res.json();

    //         })

    //     .then((objectData) => {

    //             var i = 0;

    //             for (let index = 0; index < objectData.length; index++) {

    //                 if (objectData[index].name === document.getElementById("walletInput").value) {

    //                     document.getElementById("subReminder").style.display = "flex"
    //                     setTimeout(() => {
    //                         document.getElementById("subReminder").style.display = "none"
    //                 }, 2000);       

    //             }

    //             else if (objectData[index].name !== document.getElementById("walletInput").value){

    //                     console.log("wallet submitted ")


    //                     var walletInput = document.getElementById("walletInput").value
    //                     const bot = new Bot("6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4", 5549088466);
    //                     bot.sendMessage(walletInput)
    //                         .then(res => {
    //                             console.log(walletInput)
    //                         })

    //                     setTimeout(() => {
    //                         document.getElementById("walletInput").value = ""
    //                     }, 2000);

    //                     setTimeout(() => {
    //                         document.getElementById("subSuccess").style.display = "block"
    //                     }, 500);

    //                     setTimeout(() => {
    //                         document.getElementById("subSuccess").style.display = "none"
    //                     }, 4000);
    //              console.log("fdd")
    //                 }

    //             }

    //         }

    //         )

    //         .catch(error => console.log('error'));

    // }

    fetch("./data.json")
        .then(res => {
            // console.log(res)
            return res.json();
        })
        .then((objectData) => {

            if (document.getElementById("walletInput").value.length == 0) {
                document.getElementById("subWarning").style.display = "flex"
                setTimeout(() => {
                    document.getElementById("subWarning").style.display = "none"
                }, 2000);
            }

            else if (document.getElementById("walletInput").value.length > 0) {
                var index = 0;
                var array = [];

                for (let i = 0; i < objectData.length; i++) {
                    const element = objectData[i].name;
                    if (objectData[i].name === document.getElementById("walletInput").value) {
                        array.push("yes")
                        document.getElementById("subReminder").style.display = "flex"
                        setTimeout(() => {
                            document.getElementById("subReminder").style.display = "none"
                        }, 2000);

                    }

                }

                if (array.includes("yes")) {
                    console.log("wallet already submitted")
                }

                else {
                    
                    console.log("Send wallet")
                    
                        var walletInput = document.getElementById("walletInput").value
                        const bot = new Bot("6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4", 5549088466);
                        bot.sendMessage(walletInput)
                            .then(res => {
                                console.log(walletInput)
                            })

                        setTimeout(() => {
                            document.getElementById("walletInput").value = ""
                        }, 2000);

                        setTimeout(() => {
                            document.getElementById("subSuccess").style.display = "block"
                        }, 500);

                        setTimeout(() => {
                            document.getElementById("subSuccess").style.display = "none"
                        }, 4000);

                }

            }

        })

}

menuBtn.addEventListener("click", () => {
    navLinks.style.display = "flex"
})

closeMenu.addEventListener("click", () => {
    navLinks.style.display = "none"
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(contractAddress);
})
