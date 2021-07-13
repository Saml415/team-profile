const cardManager = function (manager) {
  return `
<div class="card">
    <div class ="cardhead">
      <h2>${manager.name}</h2>
      <h3>Manager</h3>
    </div>
    <p>ID: ${manager.id}</p>
    <p>Email: ${manager.email}</p>
    <p>Office number: ${manager.number}</p>
  </div>   
    `;
};

const cardEngineer = function (engineer) {
    return `
  <div class="card">
      <div class ="cardhead">
        <h2>${engineer.name}</h2>
        <h3>Engineer</h3>
      </div>
      <p>ID: ${engineer.id}</p>
      <p>Email: ${engineer.email}</p>
      <p>GitHub: ${engineer.account}</p>
    </div>   
      `;
  };

  const cardIntern = function (intern) {
    return `
  <div class="card">
      <div class ="cardhead">
        <h2>${intern.name}</h2>
        <h3>Intern</h3>
      </div>
      <p>ID: ${intern.id}</p>
      <p>Email: ${intern.email}</p>
      <p>Office number: ${intern.number}</p>
    </div>   
      `;
  };
  