const generateManager = function (manager){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${manager.name}</h2>
      <h3>Manager</h3>
      <p class="id">ID: ${manager.id}</p>
      <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
      <p class="office-number">Office Number: ${manager.officeNumber}</p>
    </div>
  </div>`;
}

const generateEngineer = function (engineer){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${engineer.name}</h2>
      <h3>Engineer</h3>
      <p class="id">ID: ${engineer.id}</p>
      <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
      <p class="office-number">Github: <a href="https://github.com/${engineer.github}">${engineer.officeNumber}</a></p>
    </div>
  </div>`;
}

const generateIntern = function (intern){
    return `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h2 class="card-title">${intern.name}</h2>
      <h3>Intern</h3>
      <p class="id">ID: ${intern.id}</p>
      <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
      <p class="school">School: ${intern.school}</p>
    </div>
  </div>`;
}

generateHTML = (data) => {
    cardArray = [];
    for (let i = 0; i < data.length; i++){
        const employee = data[i];
        const role = employee.getRole();
//cards for each role
        if (role === 'Manager'){
            const managerCard = generateManager(employee);
            cardArray.push(managerCard);
        }
        if (role === 'Engineer'){
            const engineerCard = generateEngineer(employee);
            cardArray.push(engineerCard);
        }
        if (role === 'Intern'){
            const internCard = generateIntern(employee);
            cardArray.push(internCard);
        }
    }

    const employeeCards = cardArray.join('');
    const generateTeamProfile = generateTeam(employeeCards);
    return generateTeamProfile;
}

//generate html page
const generateTeam = function(employeeCards){
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">My Team</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">

                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
  `;
}

module.exports = generateHTML; 