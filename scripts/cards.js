
export function createCard(parentId, id){
    let parent = document.getElementById(parentId);
    // parent.classList.add('pe-2');
    let card = document.createElement('div');
    card.id = id;
    card.classList.add('card', 'w-100');
    parent.append(card);
};

export function createCardTitle(parentId, id, title){
    let parent = document.getElementById(parentId);
    let cardTitle = document.createElement('h2');
    cardTitle.id = id;
    cardTitle.classList.add('title-bold', 'fs-5');
    cardTitle.innerText = title;
    parent.append(cardTitle);
};