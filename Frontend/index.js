var users=[
    {
        
        name:"John Doe",
        gender:"Male",
        img="john.png"
    },
    {
        
        name:"Jane Smith",
        gender:"Female",
        img="jane.png"
    }
];
var currId= 0;
function ToggleUser(){
    currId= (currId+1)%2;
    var userName= document.getElementById("user-name");
    var userGender= document.getElementById("user-gender");
    var userImage= document.getElementById("user-image");

    userName.innerHTML= users[currId].name;
    userGender.innerHTML= users[currId].gender;
    userImage.src= users[currId].img;
}