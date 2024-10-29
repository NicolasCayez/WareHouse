import { generateBreadCrumb } from "/scripts/breadcrumb";
import { createCard, createCardTitle } from "../../scripts/cards";

// link aspect change
let presentPageTitle = document.getElementById("headerMyWarehousesLink");
presentPageTitle.classList.remove('title');
presentPageTitle.classList.add('title-bold');

// breadcrumb
let breadCrumbLinks = [['home','/index.html'], ['Transactions','/pages/transactions/transactions.html'], ['Transferts','/pages/transactions/transactions.html'], ['New Transfert','/pages/transactions/newTransfert.html']];
generateBreadCrumb(breadCrumbLinks);


//DASHBOARD
// dashboard link style : current page is bold
document.getElementById('linkNewTransfert').classList.remove('title');
document.getElementById('linkNewTransfert').classList.add('title-bold');


// LEFT PART CARDS
//Transfert origin
createCard('newTransfertOriginCardContainer','newTransfertOriginCard');
createCardTitle('newTransfertOriginCard', 'newTransfertOriginCardTitle', 'New stock transfert');
let newTransfertOriginCard = document.getElementById('newTransfertOriginCard');
if(newTransfertOriginCard != null){
    //row 1 after title
    let row1 = document.getElementById(newTransfertOriginCard.id + 'Row1');
    row1.classList.add('justify-evenly');
    let originWarehouceFormGroup = document.createElement('div');
    originWarehouceFormGroup.classList.add('col');
    row1.appendChild(originWarehouceFormGroup);
    //form origin warehouse choice
    let originWarehouceForm = document.createElement('form');
    originWarehouceForm.classList.add('row', 'justify-content-end');
    originWarehouceFormGroup.appendChild(originWarehouceForm);
    let originWarehouceSelect = document.createElement('select');
    originWarehouceSelect.classList.add('w-100', 'ps-2');
    originWarehouceForm.append(originWarehouceSelect);
    let originWarehouceOptionSelected = document.createElement('option');
    originWarehouceOptionSelected.innerText = 'Select Origin WareHouse';
    originWarehouceOptionSelected.selected = true;
    originWarehouceSelect.append(originWarehouceOptionSelected);
    //! A GENERER
    let $originWarehouceOption = document.createElement('option');
    $originWarehouceOption.value = '1';
    $originWarehouceOption.innerText= 'WareHouse2';
    originWarehouceSelect.append($originWarehouceOption);
    //form search/filter products
    let itemsSearchForm = document.createElement('form');
    itemsSearchForm.classList.add('row', 'justify-content-end');
    originWarehouceFormGroup.appendChild(itemsSearchForm);
    let itemsSearchInput = document.createElement('input');
    itemsSearchInput.classList.add('form-control', 'w-100', 'py-0', 'mt-1');
    itemsSearchInput.placeholder = 'Search item/Product to add';
    itemsSearchForm.append(itemsSearchInput);
    // below forms
    let itemsToAddList = document.createElement('ul');
    itemsToAddList.style.overflow = 'hidden';
    itemsToAddList.style.overflowY = 'scroll';
    itemsToAddList.classList.add('card', 'h-100', 'mb-0', 'mt-1');
    newTransfertOriginCard.append(itemsToAddList);
    //! a générer : $li
}
//Transfert destination
createCard('newTransfertDestinationCardContainer','newTransfertDestinationCard');
createCardTitle('newTransfertDestinationCard', 'mnewTransfertDestinationCardTitle', 'Selected products');
let newTransfertDestinationCard = document.getElementById('newTransfertDestinationCard');
if(newTransfertDestinationCard != null){
    //row 1 after title
    let row1 = document.getElementById(newTransfertDestinationCard.id + 'Row1');
    row1.classList.add('justify-evenly');
    let destinationWarehouceFormGroup = document.createElement('div');
    destinationWarehouceFormGroup.classList.add('col');
    row1.appendChild(destinationWarehouceFormGroup);
    // form destination warehouse choice
    let destinationWarehouceForm = document.createElement('form');
    destinationWarehouceForm.classList.add('row', 'justify-content-end');
    destinationWarehouceFormGroup.appendChild(destinationWarehouceForm);
    let destinationWarehouceSelect = document.createElement('select');
    destinationWarehouceSelect.classList.add('w-100', 'ps-2');
    destinationWarehouceForm.append(destinationWarehouceSelect);
    let destinationWarehouceOptionSelected = document.createElement('option');
    destinationWarehouceOptionSelected.innerText = 'Select Destination WareHouse';
    destinationWarehouceOptionSelected.selected = true;
    destinationWarehouceSelect.append(destinationWarehouceOptionSelected);
    //! A GENERER
    let $destinationWarehouceOption = document.createElement('option');
    $destinationWarehouceOption.value = '1';
    $destinationWarehouceOption.innerText= 'WareHouse2';
    destinationWarehouceSelect.append($destinationWarehouceOption);
    // below forms
    let itemsAddedList = document.createElement('ul');
    itemsAddedList.style.overflow = 'hidden';
    itemsAddedList.style.overflowY = 'scroll';
    itemsAddedList.classList.add('card', 'h-100', 'mb-0', 'mt-1');
    newTransfertDestinationCard.append(itemsAddedList);
    //! a générer : $li
}
