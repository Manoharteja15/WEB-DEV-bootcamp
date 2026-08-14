var users = [
    {
        name: "John Doe",
        gender: "Male",
        img: "john.png"
    },
    {
        name: "Jane Smith",
        gender: "Female",
        img: "jane.png"
    }
];

var currId = 0;

function ToggleUser() {
    currId = (currId + 1) % 2;

    var userName = document.getElementById("user-name");
    var userGender = document.getElementById("user-gender");
    var userImage = document.getElementById("user-image");

    userName.innerHTML = users[currId].name;
    userGender.innerHTML = users[currId].gender;
    userImage.src = users[currId].img;
}
function randomUser() {
  fetch("https://randomuser.me/api")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      const user = data.results[0];

      const userName = document.getElementById("user-name");
      const userGender = document.getElementById("user-gender");
      const userImage = document.getElementById("user-image");

      const newUserName =
        user.name.first + " " + user.name.last;

      const newUserGender = user.gender;
      const newUserImage = user.picture.large;

      userName.innerHTML = newUserName;
      userGender.innerHTML = newUserGender;
      userImage.src = newUserImage;
    })
    .catch(function (err) {
      console.log("Error occurred:", err);
    });
}