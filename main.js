
// 3)hideme fn , this function is called as callback fn from settimeout func
function hideme() {

    // make the text1 invisbile/hidden
    document.getElementById("text1").style.display = "None";
    //make the hide button invisible
    document.getElementById("bHide").style.display = "None";
    // make the show button visible now
    document.getElementById("bShow").style.display = "block";
    // fire the alert
    alert(" This alert is fired using call-back function in Settimeout() function  The alert is fired after 3 seconds ( the first process) and text will be hidden after you click OK ");


}

// 5) showme fn which is called as callback
function showme() {

    // make "hide" button visible
    document.getElementById("bHide").style.display = "block";
    // hide the "show" button
    document.getElementById("bShow").style.display = "None";
    //fire the alert
    alert(" The text is now un-hidden using call back function in Jquery Show() function. The alert should have be fired after the text is visible, which shows that alert is fired after the first process( text is visible) is completed");
}

// 2) This is the listener for Hide button , this will call hideme function after 2 seconds
document.getElementById("bHide").onclick = function () {
    console.log(" +++ Inside the hide click");
    //call-back example using settimeout 
    setTimeout(hideme, 2000);

}

// 4) this is listerner for show button /show is a Jquery
document.getElementById("bShow").onclick = function () {
    console.log(" +++ Inside the show click");
    // call back coding, here text1 will be made visible and then showme function called after that
    $("#text1").show("slow", showme);

}

//1)once the HTML is started ,This will hide the "show" button at the start
document.getElementById("bShow").style.display = "None";




setInterval(myFunction, 1000);
function myFunction() {
    let d = new Date();
    document.getElementById("demo").innerHTML =
        d.getHours() + ":" +
        d.getMinutes() + ":" +
        d.getSeconds();
}


//Grabs HTML Elements
let btn = document.querySelector('#sortbtn');
let ourNames = document.querySelector('#ourNames');
//Array of Names
let names = ['Shweta', 'Diana', 'JSonya', 'Marcus', 'Erin'];
//Sort the names array
function sortNames() {
    setTimeout(function () {
        let sorted = names.sort().join(',');
        ourNames.innerHTML = sorted + " are the authors of this website!";
    }, 1000)
};

//SortNames as a Callback
btn.addEventListener('click', sortNames);


const saySomething = (callBack) => {
    // console.log('hello');
    callBack('hi! how are you?');
};
saySomething((message) => {
    console.log(message);
});
// promt askes what movie would you like to watch after 5 seounds 
setTimeout(function () {
    var person = prompt("Do you like our callback functions?");
    if (person != null) {
    }
}, 5000)