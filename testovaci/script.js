const gridContainer = document.querySelector('#gridContainer');
const gridContainerId = document.getElementById('gridContainer');
const test = document.getElementById('test');
const whiteBtn = document.getElementById('whiteBtn');
const blackBtn = document.getElementById('blackBtn');
const clearBtn = document.getElementById('clearBtn');
let resulution = 16;
let numberSq = 0;

function deletingDivs(numberSq,name){
    const divItemId = document.getElementById(numberSq+name);
    gridContainer.removeChild(divItemId);
}


function creatingDivs(numberSq,name){
    const divItem = document.createElement('div');
    divItem.classList.add('div-item');
    gridContainer.appendChild(divItem);
    divItem.setAttribute('id', numberSq+name);
}

for(let i= 0;i<resulution*resulution;i++){
    creatingDivs(i,"");
}

function paint(color){
    let moved = false;

    gridContainer.addEventListener('mousedown', function(){
        moved = true;
    })
    gridContainer.addEventListener('mouseup', function(){
        moved = false;
    })
    const divItem = document.querySelector('div-item');
    gridContainer.addEventListener('mouseover', function(e){
        if(moved){
            let divId = document.getElementById(e.relatedTarget.id);
            divId.style.background = color;
            console.log(e);
    }  
    })
    gridContainer.addEventListener('click', function(e){
        let divId = document.getElementById(e.target.id);
        divId.style.background = color;
        console.log(e);
    })
};
paint("black");
whiteBtn.addEventListener('click', () =>{
    paint("white");
})
blackBtn.addEventListener('click', () =>{
    paint("black");
})

gridContainerId.removeChild(test);
let idLetter = "";

document.getElementById('submitBtn').onclick = function(){
    let resulutionMe = document.getElementById('inputDis').value;
    if(resulutionMe<99 & resulutionMe>0){
    for(let i= 0;i<resulution*resulution;i++){
        deletingDivs(i,idLetter);
    }
    for(let i= 0;i<resulutionMe*resulutionMe;i++){
        creatingDivs(i,"k");
    }
    gridContainer.style.gridTemplateColumns = `repeat(${resulutionMe},1fr)`;
    resulution = resulutionMe;
    idLetter = "k";
}
else{
    console.log("nefunguju zmrde");
}
}
clearBtn.addEventListener('click',() =>{
    for(let i =0; i<resulution*resulution;i++){
    const divItemId = document.getElementById(i);
    divItemId.style.background = "white";
    }
})

