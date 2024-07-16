function welcomeMessage(fullname) {
return () => alert(`Welcome ${fullname}`);
}

var guillaume = welcomeMessage("Guillaume");
var max = welcomeMessage("Max");
guillaume();
max();