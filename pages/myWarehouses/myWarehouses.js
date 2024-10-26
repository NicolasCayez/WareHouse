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