addEventListener("load",function(){
    (function() {
        let tabs = document.querySelectorAll(".tabs--button");
        let tabsContent = document.querySelectorAll(".tabs--content");
    
    for(let i=0; i<tabs.length; i++){
        
        tabs[i].addEventListener("click",function(){
            if(event.target.className=="tabs--button"){
                
                for(let j=0;j<tabsContent.length; j++){
                    tabsContent[j].classList.remove("read");
                    tabsContent[j].classList.add("hiden");
                    tabs[j].classList.remove("click");
                    
                }
                tabsContent[i].classList.add("read");
                event.target.classList.add("click");             
            }
                

        })
    }
      }());
    
})
