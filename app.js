// Define arrays containing the different parts of the intro
const welcome = [
    "Welcome to the electrifying intersection of electrical engineering and computing technology!",
    "Are you ready to discover what happens when electrical engineering and computing technology combine?",
    "Welcome to my world, where sparks fly and circuits come to life.",
    "Enter the exciting world of electrical engineering and computing technology, where innovation knows no bounds."
  ];
  
  const intro = [
    "As a 2nd year student in this exciting field, I'm constantly amazed by the limitless possibilities of combining hardware and software to create innovative solutions.",
    "This field is a playground for the curious minds, constantly pushing the limits of what's possible.",
    "With a burning passion for technology and a relentless desire to explore the unknown, I've embarked on a journey to make a difference.",
    "As someone who's constantly amazed by the power of combining hardware and software to create groundbreaking solutions, I've honed my skills to bring a unique perspective to this field."
  ];
  
  const projects = [
    "On my professional website, you'll discover the intriguing projects I've been working on, from designing intelligent systems to developing cutting-edge technologies that can change the way we live.",
    "You'll see how combining hardware and software can create innovative solutions that can change the world.",
    "From the fascinating ideas that keep me up at night to the innovative solutions that are changing the world, you'll see how combining the power of hardware and software can truly make a difference."
  ];
  
  const callToAction = [
    "Whether you're a fellow student, a potential employer, or simply curious about what's possible in this field, I invite you to join me on this electrifying journey of discovery.",
    "So fasten your seatbelt and get ready to explore the limitless potential of electrical engineering and computing technology with me!",
    "Join me on this thrilling ride and discover the exciting world of electrical engineering and computing technology for yourself!"
  ];
  
  // Define a function that generates a random intro using the phrases
  function generateIntro() {
    const randomWelcome = welcome[Math.floor(Math.random() * welcome.length)];
    const randomIntro = intro[Math.floor(Math.random() * intro.length)];
    const randomProjects = projects[Math.floor(Math.random() * projects.length)];
    const randomCallToAction = callToAction[Math.floor(Math.random() * callToAction.length)];
    const introText = `${randomWelcome} ${randomIntro} ${randomProjects} ${randomCallToAction}`;
    return introText;
  }
  
const myString = generateIntro();
const messages = myString.split(".");

isVisible = false;

const element = document.getElementById("typing-animation");

let currentMessage = 0;
let i = 0;
let isDeleting = false;
function typeWriter() {
  const message = messages[currentMessage];
  if (!isDeleting && i <= message.length) {
        if(isVisible) {
            element.innerHTML = message.substring(0, i);
            i++;
            setTimeout(typeWriter, 40);
        }
        else { return; }
  } else if (isDeleting && i >= 0) {
        if(isVisible) {
            element.innerHTML = message.substring(0, i);
            i--;
            setTimeout(typeWriter, 20);
        }
        else { return; }
  } else {
    isDeleting = !isDeleting;
    if (isDeleting) {
        if(isVisible) {
            setTimeout(typeWriter, 1200);
        }
        else { return; }
    } else {
        if(isVisible) {
            currentMessage = (currentMessage + 1) % messages.length;
            i = 0;
            setTimeout(typeWriter, 200);
        }
        else { return; }
    }
  }
}

// Get the element you want to check for visibility
const target = document.querySelector('#about');

// Create a new Intersection Observer object
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        isVisible =true;
      // Execute your function here
      console.log('Element is visible!');
      typeWriter();
    }
    else {
        isVisible = false;
        console.log('Element is not visible');
    }
  });
});

// Start observing the target element
observer.observe(target);

// Select all elements with the "status" class
const statusElements = document.querySelectorAll('.status');

// Loop through each element and check its text
statusElements.forEach(element => {
  const text = element.textContent.trim().toLowerCase();
  
  // If the text is "ongoing", add the "ongoing" and "highlight" classes
  if (text === 'ongoing') {
    element.classList.add('btn', 'btn-warning');
  }
  // Otherwise, add the "completed" class
  else {
    element.classList.add('btn', 'btn-success');
  }
});

// Show or hide the scroll-to-top button depending on the scroll position
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("scroll-to-top-btn").style.display = "block";
  } else {
      document.getElementById("scroll-to-top-btn").style.display = "none";
  }
}

// Scroll to the top of the page when the scroll-to-top button is clicked
document.getElementById("scroll-to-top-btn").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});


const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.copyright');
copyrightElement.textContent += ' ' + currentYear;
