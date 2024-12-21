
export function createCard(parentId, id){
    let parent = document.getElementById(parentId);
    // parent.classList.add('pe-2');
    let card = document.createElement('div');
    card.id = id;
    card.classList.add('card', 'cstm-card', 'w-100', 'h-100');
    let row1 = document.createElement('div');
    row1.id = id + 'Row1';
    row1.classList.add('row');
    card.append(row1);
    parent.append(card);
};

export function createCardTitle(parentId, id, title){
    let titleRow = document.getElementById(parentId + 'Row1');
    let cardTitle = document.createElement('h2');
    cardTitle.id = id;
    cardTitle.classList.add('col', 'title-bold', 'fs-5');
    cardTitle.innerText = title;
    titleRow.append(cardTitle);
};