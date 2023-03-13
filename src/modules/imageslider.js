import image1 from "./sliderimages/IMG-1.jpg";
import image2 from "./sliderimages/IMG-2.jpg";
import image3 from "./sliderimages/IMG-3.jpg";

const imageSlider = (() => {
  function loopImages() {
    const centercontainer = document.querySelector(".centercontainer");
    const firstImage = document.createElement("img")
    firstImage.src = image1
    const secondImage = document.createElement("img")
    secondImage.src = image2
    centercontainer.setAttribute("style", "background-image: url()")
  }
  function sliderChanges() {
    
    loopImages(centercontainer)
  }
  return { sliderChanges };
})();

export default imageSlider;
