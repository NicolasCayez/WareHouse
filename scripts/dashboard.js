import { createCard, createCardTitle } from "./cards";

/****************************************************************
 *  * Generates a level 1 menu section
 * @function createMenulvl1(menuId)
 * @param {menuId} - Id of the section 
 ****************************************************************/
function createMenulvl1(menuId){
    let container = document.getElementById('dashboardCard');
    let menulvl1 = document.createElement('div');
    menulvl1.classList.add('row', 'mt-3');
    menulvl1.id = menuId;
    container.append(menulvl1);
}

/****************************************************************
 * Generates a link depending on the level
 * @function createLinkByLvl(parentId,linkId,linkName,url,linklvl,collapsible)
 * @param {parentId} - Id of the parent element 
 * @param {linkId} - Id of the new link 
 * @param {linkName} - Name of the new link 
 * @param {url} - url of the new link 
 * @param {linklvl} - 1, 2 or 3 
 * @param {collapsible} - boolean 
 ****************************************************************/
function createLinkByLvl(parentId, linkId, linkName, url, linklvl, collapsible = false){
    let container = document.getElementById(parentId);

    let line = document.createElement('div');
    line.id = linkId + 'Group';
    line.classList.add('menuLvl' + linklvl, 'menu')
    container.append(line);
    let iconLink = document.createElement('a');
    iconLink.id = linkId + 'icon';
    iconLink.href = ``;
    iconLink.setAttribute('collapsible', collapsible)
    iconLink.classList.add('fs-5', 'linkIcon', 'text-light');
    iconLink.innerText = '> ';
    line.append(iconLink);

    let link = document.createElement('a');
    link.id = linkId;
    link.classList.add('title', 'text-light', 'mt-2', 'ms-3');
    link.innerText = linkName;
    link.href = url;
    if(collapsible == false){
        iconLink.classList.add('cstm-blue');
        if(linklvl == 1){
            iconLink.classList.remove('text-light');
        }if(linklvl == 2){
            iconLink.classList.remove('text-light');
        }if(linklvl == 3){
            iconLink.classList.remove('text-light');
        }
    }
    line.append(link);
}


export function refreshDashboard(){
    let menuList = document.getElementsByClassName('menu');
    if(menuList != null){
        //pour chaque élément qui peut être réduit
        let menuListArrayTemp = Array.from(menuList);
        let menuListArray = [];
        for(let i=0; i<menuListArrayTemp.length; i++){
            if(menuListArrayTemp[i].children[0].attributes.collapsible.value == 'true'){
                menuListArray.push(menuListArrayTemp[i])
            }
        };
        for(let j=0; j<menuListArray.length; j++){
            //récupération des enfants
            let childrenTemp = Array.from(menuListArray[j].children);
            let children = [];
            for(let k=0; k<childrenTemp.length; k++){
                if(childrenTemp[k].tagName == "DIV"){
                    children.push(childrenTemp[k]);
                }
            }
            //initialisation local storage
            let group = menuListArray[j];
            // nouvel enregistrement
            if(localStorage.getItem(group.id + 'collapsed') == '' || localStorage.getItem(group.id + 'collapsed') == null){
                localStorage.setItem(group.id + 'collapsed', true);
            }
            if(localStorage.getItem(group.id + 'collapsed') == 'true'){
                //si groupe réduit
                document.getElementById(group.childNodes[0].id).innerText = '> ';
                children.forEach(element => {
                    element.style.display = 'none';
                });
            }else{
                //si groupe pas réduit
                document.getElementById(group.childNodes[0].id).innerText = 'v ';
                children.forEach(element => {
                    element.style.display = 'block';
                });
            }

            //clic sur icone
            group.firstChild.addEventListener('click', () =>{
                if(localStorage.getItem(group.id + 'collapsed') == 'true'){
                    //si groupe réduit
                    document.getElementById(group.childNodes[0].id).innerText = '> ';
                    children.forEach(element => {
                        element.style.display = 'none';
                    });
                    localStorage.setItem(group.id + 'collapsed', false)
                }else{
                    //si groupe réduit
                    document.getElementById(group.childNodes[0].id).innerText = 'v ';
                    children.forEach(element => {
                        element.style.display = 'block';
                    });
                    localStorage.setItem(group.id + 'collapsed', true)
                }
                refreshDashboard();
            })
        };
    }
}













/****************************************************************
 * creates the title and the click event for redirection
 * @function generateDashboard()
 ****************************************************************/
export function generateDashboard(){
    //container reference & style
    let dashboard = document.getElementById('dashboard');
    if(dashboard != null){
        dashboard.id = 'dashboard';
        dashboard.classList.add('text-light', 'cardContainer');
        //card in the container
        createCard('dashboard', 'dashboardCard');
        // Title
        createCardTitle('dashboardCard', 'dashboardTitle', 'Dashboard');
        //***LINKS***
        //? SECTION - My Warehouses
        createMenulvl1('menuMyWarehouses');
        createLinkByLvl('menuMyWarehouses', 'linkMyWarehouses', 'My Warehouses', '/pages/myWarehouses/myWarehouses.html', 1, true);
        // --> New WareHouse
        createLinkByLvl('linkMyWarehouses'+'Group', 'linkNewWarehouses', 'New Warehouses', '/pages/myWarehouses/myWarehouses.html', 2, false);
        //!A AUTOMATISER, POUR LE MOMENT EN DUR */
        // --> Warehouse 2
        createLinkByLvl('linkMyWarehouses'+'Group', 'linkWarehouse2', 'Warehouse 2', '/pages/myWarehouses/myWarehouses.html', 2, false);
        //!
        //? SECTION - Items
        createMenulvl1('menuItems');
        createLinkByLvl('menuItems', 'linkItems', 'Items', '/pages/myWarehouses/myWarehouses.html', 1, false);
        //? SECTION - Transactions
        createMenulvl1('menuTransactions');
        createLinkByLvl('menuTransactions', 'linkTransactions', 'Transactions', '/pages/myWarehouses/myWarehouses.html', 1, true);
        // --> Receptions
        createLinkByLvl('linkTransactions'+'Group', 'linkReceptions', 'Receptions', '/pages/myWarehouses/myWarehouses.html', 2, false);
        // --> Transferts
        createLinkByLvl('linkTransactions'+'Group', 'linkTransferts', 'Transferts', '/pages/myWarehouses/myWarehouses.html', 2, true);
        // --> --> New Transfert
        createLinkByLvl('linkTransferts'+'Group', 'linkNewTransfert', 'New transfert', '/pages/myWarehouses/myWarehouses.html', 3, false);
        // --> Stock modif
        createLinkByLvl('linkTransactions'+'Group', 'linkStockModif', 'Stock modifications', '/pages/myWarehouses/myWarehouses.html', 2, false);
        // --> Inventrories
        createLinkByLvl('linkTransactions'+'Group', 'linkInventrories', 'Inventrories', '/pages/myWarehouses/myWarehouses.html', 2, true);
        // --> --> New Inventory
        createLinkByLvl('linkInventrories'+'Group', 'linkNewInventory', 'New inventory', '/pages/myWarehouses/myWarehouses.html', 3, false);
        //? SECTION - Reports
        createMenulvl1('menuReports');
        createLinkByLvl('menuReports', 'linkReports', 'Reports', '/pages/myWarehouses/myWarehouses.html', 1, false);
        
        //? dernier lien en bas logOut/logAs
        createMenulvl1('logOutLogAs');
        let logOutLogAs = document.getElementById('logOutLogAs');
        let logOutLogAsLink = document.createElement('a');
        logOutLogAsLink.id = 'logOutLogAsLink';
        logOutLogAsLink.classList.add('title-bold', 'text-light', 'mb-2', 'ms-3', 'fs-6');
        logOutLogAsLink.innerText = 'log Out / Log As';
        logOutLogAsLink.href = '/pages/myWarehouses/myWarehouses.html';
        logOutLogAs.append(logOutLogAsLink);
        logOutLogAs.style.position = 'absolute';
        logOutLogAs.style.bottom = '0';
        logOutLogAs.style.left = '0';
    }
};