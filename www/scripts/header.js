
/**
 * creates the title and the click event for redirection
 * @function generateHeader()
 */
export function generateHeader(){
    let header = document.querySelector('header');
    header.classList.add('d-flex', 'py-2', 'bg-cstm-blue');

    // LOGO & TITLE
    let logoTitle = document.createElement('div');
    logoTitle.classList.add('d-inline-flex', 'col-2', 'title-bold', 'ms-2');
    header.append(logoTitle);
    let logo = document.createElement('img');
    logo.id = 'logo';
    logo.src = '/img/logo.png';
    logo.alt = 'Logo WareHouse';
    logo.classList.add('col');
    logoTitle.append(logo);
    // TITLE
    let title = document.createElement('a');
    title.id = 'headerTitle';
    title.href = '#';
    title.innerText = 'WareHouse';
    title.classList.add('my-auto', 'col', 'ms-2', 'fs-2', 'text-light');
    logoTitle.append(title);
    //CLICK on the LOGO and TITLE
    logoTitle.addEventListener('click', () => {
        window.location.href = ('/index.html');
    });

    //HOME
    let home = document.createElement('div');
    home.id = "headerHomeLink";
    home.classList.add('d-inline-flex', 'col-2', 'ms-auto', 'title');
    header.append(home);
    let homeLogo = document.createElement('img');
    homeLogo.src = '/img/home.png';
    homeLogo.alt = 'Logo WareHouse';
    homeLogo.classList.add('col', 'iconLG', 'my-auto');
    home.append(homeLogo);
    // TITLE
    let homeTitle = document.createElement('a');
    homeTitle.innerText = 'Home';
    homeTitle.href = '#';
    homeTitle.classList.add('my-auto', 'col', 'ms-2', 'fs-4', 'text-light');
    home.append(homeTitle);
    //CLICK on the LOGO and TITLE
    home.addEventListener('click', () => {
        window.location.href = ('/index.html');
    });
    
    //MY WAREHOUSES
    let myWarehouses = document.createElement('div');
    home.id = "headerMyWarehousesLink";
    myWarehouses.classList.add('d-inline-flex', 'col-2', 'title');
    header.append(myWarehouses);
    let myWarehousesLogo = document.createElement('img');
    myWarehousesLogo.src = '/img/home.png';
    myWarehousesLogo.alt = 'Logo WareHouse';
    myWarehousesLogo.classList.add('col', 'iconLG', 'my-auto');
    myWarehouses.append(myWarehousesLogo);
    // TITLE
    let myWarehousesTitle = document.createElement('a');
    myWarehousesTitle.href = '#';
    myWarehousesTitle.innerText = 'My WareHouses';
    myWarehousesTitle.classList.add('my-auto', 'col', 'ms-2', 'fs-4', 'text-light');
    myWarehouses.append(myWarehousesTitle);
    //CLICK on the LOGO and TITLE
    myWarehouses.addEventListener('click', () => {
        window.location.href = ('/pages/myWarehouses/myWarehouses.html');
    });
        
    //ACCOUNT
    let account = document.createElement('div');
    account.classList.add('d-inline-flex', 'col-2', 'title', 'fs-2', 'ms-auto', 'text-warning');
    account.innerText = 'ici gestion compte';
    header.append(account);
};
