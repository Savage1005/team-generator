const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = []


//start of teambuilding, manager prompt
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


//prompt to add new team members

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

    //prompt for engineer

    function engineerPrompt(){
        inquirer.prompt([{
            type: "input",
            message: "What is the Employee name?",
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

    //prompt for intern

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

//rendering the team

function renderTeam(){
    fs.writeFile(outputPath, render(team), function(err){
        if (err){
        return console.log(err)}
         console.log("Success!")});
        }


    teamBuild(); 
    



