const colors = ['#E94F37', '#393E41','#3F88C5','#44BBA4','#FFDD4A'];
let p1score=1;
let p2score=1;

function randColor() {
    let num = Math.floor(Math.random()*5);
    return colors[num];
}

function initarray() {
    for (let i=0; i<10;i++) { //for every row
        for (let j=0; j<10; j++) { //for every column
            let cell = document.querySelector('#c'+String(i)+ String(j));
            cell.style.background = randColor();
        }
    }
}

function startgame() {
    initarray();
    let p1start = document.querySelector('#c00')
    p1start.style.add('box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)');
}

startgame();