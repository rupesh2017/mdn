

var myImage = document.querySelector('img');
myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc==='images/my-image.png')
    {
        myImage.setAttribute('src','images/image2.png');
    }
    else{
        myImage.setAttribute('src','images/my-image.png');
    }
}

var myHeading = document.querySelector('h1');

var myButton = document.querySelector('button')

function setUserName(){
    var myName = prompt('Please enter your Name')
    localStorage.setItem('name',myName)
    myHeading.textContent ='Mozilla is cool, '+myName
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick= function(){
    setUserName()
}
