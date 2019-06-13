// window.onload =function(){
//     let tabsBullit=document.querySelectorAll('.tabs--bullit');
//     let questions=document.querySelectorAll('.questions');
//     let reply = document.querySelectorAll('.reply');
//     let bullit = document.querySelectorAll('.bullit');
//     for(let i=0; i<tabsBullit.length; i++){

//         tabsBullit[i].addEventListener('click',function(event){
//             if(event.target.className=="bullit hiden" || event.target.className=="questions inert"){
//                 for(let j=0;j<reply.length;j++){
//                     reply[j].style.display="none";
//                     bullit[j].classList.remove("read");
//                     bullit[j].classList.add("hiden");
//                     questions[j].classList.remove("activ");
//                     questions[j].classList.add("inert");


//                 }
//                 reply[i].style.display="block";
//                 bullit[i].classList.remove("hiden");
//                 bullit[i].classList.add("read");
//                 questions[i].classList.remove("inert");
//                 questions[i].classList.add("activ"); 
//             }


//         })
//     }
// }
window.onload = function () {
    let tabsBullit = document.querySelectorAll('.tabs--bullit');
    let questions = document.querySelectorAll('.questions');
    let bullit = document.querySelectorAll('.bullit');
    let reply = document.querySelectorAll('.reply');

    for (let i = 0; i < tabsBullit.length; i++) {
        tabsBullit[i].addEventListener("click", function (event) {

            setTimeout(function () {
                if (event.target.className == "questions" || event.target.className == "bullit hiden") {
                    for(let j=0; j<tabsBullit.length;j++){
                        console.log(555);
                        reply[j].style.display = "none";
                        questions[j].classList.remove("flag");
                        bullit[j].classList.remove("read");
                        bullit[j].classList.add("hiden");
                    }
                    reply[i].style.display = "block";
                    questions[i].classList.add("flag");
                    bullit[i].classList.remove("hiden");
                    bullit[i].classList.add("read");
                }
                else {
                    reply[i].style.display = "none";
                    questions[i].classList.remove("flag");
                    bullit[i].classList.remove("read");
                    bullit[i].classList.add("hiden");
                }
            }, 100)


        })
    }


}