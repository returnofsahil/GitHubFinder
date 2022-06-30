class Github {
  constructor() {
    this.client_id = '4f170de8fe637e7dcff5';
    this.client_secret = 'd3b8c79438aa407f4aaa0f3efd79ad3ef757ac88';
    this.repos_count = 5;
    this.repos_sort = 'created :asc';
  }
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret =${this.client_secret}`);

    //repos
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort =${this.repos_sort}&client_id=${this.client_id}&client_secret =${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    }
  }
}