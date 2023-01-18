let json = `[{
    "title": "Железный человек",
    "titleen": "Iron Man",
    "realname": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "more": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома Круза, то ли в хорошо прописанном персонаже.",
    "picture": "assets/images/IronMan.png"
},{
    "title": "Человек-паук",
    "titleen": "Spider-Man",
    "realname": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "more": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! Всего лишь нужен укус паучка:)",
    "picture": "assets/images/Spider-Man.png"
},{
    "title": "Тор",
    "titleen": "Thor",
    "realname": "Тор Одинсон",
    "occupation": "борец за справедливость, скандинавский бог",
    "superpowers": "все, что может бог, плюс молот Мьелнир",
    "more": "персонаж Тора основан на образе одноименного скандинавского бога. Тор во вселенной Marvel — родной сын Одина и древнейшей богини Геи. После рождения сына Один забрал его в Асгард, где растил вместе со своей женой, богиней Фригг. Последнюю Тор всегда считал своей настоящей матерью и лишь много позже узнал правду о своем рождении.",
    "picture": "assets/images/Thor.png"
},{
    "title": "Черная вдова",
    "titleen": "Black widow",
    "realname": "Наташа Романофф",
    "occupation": "супергероиня, шпионка",
    "superpowers": "пик человеческого физического потенциала, замедленное старение, знание многих языков",
    "more": "упергероиня российского происхождения родилась предположительно в 1928 году в Сталинграде. Во время Второй мировой войны она потеряла родителей и была спасена из горящего дома советским солдатом. Тот на некоторое время стал ее опекуном. Повзрослев, Наташа попала в организацию «Красная Комната», где прошла многочисленные тренировки, а именно — была частью шпионской программы.",
    "picture": "assets/images/BlackWidow.png"
}]`;

let heroes = JSON.parse(json);
let username = "";

document.addEventListener("DOMContentLoaded", function (event) {
    let heroesContent = "";
    for (let hero of heroes) {
        heroesContent += `<div class='hero__container'>
        <h2 class="hero__title">${hero.title}</h2>
        <div class="hero__button">Твоя оценка:  <input class="points" type="number" min="0" max="10"></div>  
        <img class="hero__img" src="${hero.picture}">
        <p class="hero__text"><span class="bold">Настоящее имя:</span> ${hero.realname}<br><br>
        <span class="bold">Род деятельности:</span> ${hero.occupation}<br><br>
        <span class="bold">Суперсилы:</span> ${hero.superpowers}<br><br>
        <span class="bold">Подробнее:</span> ${hero.more}</p>
        </div>`;
    }
    document.querySelector('#container').innerHTML = heroesContent;
    setTimeout (function() {
        username = prompt("Привет! Как тебя зовут?");
        alert(`${username}, ты можешь выставить свою личную оценку супергероям от 0 до 10!`)}, 100);
});

function getpoints() {
    
    var transl = new Array();
    transl['А']='A';     transl['а']='a';
    transl['Б']='B';     transl['б']='b';
    transl['В']='V';     transl['в']='v';
    transl['Г']='G';     transl['г']='g';
    transl['Д']='D';     transl['д']='d';
    transl['Е']='E';     transl['е']='e';
    transl['Ё']='Yo';    transl['ё']='yo';
    transl['Ж']='Zh';    transl['ж']='zh';
    transl['З']='Z';     transl['з']='z';
    transl['И']='I';     transl['и']='i';
    transl['Й']='J';     transl['й']='j';
    transl['К']='K';     transl['к']='k';
    transl['Л']='L';     transl['л']='l';
    transl['М']='M';     transl['м']='m';
    transl['Н']='N';     transl['н']='n';
    transl['О']='O';     transl['о']='o';
    transl['П']='P';     transl['п']='p';
    transl['Р']='R';     transl['р']='r';
    transl['С']='S';     transl['с']='s';
    transl['Т']='T';     transl['т']='t';
    transl['У']='U';     transl['у']='u';
    transl['Ф']='F';     transl['ф']='f';
    transl['Х']='X';     transl['х']='x';
    transl['Ц']='C';     transl['ц']='c';
    transl['Ч']='Ch';    transl['ч']='ch';
    transl['Ш']='Sh';    transl['ш']='sh';
    transl['Щ']='Shh';    transl['щ']='shh';
    transl['Ъ']='"';     transl['ъ']='"';
    transl['Ы']='Y\'';    transl['ы']='y\'';
    transl['Ь']='\'';    transl['ь']='\'';
    transl['Э']='E\'';    transl['э']='e\'';
    transl['Ю']='Yu';    transl['ю']='yu';
    transl['Я']='Ya';    transl['я']='ya';
    
    let user = '';
    for(i=0;i<username.length;i++) {
        if(transl[username[i]] != undefined) { user += transl[username[i]]; }
        else { user += username[i]; }
    }
    let pointsString = "";
    let inputs = document.getElementsByClassName('points');
    for (let i=0; i<heroes.length; i++) {
        pointsString += `${heroes[i].titleen}: ${inputs[i].value}; `;
    }
    localStorage.setItem(user, pointsString);
}
