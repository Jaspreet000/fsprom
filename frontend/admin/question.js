const btnn = document.getElementById("q_sub");
const log= document.getElementById("logout");

log.addEventListener("click",resett);

function resett(){
    localStorage.removeItem("userdata");
    window.location.replace("../modules/login.html")
}


btnn.addEventListener("click",quesssyess);

async function quesssyess()
{
    let obj = {
        subject : document.getElementById("sub").value,
        question:  document.getElementById("ques").value,
        opt1 :  document.getElementById("opt1").value,
        opt2:  document.getElementById("opt2").value,
        opt3 :  document.getElementById("opt3").value,
        opt4: document.getElementById("opt4").value,
        answer: document.getElementById("index").value
    };

    try {
        const response = await fetch("https://patchdquiz.onrender.com/setq",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        });
        const xyz = await response.json();
        console.log(xyz);
        alert(xyz.msg);
    } catch (error) {
        console.log("Error !");   
    }

    clear1();
}

function clear1(){
    let subject = document.getElementById("sub").value="";
    let question=  document.getElementById("ques").value="";
    let opt1 =  document.getElementById("opt1").value="";
    let opt2=  document.getElementById("opt2").value="";
    let opt3 =  document.getElementById("opt3").value="";
    let opt4= document.getElementById("opt4").value="";
    let answer= document.getElementById("index").value="";
}