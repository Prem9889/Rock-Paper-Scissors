let userscore = 0;
let compscore = 0;
let choices = document.querySelectorAll(".choice");
let mess = document.querySelector("#mess");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");



let gencompchoice =()=>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}
const draw =()=>{
    mess.innerText="Match was draw,play again";
    mess.style.backgroundColor = "orange";
    mess.style.color ="black";
}

const showwinner = (userwin,userchoice,compchoice)=>{
   if(userwin)
   {
    mess.innerText = `You Win,your ${userchoice} beats the ${compchoice}`;
    mess.style.backgroundColor = "green";
    mess.style.color ="white";
    userscore++;
    user_score.innerText = userscore;
   }
   else{
    mess.innerText = `You Loss,${compchoice} beats your ${userchoice}`;
    mess.style.backgroundColor = "red";
    mess.style.color ="white";
    compscore++;
    comp_score.innerText = compscore;
   }
}

let checkwinner=(userchoice)=>{
    // console.log(userchoice);
    const compchoice = gencompchoice();
    // console.log(compchoice);
    let userwin = true;
    if(userchoice === compchoice)
    {
        draw();
    }
    else 
    {
        if(userchoice ==="rock")
    {
        userwin = compchoice==="paper"?false:true;
    }
        else if(userchoice === "paper")
    {
        userwin = compchoice==="scissors"?false:true;
    }
    else
    {
        userwin = compchoice==="rock"?false:true;

    }
        showwinner(userwin,userchoice,compchoice);
    }
    
}

    choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        checkwinner(userchoice);
    })
})


