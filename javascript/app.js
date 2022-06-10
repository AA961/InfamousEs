let toggleMenu = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
alert("Need Rusher For Squad Contact Any Team Member From Website")


toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')

}

navigation.addEventListener('click',function(){
    navigation.classList.remove('active')
    toggleMenu.classList.remove('active')
})