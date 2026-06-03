// add footer using DOM manipulation
// create the footer element 
const today = new Date();
const thisYear = today.getFullYear();
const footer = document.createElement('footer');
const copyright = document.createElement('p');

copyright.innerHTML =`&copy; ${thisYear} Karla Flores`;

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

// Handle Message Form Submit
//let messageForm = document.querySelector('form'); 
const messageForm = document.querySelector('form[name="leave_message"]');


// 2. Add the submit event listener
messageForm.addEventListener('submit', (event) => {
    // Prevent the default form submission (stops page refresh)
    event.preventDefault();

    // 3. Create three variables to retrieve values from the form fields
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log the variables to the console
    console.log(`${usersName} ${usersEmail} ${usersMessage}`)

    // Create a variable named messageSection and use "DOM Selection" to select the #messages section by id
    const messageSection = document.getElementById('messages');
    const messageList = messageSection.querySelector('ul');
    // Create a variable named newMessage that makes a new list item (li) element
    const newMessage = document.createElement('li');

    //start here down -set the inner HTML of your newMessage - <a> element that displays the "usersName" and is a clickable link to the "usersEmail" (hint: use the mailto: prefix)
    // <span> element that displays the "usersMessage"
    newMessage.innerHTML = `<a href="mailto:${usersEmail}">${usersName}</a><span>${usersMessage}</span>`;

    // create a variable called removeButton that makes a new <button> element
    const removeButton = document.createElement('button');

    // set the inner text to 'remove'
    removeButton.textContent = 'remove';

    // set the type attribute to 'button'
    removeButton.type = 'button';

    // add an event listener to the removeButton element that handles the 'click' event
    removeButton.addEventListener('click', function(){

        // create a variable named 'entry' that finds the buttons parent
        // element uding DOM
        const entry = this.parentNode;
        entry.remove();
    });
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    // reset the form
    messageForm.reset();

});
// Use the Fetch API to create a 'GET' request
//const username = 'Karla1981';
 //select section
 const projectSection = document.getElementById('Projects');

    // Send request to github
    fetch('https://api.github.com/users/Karla1981/repos')
    .then((response) =>{
    
        // check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        // return the raw text
            return response.text();//response.json()

        }).then((responseText) => {
            
            // Parse the response 

            const repositories = JSON.parse(responseText);
            // console log the repositories
            console.log(repositories);

            // Select ul inside the section
            const projectList = projectSection.querySelector('ul');

            // loop throu projects
            for (let i=0; i < repositories.length; i++){
                const project = document.createElement('li');
                project.innerText = repositories[i].name;
                 // append items to the project list
                projectList.appendChild(project);
            }

        })
        .catch((error) => {
            console.log('Failed to fetch the Git repos', error);

            // create an error message on the page
            const errorMessage = document.createElement('p');
            errorMessage.textContent = 'Oops! we encountered an issue loading the repositories. Please try again later.';

            // append error message to the project section
            projectSection.appendChild(errorMessage);

        });