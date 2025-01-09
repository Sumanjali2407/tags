function addUser(){
    const username="suma";
    const email="suma@gmail.com";
    return{username,email};
}
function userList(){
    const user=addUser();
    console.log(user);
}
export{addUser,userList};