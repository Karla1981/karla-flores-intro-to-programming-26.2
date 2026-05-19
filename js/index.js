// add footer using DOM manipulation
// create the footer element 
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML =`Karla &copy; ${thisYear}`;

footer.appendChild(copyright);
document.body.appendChild(footer);


// List your technical skills by creating an Array of String values 
// and store it in a variable named skills. 
const skills = ["JavaScript", "HTML", "CSS", "GitHub"];

// Create a variable named skillsSection and 
// use "DOM Selection" to select the skills section by id
const skillsSection = document.getElementById('skills'); 

// Create a variable named skillsList and
// use "DOM Selection" to query the skillsSection

const skillsList = skillsSection.querySelector('ul');

// create a for loop to iterate over your 'skills' array
for (let i = 0; i < skills.length; i++){
    // create new list array
    const skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}