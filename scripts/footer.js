/**
 * creates the date of the day
 */
export function generateFooter(){
    let footer = document.querySelector('footer');
    footer.classList.add('cstm-blue', 'py-1', 'text-center');
    // legal Notices link
    let LegalNotices = document.createElement('a');
    LegalNotices.id = 'LegalNotices';
    LegalNotices.innerText = 'Legal Notices';
    LegalNotices.classList.add('mx-auto', 'my-1', 'col-1', 'fs-5', 'text-light');
    footer.append(LegalNotices);
};