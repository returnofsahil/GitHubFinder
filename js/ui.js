class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.repos = document.getElementById("repos");
  }
  showProfile(user) {
    this.profile.innerHTML =
      // `<div class="card">
      //   <div class="card__image">
      //     <img src="${user.avatar_url}" alt="" srcset="">
      //   </div>
      //   <div class="card__text">

      //   <h3>Name ${user.name}</h3>
      //   <p>Login Name: ${user.login}<b></b></p>
      //     <h3>Public Repos:${user.public_repos}</h3>
      //       <br><br>

      //     </div>
      //   </div>`;
      `<div class="card " style="width: 18rem;">
      <img src="${user.avatar_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title text-center">${
          user.name ? user.name : "Unknown"
        }</h5>
        <p class="card-text text-center">${
          user.login ? user.login : "Unknown"
        }</p>
        <br><br>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="${user.html_url}" class="btn btn-primary">Visit ${
        user.login
      }</a>
      </div>
      <div class="col-md-9">
            <span class="badge badge-primary">Public Repos: ${
              user.public_repos
            }</span>
            <span class="badge badge-secondary">Public Gists: ${
              user.public_gists
            }</span>
            <span class="badge badge-success">Followers: ${
              user.followers
            }</span>
            <span class="badge badge-info">Following: ${user.following}</span>
            <br><br>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website/Blog: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
    </div>

    `;
  }

  //show repos
  showRepos(repos) {
    let output = "<h2 class ='font-Roboto'>Latest Repos:</h2>";
    repos.forEach((repo) => {
      output += ` <div class="card card-body mb-2">
      <div class="row">
        <div class="col-md-6">
          <a href="${repo.html_url}" target="_blank">${repo.name}</a>
        </div>
        <div class="col-md-6">
        <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
        <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
        <span class="badge badge-success">Forks: ${repo.forms_count}</span>
        </div>
      </div>
    </div>`;
    });
    // console.log(output);
    this.repos.innerHTML = output;
  }
  //ouput repos

  //show alert
  showAlert(message, className) {
    //clear remaining alert
    this.clearAlert();
    const div = document.createElement("div");
    div.className = className;
    //add task
    div.appendChild(document.createTextNode(message));

    // get parent
    const container = document.querySelector(".container");
    console.log(div);
    container.appendChild(div);

    //timeout
    setTimeout(() => {
      this.clearAlert();
    }, 3000);
  }
  //Clear alert message
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
  clearProfile() {
    this.profile.innerHTML = "";
    this.repos.innerHTML = "";
  }
}
