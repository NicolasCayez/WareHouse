
/**
 * creates the breadCrumb content and links
 * @function generateBreadCrumb(breadCrumbLinks)
 * @param {breadCrumbLinks} - array nesting arrays [name, url] for each breadcrumb element
 */
export function generateBreadCrumb(breadCrumbLinks){
    let breadCrumb = document.getElementById('breadCrumb');
    breadCrumb.classList.add('cstm-lightBlue', 'text-light', 'px-2', 'pt-3', 'g-0');
    // creating the breadCrumb LIST
    let breadCrumbList = document.createElement('ol');
    breadCrumbList.classList.add('breadcrumb', 'mb-0');
    breadCrumb.setAttribute('style', "--bs-breadcrumb-divider: '';")
    // creating the breadCrumb TITLE
    let breadCrumbTitle = document.createElement('p');
    breadCrumbTitle.classList.add('title-bold', 'me-5');
    breadCrumbTitle.innerText = 'You are here :';
    breadCrumbList.append(breadCrumbTitle);
    //creating the breadCrumb ELEMENTS
    for(let i=0; i<breadCrumbLinks.length; i++){
        let $li = document.createElement('li');
        $li.classList.add('breadcrumb-item');
        let separator = '';
        if(i>0){
            separator = ' > ';
        }
        if(i!=breadCrumbLinks.length-1){
            //not last element
            let breadCrumbElement = document.createElement('a');
            breadCrumbElement.classList.add('title-bold', 'text-light');
            breadCrumbElement.innerText = separator + breadCrumbLinks[i][0];
            breadCrumbElement.href = breadCrumbLinks[i][1];
            $li.append(breadCrumbElement);
        }else{
            //last element
            $li.classList.add('active', 'title', 'text-light');
            $li.setAttribute('aria-current', 'page');
            $li.innerText = separator + breadCrumbLinks[i][0];
        }
        breadCrumbList.append($li);
    }
    breadCrumb.append(breadCrumbList);

};
