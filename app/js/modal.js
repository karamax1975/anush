window.onload = function(){
    
    let modalWindow = document.querySelector('.modal--window');
    let modalClose=document.querySelector('.modal--close');
    let modalBtn=document.querySelectorAll('.modal--btn');
    
    for(let i=0;i<modalBtn.length; i++){
        modalBtn[i].addEventListener("click", function(event){
            modalWindow.style.display="flex";

            modalClose.addEventListener("click",function(event){
                if(event.target.className=="modal--close");
                modalWindow.style.display="none";
            })
        })
    }


}