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

    setInterval(changeTitle, 5000);
    
   //Pushing everything to the right code

   const b = document.querySelector('.body');
   const s = document.getElementById('sidebar');
   if (s.style.left == 0) {
      b.style.left = 200;
   } else {

   }

// Date Script
document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    const usabledate = d.toDateString();
    document.getElementById("current_date").innerHTML = "Today is " + usabledate;

    // Sidebar toggle logic
    const sidebar = document.getElementById('sidebar');
    const body = document.querySelector('.body');

    sidebar.addEventListener('mouseenter', function() {
        sidebar.style.left = '0';
        body.classList.add('sidebar-open');
    });

    sidebar.addEventListener('mouseleave', function() {
        sidebar.style.left = '-160px';
        body.classList.remove('sidebar-open');
    });
});