// maxElement= 5;

const submitBtn = document.getElementById("submit");
const showDefaultResult = document.getElementById("showDefaultResult");
const showResult = document.getElementById("showResult");
const nameInput = document.getElementById("nameInput");
const remove = document.getElementById("remove");

// represent the max element to change justify-content style from showREsult div  to  flex-start : 
const maxElement = 5;

let objects = document.getElementsByClassName("object");


//submit event ___________________________________________________________________________
submitBtn.onclick = function () {
  const inputValue = nameInput.value;
  
  if (!isValid(inputValue)) {
    alert("you have to enter the name");
    return;
  }

  SetJustifyCenter();
  let newElement = prepareElement(inputValue);

  pushObject(newElement);

  // this function is  for control the  <h1>please entre your name</h1> => (turn on display none or block)
  setDefaultResult();
};

function isValid(inputValue) {
  return inputValue != "";
}

function prepareElement(inputValue) {
  let newElement = CreateObject(inputValue);
  newElement = setClassName(newElement);
  return newElement;
}

function CreateObject(inputValue) {
  let newElement = document.createElement("h1");
  newElement.textContent = inputValue;
  return newElement;
}
function setClassName(object) {
  object.classList.add("object", "greenHover");
  return object;
}
function SetJustifyCenter() {
  if (maxElement <= getNbrObject())
    showResult.style.justifyContent = "flex-start";
  else showResult.style.justifyContent = "center";
}

function getNbrObject() {
  return document.getElementsByClassName("object").length;
}

function setDefaultResult() {
  if (getNbrObject() > 0) showDefaultResult.style.display = "none";
  else showDefaultResult.style.display = "block";
}

function pushObject(object) {
  showResult.appendChild(object);
}


/// remove event _______________________________________________________
remove.onclick = function () {
  if (isEmpty()) alert("there is no element :");
  else {
    removeObject(objects[getNbrObject() - 1], showResult);
    setDefaultResult();
    SetJustifyCenter();
  }
};

function isEmpty() {
  return getNbrObject() == 0;
}

function removeObject(object, parent) {
  showResult.removeChild(object);
}
