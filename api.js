// client_secrets = "b1420a061005206a80b29c44db9ec7262b22beee"
//tham khảo api của git tại : https://docs.github.com/en/rest/overview/endpoints-available-for-github-apps

// const { log } = require("winjs");

//Fetch Profile: https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}

//Fetch Repo: https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}

class Api {
  constructor() {
    this.client_id = "399f9789f8f4b13ddb01";
    this.client_secrets = "b1420a061005206a80b29c44db9ec7262b22beee";
  }
  async getInfor(username) {
    // lấy profile
    let profile = await fetch(
      `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secrets}`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Errow(response.statusText);
      }
    });

    let repos = await fetch(
      `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secrets}`
    ).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Errow(response.statusText);
      }
    });
    return {
      profile,
      repos,
    };
  }
}
//test
// let http = new Api();
// đưa username sai thì lỗi 404
// bị ban thì lỗi 403
// http
//   .getInfor("HongThinhThinh")
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
