document.querySelector("#btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector("table").classList.toggle("active");
    document.querySelector(".items-header").classList.toggle("active");
});

document.querySelector(".new-btn").addEventListener("click",function(){
    document.querySelector(".form-container").classList.add("show");
    document.querySelector(".items-list").classList.add("active");
    document.querySelector("body").classList.add("active");
});

document.querySelector("#form-close").addEventListener("click",function(){
    document.querySelector(".form-container").classList.remove("show");
    document.querySelector("body").classList.remove("active");
    document.querySelector(".items-list").classList.remove("active");
});

document.querySelector("#form-enter").addEventListener("click",function(){
    document.querySelector(".form-container").classList.remove("show");
    document.querySelector("body").classList.remove("active");
    document.querySelector(".items-list").classList.remove("active");
    addTableRow();
}); 


