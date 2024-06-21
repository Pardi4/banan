let x = 0;
const button = document.querySelector("button").addEventListener("click", () => {
    x += 1
    document.querySelector("h1").innerHTML = x
    if(x <=100 ){
        if (x % 10 == 0 && x != 0) {
            sendmsg(x);
        }
    }if (x % 100 == 0 && x != 0) {
        sendmsg(x);
    }
})

function sendmsg(x) {
    const msgdiv = document.getElementById("msg");
    msgdiv.innerHTML = `Gratulacje udało ci się ${x} razy kliknąć w banana`;
    msgdiv.classList.add("anim");
    msgdiv.addEventListener("animationend", () => {
        msgdiv.classList.remove("anim");
    });
}