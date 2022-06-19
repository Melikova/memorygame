const cardArray = [
    {
        name:'php',
        img: 'images/php.jpg'
    },
    {
        name:'sass',
        img: 'images/sass.jpg'
    },
    {
        name:'html',
        img: 'images/html.jpg'
    },
    {
        name:'css',
        img: 'images/css.jpg'
    },
    {
        name:'codeigniter',
        img: 'images/codeigniter.jpg'
    },
    {
        name:'git',
        img: 'images/git.jpg'
    },
    {
        name:'php',
        img: 'images/php.jpg'
    },
    {
        name:'sass',
        img: 'images/sass.jpg'
    },
    {
        name:'html',
        img: 'images/html.jpg'
    },
    {
        name:'css',
        img: 'images/css.jpg'
    },
    {
        name:'codeigniter',
        img: 'images/codeigniter.jpg'
    },
    {
        name:'git',
        img: 'images/git.jpg'
    }
];

cardArray.sort(()=>0.5-Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector('#result')
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard(){
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/white.jpg');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipcard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionOneId=cardsChosenIds[0];
    const optionTwoId=cardsChosenIds[1];
    if(optionOneId==optionTwoId){
        cardsChosen =[];
        cardsChosenIds =[];
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
    }
    if(cardsChosen[0]===cardsChosen[1]){
        cards[optionOneId].removeEventListener('click', flipcard);
        cards[optionTwoId].removeEventListener('click', flipcard);
        cardsWon.push(cardsChosen);
    }else{
        cards[optionOneId].setAttribute('src', 'images/white.jpg');
        cards[optionTwoId].setAttribute('src', 'images/white.jpg');
    }
    cardsChosen =[];
    cardsChosenIds =[];
    resultDisplay.innerHTML = cardsWon.length;

    if(cardsWon.length==cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations";
    }
}

function flipcard(){
    let card_id=this.getAttribute('data-id');
    cardsChosen.push(cardArray[card_id].name);
    cardsChosenIds.push(card_id);
    this.setAttribute('src', cardArray[card_id].img);
    if(cardsChosen.length ===2){
        setTimeout(checkMatch, 500);
    }
}


