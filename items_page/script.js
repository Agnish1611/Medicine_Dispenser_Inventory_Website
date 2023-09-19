document.querySelector("#btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector("table").classList.toggle("active");
    document.querySelector(".items-header").classList.toggle("active");
});