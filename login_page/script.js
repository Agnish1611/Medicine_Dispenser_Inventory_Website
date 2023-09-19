document.querySelector(".header .button").addEventListener("click",function(){
    document.querySelector(".home").classList.add("show");
});

document.querySelectorAll(".pw-hide").forEach(function(icon){
    icon.addEventListener("click",function(){
        let getPwInput = icon.parentElement.querySelector("input");
        if(getPwInput.type === "password")
        {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        }
        else
        {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

document.querySelector("#signup").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".form-container").classList.add("active");
});

document.querySelector("#login").addEventListener("click",function(event){
    event.preventDefault();
    document.querySelector(".form-container").classList.remove("active");
});
