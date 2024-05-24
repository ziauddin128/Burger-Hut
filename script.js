//small screen menu show and hide
var hamburger_btn = document.querySelector("#hamburger_btn");
var nav_close = document.querySelector("#nav_close");
var menu_bar = document.querySelector("#menu_bar");

hamburger_btn.addEventListener("click", ()=>{
    menu_bar.classList.remove("hidden");
})

nav_close.addEventListener("click", ()=>{
    menu_bar.classList.add("hidden");
})

//on click menu link, menu bar hide
var nav_link = document.querySelectorAll(".nav_link");
nav_link.forEach((elem) =>{
    elem.addEventListener("click", ()=>{
        menu_bar.classList.remove("hidden");
    })
})


//menu filter 
var menu_links = document.querySelectorAll(".menu_ul > li");
var food_box = document.querySelectorAll(".food_box");

function manage_menu(attr)
{
    if(attr === "All")
    {
        food_box.forEach(function(item) {
            item.style.display = "grid";
        });
    }
    else 
    {
        food_box.forEach(function(elem)
        {
            var box_attr = elem.getAttribute("data-food-box");
            if(box_attr == attr)
            {
                elem.style.display = "grid";
            }
            else 
            {
                elem.style.display = "none";
            }
        }) 
    }
}
manage_menu(0);

menu_links.forEach(function(elem)
{
    elem.addEventListener("click", function()
    {
        menu_links.forEach(function(item) {
            item.classList.remove("active");
        });

        elem.classList.add("active");
        var menu_attr = elem.getAttribute("data-menu-btn");

        manage_menu(menu_attr);

    })
})

//scroll to top
var to_top = document.querySelector("#to_top");
to_top.addEventListener("click", function()
{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

})



