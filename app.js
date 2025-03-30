let darkmode=localStorage.getItem('darkmode');
const themeSwitch=document.querySelector('.btn');

const enableDark=()=>{
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode','active')
};

const disabledark=()=>{
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode')
}
if(darkmode === "active"){
    enableDark()
}else{
    disabledark()
}
themeSwitch.addEventListener('click', ()=>{
    darkmode=localStorage.getItem('darkmode')
    if(darkmode !=='active'){
        enableDark()
    }else{
        disabledark()
    }
})