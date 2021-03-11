const generatePage = require('./lib/page-template');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js')
const Engineer = require('./lib/Engineer.js')
const fs = require('fs');
const inquirer = require('inquirer');

var managerObj = {};
var internObj = {};
var engineerObj = {};

function mgrQuestions() {
     inquirer
          .prompt({
               type: 'text',
               name: 'mgrName',
               message: "What is the team manager's name?"
          })
          .then(({ mgrName }) => {
               //console.log("your name is " + mgrName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'mgrID',
                         message: "What is the team manager's employee ID?"
                    })
                    .then(({ mgrID }) => {
                         //console.log("manager ID is " + mgrID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'mgrEmail',
                                   message: "What is the team manager's email address?"
                              })
                              .then(({ mgrEmail }) => {
                                   //console.log("manager email is " + mgrEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'mgrOffice',
                                             message: "What is the team manager's office number?"
                                        })
                                        .then(({ mgrOffice }) => {
                                             //console.log("manager office # is " + mgrOffice);
                                             managerObj = new Manager(mgrName, mgrID, mgrEmail, mgrOffice);
                                             nextSelection();
                                        })
                              })
                    })

          });
};

function internQuestions() {
     inquirer
          .prompt({
               type: 'text',
               name: 'intName',
               message: "What is the intern's name?"
          })
          .then(({ intName }) => {
               //console.log("your interns name is " + intName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'intID',
                         message: "What is the intern's employee ID?"
                    })
                    .then(({ intID }) => {
                         //console.log("intern ID is " + intID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'intEmail',
                                   message: "What is the intern's email address?"
                              })
                              .then(({ intEmail }) => {
                                   //console.log("intern's email is " + intEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'intSchool',
                                             message: "What is the intern's school"
                                        })
                                        .then(({ intSchool }) => {
                                             //console.log("intern's school is " + intSchool);
                                             internObj = new Intern(intName, intID, intEmail, intSchool);
                                             nextSelection();
                                        })
                              })

                    })
          })

};

function engQuestions() {
     inquirer
          .prompt({
               type: 'text',
               name: 'engName',
               message: "What is the engineer's name?"
          })
          .then(({ engName }) => {
               //console.log("your engineer's name is " + engName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'engID',
                         message: "What is the engineer's employee ID?"
                    })
                    .then(({ engID }) => {
                         //console.log("intern ID is " + engID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'engEmail',
                                   message: "What is the engineer's email address?"
                              })
                              .then(({ engEmail }) => {
                                   //console.log("engineer's email is " + engEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'engGithub',
                                             message: "What is the engineer's Github username?"
                                        })
                                        .then(({ engGithub }) => {
                                             //console.log("engineer's gitgub is  " + engGithub);
                                             engineerObj = new Engineer(engName, engID, engEmail, engGithub);
                                             nextSelection();
                                        })
                              })

                    })
          })
};

function nextSelection() {
     inquirer
          .prompt({
               type: 'list',
               message: 'Would you like to add more team members?',
               name: 'selection',
               choices: ['Add engineer', 'Add intern', 'Finish']
          })
          .then(({ selection }) => {
               if (selection === 'Add engineer') {
                    //console.log('you chose add eng');
                    engQuestions();
               } else if (selection === 'Add intern') {
                    //console.log('you chose add intern');
                    internQuestions();
               } else {
                    //console.log('finishing');
                    makePage();
               }
          })
};


function makePage() {
     fs.writeFile('index.html', generatePage(managerObj, internObj, engineerObj), err => {
          if (err) throw err;

          console.log('Team page complete! Check out index.html to see the output!');
     });
};



mgrQuestions()
