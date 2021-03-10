//const Manager = require('../lib/Manager.js')

const inquirer = require('inquirer');

function mgrQuestions() {
     inquirer
          .prompt({
               type: 'text',
               name: 'mgrName',
               message: "What is the team manager's name?"
          })
          .then(({ mgrName }) => {
               console.log("your name is " + mgrName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'mgrID',
                         message: "What is the team manager's employee ID?"
                    })
                    .then(({ mgrID }) => {
                         console.log("manager ID is " + mgrID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'mgrEmail',
                                   message: "What is the team manager's email address?"
                              })
                              .then(({ mgrEmail }) => {
                                   console.log("manager email is " + mgrEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'mgrOffice',
                                             message: "What is the team manager's office number?"
                                        })
                                        .then(({ mgrOffice }) => {
                                             console.log("manager office # is " + mgrOffice);
                                             managerInfo(mgrName, mgrID, mgrEmail, mgrOffice);

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
               console.log("your interns name is " + intName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'intID',
                         message: "What is the team manager's employee ID?"
                    })
                    .then(({ intID }) => {
                         console.log("intern ID is " + intID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'intEmail',
                                   message: "What is the intern's email address?"
                              })
                              .then(({ intEmail }) => {
                                   console.log("intern's email is " + intEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'intSchool',
                                             message: "What is the intern's school"
                                        })
                                        .then(({ intSchool }) => {
                                             console.log("intern's school is " + intSchool);
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
               console.log("your engineer's name is " + engName);

               inquirer
                    .prompt({
                         type: 'text',
                         name: 'engID',
                         message: "What is the engineer's employee ID?"
                    })
                    .then(({ engID }) => {
                         console.log("intern ID is " + engID);

                         inquirer
                              .prompt({
                                   type: 'text',
                                   name: 'engEmail',
                                   message: "What is the engineer's email address?"
                              })
                              .then(({ engEmail }) => {
                                   console.log("engineer's email is " + engEmail);

                                   inquirer
                                        .prompt({
                                             type: 'text',
                                             name: 'engGithub',
                                             message: "What is the engineer's Github?"
                                        })
                                        .then(({ engGithub }) => {
                                             console.log("engineer's gitgub is  " + engGithub);
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
                    console.log('you chose add eng');
                    engQuestions();
               } else if (selection === 'Add intern') {
                    console.log('you chose add intern');
                    internQuestions();
               } else {
                    console.log('finishing');
               }
          })
};


function managerInfo(mgrName, mgrID, mgrEmail, mgrOffice) {
     console.log('manager info is ' + mgrName + mgrID + mgrEmail + mgrOffice)
};

mgrQuestions()