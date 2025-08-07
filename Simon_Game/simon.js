
function changeColor(id){
    let btn=document.querySelector(id);
    let original=getComputedStyle(btn).backgroundColor;
    btn.style.backgroundColor="white";
    setTimeout(()=>{
        btn.style.backgroundColor=original;
    },500)
}
const arr1=[];
const arr2=[];
let start=false;

let boxes=document.querySelectorAll(".back");
let score=document.querySelector(".score");
let stBtn=document.querySelector("#startBtn");
let resetBtn=document.querySelector("#resetBtn")
let massage=document.querySelector("#message");
let scor=0;
let i=1;
function randomChange(){
    arr2.length=0;
    let num=Math.floor(Math.random()*4)+1;
    let id=`#btn${num}`;
    changeColor(id);
    arr1.push(id);
    massage.textContent=`Level ${i}`;
    i++;
    
}
function startGame(){
    if(start) return;
    
    start=true;
    stBtn.disabled=true;
    resetBtn.disabled=false;
    arr1.length=0;
    arr2.length=0;
    i=1;
    scor=0;
    massage.textContent="Wath the pattern";
    score.textContent=`Score: ${scor}`;
    boxes.forEach(btn=>{
        btn.classList.remove("disabled");
    });
    
    randomChange();

}
stBtn.addEventListener("click",startGame);
function resetGame(){
    start=false;
    stBtn.disabled=false;
    resetBtn.disabled=true;
    massage.textContent="Game Over! Press start to play";
    score.textContent=`Score: ${scor}`;
    scor=0;
    arr1.length=0;
    arr2.length=0;
    i=1;
    boxes.forEach(btn=>{
        btn.classList.add("disabled");
    });
}
resetBtn.addEventListener("click",resetGame);
for(let box of boxes){
    box.addEventListener("click",function(event){
        let boxId = `#${event.target.id}`;;
        arr2.push(boxId);
        changeColor(boxId);
        
        const currIndex = arr2.length - 1;

            if(arr2[currIndex] === arr1[currIndex]){
               
                if(arr1.length==arr2.length){
                    scor++;
                    setTimeout(() => {
                        randomChange();
                    }, 1000);

                }
                
                
            }else{
                console.log(arr1);
                let btn=document.querySelector("body");
                let original=getComputedStyle(btn).backgroundColor;
                btn.style.backgroundColor="red";
                setTimeout(()=>{
                    btn.style.backgroundColor=original;
                },1000)
                resetGame();
            }
        

    });
}


