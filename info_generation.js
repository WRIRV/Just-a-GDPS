function generateInfo(info){
    const victorsList = document.createElement('ol');
    victorsList.classList.add('.modal-main');

    h1.innerHTML = 'Информация об уровне ' + info.name + ':';

    verifer.innerHTML = info.veriferData.name;

    if(info.veriferData.url === ''){
        proof.innerHTML = 'Ссылки на прохождение нет';
        proof.href = '#';
        proof.target = '_self';
    }else{
        proof.innerHTML = 'Ссылка на прохождение'
        proof.href = info.veriferData.url;
        proof.target = '_blank';
    }

    if(info.victorsData.length == 0){
        const noneVictors = document.createElement('p');
        noneVictors.innerHTML = 'Этот уровень ещё никто не прошёл...'
        victorsList.append(noneVictors);
    }else{
        info.victorsData.forEach(function(victorData){
            const li = document.createElement('li');

            const div = document.createElement('div');
            div.classList.add('player-info');

            const victor = document.createElement('p');
            victor.innerHTML = victorData.name;
            div.append(victor);

            const urlA = document.createElement('a');
            urlA.innerHTML = 'ссылка на прохождение';
            urlA.href = victorData.url;
            urlA.target = '_blank';
            const urlP = document.createElement('p');
            urlP.append(urlA);
            div.append(urlP);

            li.append(div);
            victorsList.append(li);
        });
    }

    modalMain.append(victorsList);
    return victorsList;
}

const modal = document.querySelector('.modal');
const h1 = document.querySelector('.modal-main h1');
const verifer = document.querySelector('.player-info p');
const proof = document.querySelector('.player-info p a');
const modalMain = document.querySelector('.modal-main');

const levels = document.querySelectorAll('.level-container');

let playerInfoContainer;
levels.forEach(function(level){
    level.addEventListener('click', function(){
        const id = parseInt(level.childNodes[1].childNodes[2].innerHTML.substring(4, level.childNodes[1].childNodes[2].innerHTML.length));
        let title = '';

        levelData.forEach(function(info){
            if(info.id === id){
                title = info.name;
            }
        });
        
        playerData.forEach(function(playerInfo){
            if(playerInfo.name === title){
                playerInfoContainer = generateInfo(playerInfo);
            }
        });

        modal.style.display = 'block';
        document.body.style.overflowY = 'hidden';
    });
});



modal.addEventListener('click', function(ev){
    if(ev.target.classList.contains('modal') || ev.target.classList.contains('close')){
        modal.style.display = 'none';
        playerInfoContainer.remove();
        document.body.style.overflowY = 'scroll';
    }
});