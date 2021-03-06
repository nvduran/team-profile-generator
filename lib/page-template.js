const generatePage = (manager, intern, engineer) => {
     return `
     <!DOCTYPE html>
     <html lang="en">
     
     <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
          <title>My Team</title>
     </head>
     
     <body>
          <div class="row">
               <div class="col-12" style="background-color: lightseagreen;">
                    <h1 style="text-align: center;">My Team</h1>
               </div>
          </div>
          <div class="container">
               <div class="card bg-light mb-3" style="max-width: 30rem;">
                    <h3 class="card-header">${manager.mgrName}</h3>
                    <div class="card-body">
                         <h5 class="card-title">Manager</h5>
                         <p class="card-text">ID: ${manager.mgrID}</p>
                         <p class="card-text">Email: <a href="mailto:${manager.mgrEmail}">${manager.mgrEmail}</a></p>
                         <p class="card-text">Office number: ${manager.mgrOffice}</p>
                    </div>
               </div>
     
               <div class="card bg-light mb-3" style="max-width: 30rem;">
                    <h3 class="card-header">${engineer.engName}</h3>
                    <div class="card-body">
                         <h5 class="card-title">Engineer</h5>
                         <p class="card-text">ID: ${engineer.engID}</p>
                         <p class="card-text">Email: <a href="mailto:${engineer.engEmail}">${engineer.engEmail}</a></p>
                         <p class="card-text">Github username: <a href="https://github.com/${engineer.engGit}">${engineer.engGit}</a></p>
                    </div>
               </div>
     
               <div class="card bg-light mb-3" style="max-width: 30rem;">
                    <h3 class="card-header">${intern.intName}</h3>
                    <div class="card-body">
                         <h5 class="card-title">Intern</h5>
                         <p class="card-text">ID: ${intern.intID}</p>
                         <p class="card-text">Email: <a href="mailto:${intern.intEmail}">${intern.intEmail}</a></p>
                         <p class="card-text">School: ${intern.intSchool}</p>
                    </div>
               </div>
          </div>
          <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
          <script src="./lib/page-template.js"></script>
     </body>
     
     </html>
     `;
};

module.exports = generatePage;