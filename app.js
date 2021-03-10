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
               } else if (selection === 'Add intern') {
                    console.log('you chose add intern');
               } else {
                    console.log('finishing');
               }
          })
};


function managerInfo(mgrName, mgrID, mgrEmail, mgrOffice) {
     console.log('manager info is ' + mgrName + mgrID + mgrEmail + mgrOffice)
};

mgrQuestions()