let fakeSlowNetwork;

// you can ignore this immediately-executing function
// it is used to simulate a slow network to show you how AJAX and Promises work
(function() {
  let lsKey = 'fake-slow-network';
  let networkFakeDiv = document.querySelector('.network-fake');
  let checkbox = networkFakeDiv.querySelector('input');

  fakeSlowNetwork = Number(localStorage.getItem(lsKey)) || 0;

  networkFakeDiv.style.display = 'block';
  checkbox.checked = !!fakeSlowNetwork;

  checkbox.addEventListener('change', function() {
    localStorage.setItem(lsKey, Number(checkbox.checked));
    location.reload();
  });
}());


// here is where the "real" example code starts
// it includes a few lines to "slow down" the AJAX calls
//   to simulate a real network scenario which you can ignore for now
//   but which will be relevant when we construct ASYNC callbacks next week

// ******* 
// AJAX STUFF
// *******
function getSync(url) {

  let req = new XMLHttpRequest();
  req.open('get', url, false);
  req.send();

  // pause here to simulate slow network - IGNORE
  /*
  let startTime = Date.now();
  let waitTime = 3000 * Math.random() * fakeSlowNetwork;
  while (waitTime > Date.now() - startTime);
   */
  // now continue
  if (req.status === 200) {
    return req.response;
  }
  else {
    throw Error(req.statusText || "Request failed");
  }
}

function getJsonSync(url) {
  let json = JSON.parse(getSync(url));
  let stringson = JSON.stringify(json);
  if(stringson.includes('dictum')){
    return addDefinitionToDictum('dictum', stringson)
  }
  return json;
}

// Add definition for the word 'dictum'
function addDefinitionToDictum(word, json){
  let index = json.indexOf(word);
  let definition = JSON.parse(getSync("https://api.dictionaryapi.dev/api/v2/entries/en/" + word));
  let stringDef = definition[0].meanings[0].definitions[0].definition;
  let numOfChars = word.length;
  let addDef = json.splice(index + numOfChars, 0, " ("+stringDef+")");
  return JSON.parse(addDef);
}
String.prototype.splice = function(start, delCount, newSubStr) {
  return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
};

// Add definitions to any double clicked word, if found
function addDefinitionToList(word){
  try{
    let defList = document.getElementById("definitions");
    let definition = JSON.parse(getSync("https://api.dictionaryapi.dev/api/v2/entries/en/" + word));
    let stringDef = definition[0].meanings[0].definitions[0].definition;
    let p = document.createElement('p');
    p.innerHTML = stringDef;
    defList.appendChild(p);
  }catch (err){
    let defList = document.getElementById("definitions");
    let stringDef = "Not found...";
    let p = document.createElement('p');
    p.innerHTML = stringDef;
    defList.appendChild(p);
  }
}

function getSelectionText() {
  let txt = '';
  if (window.getSelection) {
    txt = window.getSelection();
  } else if (document.getSelection) {
    txt = document.getSelection();
  }
  return txt;
}

// Add definition for any word that is double-clicked
function addListeners(){
  document.querySelector('*').addEventListener("dblclick", function (){
    let text = getSelectionText();
    addDefinitionToList(text);
  });
}

// ******* 
// DOM STUFF
// *******
let storyDiv = document.querySelector('.story');

function addHtmlToPage(content) {
  let div = document.createElement('div');
  div.innerHTML = content;
  storyDiv.appendChild(div);
}

function addTextToPage(content) {
  let p = document.createElement('p');
  p.textContent = content;
  storyDiv.appendChild(p);
}
