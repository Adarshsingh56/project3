function showConfirm(message , callback){
    var confirmBox = document.createElement("div");
    confirmBox.classList.add( 'confirm-box');


    var messageBox = document.createElement("div");
    messageBox.classList.add('message-box');
    messageBox.textContent = message;
    confirmBox.appendChild(messageBox);

    var buttonBox = document.createElement("div");
    buttonBox.classList.add('button-box');
    messageBox.appendChild(buttonBox);


    var yesButton = document.createElement("button");
    yesButton.classList.add('yes-button');
    yesButton.textContent= "yes";
    buttonBox.appendChild(yesButton);
    yesButton.addEventListener('click',YesButtonClick);

    var noButton = document.createElement("button");
    noButton.classList.add('no-button');
    noButton.textContent= "No";
    buttonBox.appendChild(noButton);
    noButton.addEventListener('click',NoButtonClick);

    function removeConfirmBox(){
        document.body.removeChild(confirmBox);
    }
    function YesButtonClick(){
callback(true);
removeConfirmBox();
    }
function NoButtonClick(){
callback(false);
removeConfirmBox();
}
    document.body.appendChild(confirmBox);
}
showConfirm("are you 18 years old" , function(result){
if(result){
    console.log("you pressed yes.");
}
else{
    console.log("you pressed No.");
}
});
  
