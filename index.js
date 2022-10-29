function toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

function changeIcon(){
    var span = document.getElementsByid('menuBottom');
    span.innerText = "close";

}