import { generateBreadCrumb } from "/scripts/breadcrumb";
import { generateDashboard } from "/scripts/dashboard";
import { createCard, createCardTitle } from "../../scripts/cards";

// link aspect change
let presentPageTitle = document.getElementById("headerMyWarehousesLink");
presentPageTitle.classList.remove('title');
presentPageTitle.classList.add('title-bold');

// breadcrumb
let breadCrumbLinks = [['home','/index.html'], ['My Warehouses','/pages/myWareHouses/myWareHouses.html']];
generateBreadCrumb(breadCrumbLinks);


//DASHBOARD
// generateDashboard();
// dashboard link style
document.getElementById('linkMyWarehouses').classList.remove('title');
document.getElementById('linkMyWarehouses').classList.add('title-bold');


//
createCard('myWarehouseCardContainer','myWarehouseCard');
createCardTitle('myWarehouseCard', 'myWarehouseCardTitle', 'My WareHouses');
createCard('selectedCardContainer','selectedCard');
createCardTitle('selectedCard', 'myWarehouseCardTitle', 'Selected');
createCard('searchCardContainer','searchCard');
createCardTitle('searchCard', 'myWarehouseCardTitle', 'Search');
createCard('lastEventsCardContainer','lastEventsCard');
createCardTitle('lastEventsCard', 'myWarehouseCardTitle', 'Last events');

// MY WAREHOUSES LIST
let warehousesCard = document.getElementById('myWarehouseCard');
if(warehousesCard != null){
    let warehousesList = document.createElement('ul');
    warehousesList.style.overflow = 'hidden';
    warehousesList.style.overflowY = 'scroll';
    warehousesList.classList.add('card');
    warehousesCard.append(warehousesList);

    //! a générer
    let warehousesListArray = ['WareHouse 1', 'WareHouse 2', 'Tom\'s Depot'];
    for(let i=0; i<warehousesListArray.length; i++){
        let $li = document.createElement('li');
        $li.classList.add('lh-3');
        $li.style.listStyle = 'none';
        $li.innerText = '> ' + warehousesListArray[i];
        warehousesList.append($li);
    };

}
// SELECTED INFO
let selectedCard = document.getElementById('selectedCard');
if(selectedCard != null){
    let selectedList = document.createElement('ul');
    selectedList.style.overflow = 'hidden';
    selectedList.style.overflowY = 'scroll';
    selectedList.classList.add('card', 'h-100');
    selectedCard.append(selectedList);

    //! a générer

}

// SEARCH BAR
let searchCard = document.getElementById('searchCard');
if(searchCard != null){
    let searchForm = document.createElement('form');
    searchForm.classList.add('my-auto')
    searchCard.append(searchForm);
    let searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.id = 'searchInput';
    searchInput.name = 'searchInput';
    searchInput.placeholder = 'Search';
    searchInput.classList.add('form-control');

    searchForm.append(searchInput);
    

    //! a générer

}

// LAST EVENTS LIST
let lastEventsCard = document.getElementById('lastEventsCard');
if(lastEventsCard != null){
    let lastEventsList = document.createElement('ul');
    lastEventsList.style.overflow = 'hidden';
    lastEventsList.style.overflowY = 'scroll';
    lastEventsList.classList.add('card', 'h-100');
    lastEventsCard.append(lastEventsList);

    //! a générer


}
