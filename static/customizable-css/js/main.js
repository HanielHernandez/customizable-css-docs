document.addEventListener("click", function ($event) {
    const parent =  $event.target.parentNode;   
    if($event.target.id == 'expandTrigger'){
        expandSidebar()
    }else{
        if(parent.id == 'expandTrigger') {
            expandSidebar()
        }
    }

    // nav toggler
    if ($event.target.classList.contains("nav-toggler")) {
            expandNavbar($event.target);
    }else{
        if(parent.classList.contains('nav-toggler')) {
            expandNavbar(parent);
        }
    }
    // if click on element with .modal-trigger open modal
    if($event.target.classList.contains('modal-trigger')){
        showModal($event.target);
    }else{
        // if elements does not contains class check if parent does.
        if(parent.classList.contains('modal-trigger')) {
            showModal(parent);
        }
    }
    
    // if click on element with .expandible-trigger expand
    if($event.target.classList.contains('expandible-trigger')){
        expandContent($event.target);
    }else{
        // if elements does not contains class check if parent does.
        if(parent.classList.contains('expandible-trigge')) {
            expandContent(parent);
        }
    }

});
 
function expandNavbar(element){
    let menuId = element.dataset.target;
    let menu = document.getElementById(menuId);
    let content = menu.getElementsByClassName("nav")[0];
    if (menu.style.height) {
        menu.style.height = null;
    } else {
        menu.style.height = content.scrollHeight + "px";
    }
}
function expandContent(element){
    const target = element.getAttribute("data-target");
    const expandible =  document.getElementById(target);
    const content = expandible.firstElementChild;
    expandible.style.display = 'block';
    if (expandible.style.height) {
        expandible.style.height = null;
        setTimeout(()=>{
            expandible.style.display = '';
        },300)
    } else {
        expandible.style.height = content.scrollHeight + "px";
    }
}
function expand(){
    const target = this.getAttribute("data-target");
    const expandible =  document.getElementById(target);
    const content = expandible.firstElementChild;
    expandible.style.display = 'block';
    if (expandible.style.height) {
        expandible.style.height = null;
        setTimeout(()=>{
            expandible.style.display = '';
        },300)
    } else {
        expandible.style.height = content.scrollHeight + "px";
    }
}


function expandSidebar(){
    const sidebar  =  document.getElementById('sidebarContainer');
    if(sidebar.classList.contains('expanded'))
    {
        sidebar.classList.remove('expanded')
    }else{
        sidebar.classList.add('expanded');
    }
}



function showModal(trigger){
    const target = document.getElementById(trigger.dataset.target);
    console.log(target)
    if(target.style.display =="none" || target.style.display === ''){
        target.style.display = "block";
        setTimeout(()=>{
            target.classList.add('show');
        },100)
    }else{
        if(target.classList.contains('modal-animated')){
            target.classList.remove('show');
            setTimeout(()=>{
                target.style.display = "none";
            },300)
        }else{
            target.classList.remove('show');
            target.style.display = "none";
        }
    }
}

/*
const modalTriggers =  document.getElementsByClassName('modal-trigger');

for (var i = 0; i < modalTriggers.length; i++) {
    modalTriggers[i].addEventListener('click', showModal);
}*/
