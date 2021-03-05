// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

let i = 0;
let txt = "I'm a ";
let speed = 75;
let backspace = false;
let blinkCursor = true;

window.onload = function() {
  fetchText();
  typeFact();
  fetchText();
  i = 0;
  backspace = false;
};

async function fetchText() {
    const responseFromServer = await fetch('/servlet');
    txt = await responseFromServer.text();
}

function typeButton() {
  typeFact();
  i = 0;
  fetchText();
  backspace = false;
}

/*This function adds a single character to the displayed message until complete 
and then reverses that process*/
function typeFact() {
  if (i <= txt.length && !backspace) {
    document.getElementById("typed").innerHTML = txt.substring(0, i);
    i++;
    if (i === txt.length) {
      backspace = true;
    } else {
      setTimeout(typeFact, speed);
    }
  }
  if (backspace) {
    if (i >= 0) {
      document.getElementById("typed").innerHTML = txt.substring(0, i);
      i--;
      setTimeout(typeFact, speed);
    }
  }
}

//This function creates the blinking cursor
setInterval(() => {
  if (blinkCursor) {
    document.getElementById("cursor").style.opacity = 0;
    blinkCursor = false;
  } else {
    document.getElementById("cursor").style.opacity = 1;
    blinkCursor = true;
  }
}, speed * 5);
