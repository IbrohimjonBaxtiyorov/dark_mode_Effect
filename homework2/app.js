const elSlider = document.querySelector(".slider");
const elprev = document.getElementById("prev");
const elNext = document.getElementById("next");

function slide(action) {
    const sliderWitdth=elSlider.scrollWidth;
    const visebleWidth=elSlider.offsetWidth;
  if (action === "+") {
      if(elSlider.scrollLeft+visebleWidth>=sliderWitdth){
        elSlider.scrollLeft=0
      }else{
            elSlider.scrollBy({
            left: 300,
            behavior: "smooth",
          });
      }
   
   } else {
        if(elSlider.scrollLeft===0){
            elSlider.scrollLeft=sliderWitdth-visebleWidth;
            
        }else{
         elSlider.scrollBy({
         left: -400,
         behavior: "smooth",
      });
    }
  }
}

elNext.addEventListener("click", () => {
  slide("+");
});

elprev.addEventListener("click", () => {
  slide("-");
});
