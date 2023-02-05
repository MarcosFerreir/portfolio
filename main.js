const title = document.querySelector('.title');
title.innerHTML = title.textContent.replace(/\S/g,"<span>$&</span>");
const element = document.querySelectorAll('span');
for(let i = 0; i<element.length; i++){
    element[i].style.transform = "rotate("+i*22.5+"deg)"
}
document.addEventListener("mousemove", function(e){
    title.style.left = e.pageX + 'px';
    title.style.top = e.pageY + 'px';
    
    
})
