import { generateBreadCrumb } from "/scripts/breadcrumb";
import { createCard, createCardTitle } from "../../scripts/cards";

// link aspect change
let presentPageTitle = document.getElementById("headerMyWarehousesLink");
presentPageTitle.classList.remove('title');
presentPageTitle.classList.add('title-bold');

// breadcrumb
let breadCrumbLinks = [['home','/index.html'], ['Transactions','/pages/transactions/transactions.html']];
generateBreadCrumb(breadCrumbLinks);


//DASHBOARD
// dashboard link style : current page is bold
document.getElementById('linkTransactions').classList.remove('title');
document.getElementById('linkTransactions').classList.add('title-bold');


// LEFT PART CARDS


