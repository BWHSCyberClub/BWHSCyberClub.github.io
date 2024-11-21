const title1 = "Cyber Club | Briar Woods High School";
const title2 = "The Best Club in BWHS";
const title3 = "Join Now!";
const title4 = "BWHS Cyber Club";
const title5 = "Lots of Competitions";
const title6 = "Participate and Enjoy!";
const title7 = "You might even Win!!"

document.title = title1;

//Title Code

function changeTitle() {
   switch (document.querySelector("title").innerHTML) {
    case title1: document.title = title2;
    break;
    case title2: document.title = title3;
    break;
    case title3: document.title = title4;
    break;
    case title4: document.title = title5;
    break;
    case title5: document.title = title6;
    break;
    case title6: document.title = title7;
    break;
    case title7: document.title = title1;
    break;
    default: location.reload();
   };
};

    setInterval(changeTitle, 5000)

   //Next Code on Animation
   // Fix This Code

   let start = Date.now(); // remember start time

   let timer = setInterval(function() {

     let timePassed = Date.now() - start;
   
     if (timePassed >= 0) {
       clearInterval(timer); // finish the animation after 2 seconds
       return;
     }
   
     // draw the animation at the moment timePassed
     draw(timePassed);
   
   }, 20);
   
   // as timePassed goes from 0 to 2000
   // left gets values from 0px to 400px
   function draw(timePassed) {
     train.style.left = timePassed / 5 + 'px';
   }
      
    function sidebarAnimationClose2() {
      if (pos == 0) {
          null
        } else {
          pos = pos - 20;
          elem.style.left = pos - 'px';
        };
    };

    let animationLeft = document.getElementById("sidebar").style.left

    function sidebarTimer() {setInterval(function() {
      if (animationLeft >= 0) clearInterval(sidebarTimer);
      else animationLeft++
    }, 20);
  };

  function sidebarAnimationOpen() {
    document.getElementById("sidebar").animate([
    {  left: -181  },
    {  left: 0}
    ], 1000)

    return;
};

function sidebarAnimationClose() {
  document.getElementByIde("sidebar").animate([
  {  left: 0  },
  {  left: -181}
  ], 1000)

};
