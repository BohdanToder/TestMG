const formMG = document.querySelector('.form');
const dreamTeamScore = document.querySelector('.element__dt input');
const theBrainyFoolsScore = document.querySelector('.element__bf input');
const cotyhoroshkoScore = document.querySelector('.element__kh input');
const neMisceviScore = document.querySelector('.element__nm input');
const naHorhushahScore = document.querySelector('.element__nh input');
const kokainovyjKopernickScore = document.querySelector('.element__kk input');

const button = document.querySelector('.button');

const func = (e) => { 
    e.preventDefault();
    let dreamTeamAverage = (+(dreamTeamScore.value) + 263) / 5 + 10;
    dreamTeamAverage = dreamTeamAverage.toFixed(2);
    if (dreamTeamScore.value === "") { 
        dreamTeamAverage = 73.8;
    }

    let theBrainyFoolsAverage = (+(theBrainyFoolsScore.value) + 227) / 5 + 10;
    theBrainyFoolsAverage = theBrainyFoolsAverage.toFixed(2);
    if (theBrainyFoolsScore.value === "") { 
        theBrainyFoolsAverage = 64.8;
    }

    let cotyhoroshkoAverage = (+(cotyhoroshkoScore.value) + 224) / 5 + 10;
    cotyhoroshkoAverage = cotyhoroshkoAverage.toFixed(2);
    if (cotyhoroshkoScore.value === "") { 
        cotyhoroshkoAverage = 64;
    }

    let neMisceviAverage = (+(neMisceviScore.value) + 221) / 5 + 10;
    neMisceviAverage = neMisceviAverage.toFixed(2);
    if (neMisceviScore.value === "") { 
        neMisceviAverage = 63.3;
    }

    let naHorhushahAverage = (+(naHorhushahScore.value) + 115) / 3 + 6;
    naHorhushahAverage = naHorhushahAverage.toFixed(2);
    if (naHorhushahScore.value === "") { 
        naHorhushahAverage = 61.5;
    }

    let kokainovyjKopernickAverage = (+(kokainovyjKopernickScore.value) + 59) / 2 + 4;
    kokainovyjKopernickAverage = kokainovyjKopernickAverage.toFixed(2);
    if (kokainovyjKopernickScore.value === "") { 
        kokainovyjKopernickAverage = 61;
    }

    alert(`Dream Team на першому місці єсєсєна, але якщо цікаво глянути результати то на, дивись...мені не жалко... 
    \nDream Team - ${dreamTeamAverage}, \nTheBrainyFools - ${theBrainyFoolsAverage}, \nКотигорошко - ${cotyhoroshkoAverage}, \nНеМiсцевi - ${neMisceviAverage},\nНа горгушах - ${naHorhushahAverage},\nКокаиновый Коперник - ${kokainovyjKopernickAverage}.`);

    formMG.reset();
};

button.addEventListener('click', func);