function generateSection(levelData, num){
    const section = document.createElement('section');
    section.classList.add('level-container');

    const img = document.createElement('img');
    img.src = 'images/' + levelData.name + '.jpg';
    img.alt = 'ГМД картинка';
    img.width = 230.4; //12% от фулскрин (1920 x 1080)
    img.height = 129.6;
    img.classList.add('preview');

    const div = document.createElement('div');
    div.classList.add('level-info');

    const h1 = document.createElement('h1');
    h1.innerHTML = '#' + num + ' - ' + levelData.name;
    h1.classList.add('name');

    const h2 = document.createElement('h2');
    h2.innerHTML = 'от ' + levelData.author;
    h2.classList.add('author');

    const p = document.createElement('p');
    p.innerHTML = 'id - ' + levelData.id;
    p.classList.add('id');

    section.append(img);
    div.append(h1);
    div.append(h2);
    div.append(p);
    section.append(div);

    return section;
}

const main = document.querySelector('main');

for(let i = 1; i <= levelData.length; i++){
    const level = generateSection(levelData[i - 1], i);
    main.append(level);
}