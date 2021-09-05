//init github
const github = new Github
//init ui
const ui = new UI;
//search input
const searchUser = document.querySelector('#searchUser');

//search input event listner
searchUser.addEventListener('keyup', (e) => {
  //get input text
  const userText = e.target.value;
  if (userText !== '') {
    //make http call
    github.getUser(userText)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          //show alert
          ui.showAlert('User not found', 'alert');
        } else {
          //show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    //clear profile
    ui.clearProfile();
  }
})