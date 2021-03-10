const inquirer = require('inquirer');

function Questions() {
     inquirer
          .prompt({
               type: 'text',
               name: 'name',
               message: 'What is your name?'
          })
          .then(({ name }) => {
               console.log("your name is " + name);
          });
};

Questions()