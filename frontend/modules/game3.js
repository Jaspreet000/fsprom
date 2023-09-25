const qstno = document.getElementById("qstnno");

const score = document.getElementById("score");
const progressText = document.getElementById('progressText');
const quest = document.getElementById('question');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');
const opt1 = document.getElementById("opt1");
const opt2 = document.getElementById("opt2");
const opt3 = document.getElementById("opt3");
const opt4 = document.getElementById("opt4");
const optt1=document.getElementById("optt1");
const optt2=document.getElementById("optt2");                   
const optt3=document.getElementById("optt3");
const optt4=document.getElementById("optt4");
const strat1=document.getElementById("startques");
const endques=document.getElementById("totalques");
const subject ="js";


fetchquesjs();


async function fetchquesjs(){
    try {
        const response = await fetch("https://patchdquiz.onrender.com/quedata/html");
        const res = await response.json();

        let l=0;
        let max_l = res.length-1;
        let scoree=0;

        function fetching()
        {
            strat1.innerHTML=l+1;
            endques.innerHTML=max_l+1;
            quest.innerHTML=res[l].question;
            opt1.innerHTML=res[l].opt1;
            opt2.innerHTML=res[l].opt2;
            opt3.innerHTML=res[l].opt3;
            opt4.innerHTML=res[l].opt4;
            optt1.addEventListener("click",()=>{
                const indexxx=1;
                if(indexxx==res[l].answer)
                {
                    opt1.classList.add("correct");
                    scoree=scoree+20/(l+1);
                    score.innerHTML=scoree;

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
                else{
                    opt1.classList.add("incorrect");

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
            })
            optt2.addEventListener("click",()=>{
                const indexxx=2;
                if(indexxx==res[l].answer)
                {
                    opt2.classList.add("correct");
                    scoree=scoree+20/(l+1);
                    
                    score.innerHTML=scoree;

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
                else{
                    opt2.classList.add("incorrect");

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
            })
            optt3.addEventListener("click",()=>{
                const indexxx=3;
                if(indexxx==res[l].answer)
                {
                    opt3.classList.add("correct");
                    scoree=scoree+20/(l+1);
                    score.innerHTML=scoree;

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
                else{
                    opt3.classList.add("incorrect");

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
            })
            optt4.addEventListener("click",()=>{
                const indexxx=4;
                if(indexxx==res[l].answer)
                {
                    opt4.classList.add("correct");
                    scoree=scoree+20/(l+1);
                    
                    score.innerHTML=scoree;

                    optt1.disabled="true";
                    optt2.disabled="true";
                    optt3.disabled="true";
                    optt4.disabled="true";
                }
                else{
                    opt4.classList.add("incorrect");
                }
            })


            // score.innerHTML=scoree;

            console.log(res[l].answer)
        }    
        fetching();
        
        document.getElementById("btnnn").addEventListener("click",()=>{
            ++l;
            opt1.classList.remove("correct");
            opt2.classList.remove("correct");
            opt3.classList.remove("correct");
            opt4.classList.remove("correct");
            opt1.classList.remove("incorrect");
            opt2.classList.remove("incorrect");
            opt3.classList.remove("incorrect");
            opt4.classList.remove("incorrect");
            optt1.disabled= false;
            optt2.disabled= false;
            optt3.disabled= false;
            optt4.disabled= false;


            fetching();
            
            if(l==max_l)
            {
                document.getElementById("btnnn").disabled="true";
            }
        })
        console.log(l)
        console.log(max_l)
        console.log(res);


        document.getElementById("btnnnn").addEventListener("click",()=>{
            let obj = Math.floor(scoree);
            localStorage.setItem("score",obj);
            let name = localStorage.getItem("username")
            let obj2={
                name:name,
                score:obj,
                subject:subject
            }

            async function setscore(){
                try {
                    const response =await fetch ("https://patchdquiz.onrender.com/scores",{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(obj2)
                    });

                    const res=await response.json();
                    console.log(res);
                } catch (error) {
                    console.log("error");
                }
            }
            setscore();
            window.location.replace("./end.html");
        })
        
    } catch (error) {
        console.log("error");
        
    }
}
