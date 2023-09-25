const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
container.classList.remove("sign-up-mode");
});

const btn = document.getElementById("signup");

btn.addEventListener("click",userform);


async function userform(){
    let obj = {
        name:document.getElementById("username2").value,
        email:document.getElementById("email2").value,
        password:document.getElementById("password2").value
    };

    try {
        const response = await fetch("https://patchdquiz.onrender.com/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        });
        const daddy = await response.json();
        console.log(daddy);
        alert(daddy.msg);
    } catch (error) {
        console.log("Error !");   
    }
    clear1();
}




const login = document.getElementById("login");

login.addEventListener("click",usersign);

async function usersign(){
    let obj ={
        email:document.getElementById("email1").value,
        password:document.getElementById("password1").value
    };
    try {
        const response = await fetch("https://patchdquiz.onrender.com/login",{
            method:"POST",
            headers:{
            "Content-Type":"application/json",
            },
            body:JSON.stringify(obj)
        });

        const res = await response.json();
        console.log(res);
        alert(res.msg);
        if(document.getElementById("email1").value == "admin123@gmail.com" && document.getElementById("password1").value == "admin" )
        {
            window.location.replace ("../admin/admin.html");
        }
        else{
        if(res.msg == "User logged in successfully !"){
            localStorage.setItem("username",res.user[0].name);
            window.location.replace ("app.html");
        }
    }

    } catch (error) {
        console.log("Error !");
    }
    clear2();
}


function clear1() {
    let name=document.getElementById("username2").value="";
    let email=document.getElementById("email2").value="";
    let password=document.getElementById("password2").value="";   
}
function clear2() {
    let email=document.getElementById("email1").value="";
    let password=document.getElementById("password1").value="";   
}
