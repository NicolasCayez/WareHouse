import { generateBreadCrumb } from "/scripts/breadcrumb";
import { generateDashboard } from "../../scripts/dashboard";

// link aspect change
let presentPageTitle = document.getElementById("headerMyWarehousesLink");
presentPageTitle.classList.remove('title');
presentPageTitle.classList.add('title-bold');

// breadcrumb
let breadCrumbLinks = [['home','/index.html'], ['My Warehouses','/pages/myWareHouses/myWareHouses.html']];
generateBreadCrumb(breadCrumbLinks);

generateDashboard();