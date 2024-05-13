
const dropDownMenu=document.querySelector('.sidebar-back')
const toggleBtn=document.querySelector('.menu')
const toggleBtnIcon=document.querySelector('.menu i')

        toggleBtn.onclick=function(){
            dropDownMenu.classList.toggle('active')
            const isOpen=dropDownMenu.classList.contains('active')

            toggleBtnIcon.classList=isOpen
            ? 'fa-solid fa-xmark'
            :"fa-solid fa-bars"

        }