let toggleMenu = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');


toggleMenu.onclick = function(){
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')

}

navigation.addEventListener('click',function(){
    navigation.classList.remove('active')
    toggleMenu.classList.toggle('active')
})