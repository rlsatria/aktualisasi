const topmenu = document.querySelector("#topmenu");
const topmenua = document.querySelector("#topmenu a");
const navmenuli = document.querySelectorAll(".nav_menu li");
const introduction = document.querySelector(".introduction");
introPosition = offset(introduction)
const historyy = document.querySelector(".history");
historyyPosition = offset(historyy)


const options = {
    rootMargin: "-5% 0px 0px 0px"
};
const introductionObeserver = new IntersectionObserver(function(entries, introductionObeserver) {entries.forEach(entry => {
    if(!entry.isIntersecting){
        topmenu.setAttribute("style", "background-color: black");
        topmenua.setAttribute("style", "color: white");
        for (let i = 0; i < navmenuli.length; i++) {
            navmenuli[i].setAttribute("style", "color: white");
        }   
    } else {
        topmenu.setAttribute("style", "background-color: transparent");
    } 
    console.log(entry)
})}, options);

introductionObeserver.observe(introduction)





window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    
    console.log(scroll)
    
    console.log(historyyPosition.top)
    console.log(introPosition.top)
});

function offset(el) {
    var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}


function asidebutton(){
            
    var elem = document.getElementById("asidee"),
    style = window.getComputedStyle(elem),
    width = style.getPropertyValue("width");

    if(width == "0px"){
        elem.style.width = "260px";
    }else{
    elem.style.width = "0px";
    }

}


/*const cultureObeserver = new IntersectionObserver(function(entries1, cultureObeserver) {entries1.forEach(entry1 => {
    if(!entry1.isIntersecting){
        topmenu.setAttribute("style", "background-color: white");
        topmenua.setAttribute("style", "color: black");
    } else {
        topmenu.setAttribute("style", "background-color: black");
        topmenua.setAttribute("style", "color: white");
    }
})}, options);

cultureObeserver.observe(culture)*/





