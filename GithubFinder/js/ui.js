class UI {
  constructor() {
    this.profile = document.getElementById('profile');
    this.repos = document.getElementById('repos');
  }
  showProfile(user) {
    this.profile.innerHTML =
      `<div class="card">
    <div class="card__image">
      <img src="${user.avatar_url}" alt="" srcset="">
    </div>
    <div class="card__text">
      
    <h3>Name ${user.name}</h3>
    <p>Login Name: ${user.login}<b></b></p>
      <h3>Public Repos:${user.public_repos}</h3>
      <br><br>
      
      
    </div>
  </div>`


  }
  //show repos
  showRepos(repos) {
    let output = '<h2>Latest Repos:</h2>';
    repos.forEach(repo => {
      output += `<div class = "card">
      
      <p><a href='${repo.html_url}' target='_blank'>${repo.name}</a></p>
      </div>`
    });
    // console.log(output);
    this.repos.innerHTML = output;
  }
  //ouput repos

  //show alert
  showAlert(message, className) {
    //clear remaining alert
    this.clearAlert();
    const div = document.createElement('div');
    div.className = className;
    //add task
    div.appendChild(document.createTextNode(message));

    // get parent
    const container = document.querySelector('.container');
    console.log(div);
    container.appendChild(div);

    //timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove()
    }
  }
  clearProfile() {
    this.profile.innerHTML = '';
    this.repos.innerHTML = '';
  }
}