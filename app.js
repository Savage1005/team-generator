const Manager = require("./lib/Manager").default;
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = []

function teamBuild() {
  inquirer.prompt([
    {
        type : "input",
        message : "What is the name of the team's manager?",
        name : "name",
    },
    {   
        type : "input",
        message : "What is the manager's employee id number?",
        name : "id",
    },
    {   
        type :"input",
        message : "What is the manager's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
    },
  ])

  .then(function(answers){
   const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
   team.push(manager);
   addNewMember()
})}

 function addNewMember(){
    inquirer.prompt ([{
        type: "list",
        message: "Would you like to add an Employee?",
        choices: ["Engineer", "Intern", "No More"],
        name: "role"
        },
    ])
    .then(function(answers){
        if (answers.role === "Engineer"){
            engineerPrompt();}
        else if (answers.role === "Intern"){
            internPrompt();}
        else {
            renderTeam();
        }
        })
        
    };

    function engineerPrompt(){
        inquirer.prompt([{
            type: "input",
            message: "What is the name?",
            name: "name"
        },
        {
            type: "input",
            message: "Id number?",
            name: "id",
        },
        {   
            type: "input",
            message: "What is the email address?",
            name: "email",
        },
        {
            type: "input",
            message: "What is the github?",
            name: "github",
        },])
        .then (function(answers){
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            team.push(engineer);
            addNewMember()
        })
    };

function internPrompt(){
    inquirer.prompt([
        {
        type: "input",
        message: "What is the employee name?",
        name: "name"
    },
    {
        type: "input",
        message: "Id number?",
        name: "id",
    },
    {   
        type: "input",
        message: "What is the email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What school did the employee attend?",
        name: "school",
    },])
    .then (function(answers){
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        addNewMember()
    })
    
};

function renderTeam(){
    i

}



  teamBuild(); 
    
//     
// ])
// .then(function(answers){
//     console.log(answers)})
//     var newEmployee = new Employee(answers.name, answers.id, answers.email);
//     if (answers.role === "Manager") {
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your office number?",
//                 name: "officeNumber"
//             },
//         ])
//             .then (function(managerData){
//             var newManager =new Manager(answers.name, answers.id, answers.email, managerData.officeNumber)
//             })

//         }
//     else if (answers.role === "Engineer"){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What is your github username?",
//                 name: "github"
//             },
//         ])
//         .then (function(engineerData){
//             var newEngineer = new Engineer(answers.name, answers.id, answers.email, engineerData.github)
//         })
//     }
//     else if (answers.role === "Intern"){
//         inquirer.prompt([
//             {
//                 type: "input",
//                 message: "What school are you attending?",
//                 name: "school"
//             },
//         ])
//             .then (function(internData){
//                 var newIntern = new Intern(answers.name, answers.id, answers.email, internData.school)
//             })

    
//     }
// }



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 
