
/**
 * creates the title and the click event for redirection
 * @function generateDashboard()
 */
export function generateDashboard(){
    let dashboard = document.getElementById('dashboard');
    dashboard.classList.add('text-light', 'cardContainer');
    let dashboardCard = document.createElement('div');
    dashboardCard.classList.add('card', 'h-auto');
    dashboardCard.innerText='DASHBOARD';
    dashboard.append(dashboardCard);


};