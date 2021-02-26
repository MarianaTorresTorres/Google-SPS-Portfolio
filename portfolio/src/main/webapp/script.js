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
let facts = [
  "Digital Arts and Sciences Engineer ",
  "Full-Stack Developer ",
  "Scrum Master ",
  "Google SPS participant! >:) "
];
let txt = "I'm a " + facts[0];
let speed = 50;
let backspace = false;

window.onload = function() {
  typeWriter();
  i = 0;
  txt = "I'm a " + facts[Math.floor(Math.random() * facts.length)];
  backspace = false;
};

document.addEventListener("click", function() {
  typeWriter();
  i = 0;
  txt = "I'm a " + facts[Math.floor(Math.random() * facts.length)];
  backspace = false;
});

function typeWriter() {
  if (i <= txt.length && !backspace) {
    document.getElementById("typed").innerHTML = txt.substring(0, i) + "|";
    i++;
    if (i === txt.length + 1) {
      backspace = true;
      setTimeout(wait(), 15000);
    }
    setTimeout(typeWriter, speed);
  }
  if (backspace) {
    if (i >= 0) {
      document.getElementById("typed").innerHTML = txt.substring(0, i) + "|";
      i--;
      setTimeout(typeWriter, speed + 10);
    }
  }
}

function wait() {
  for (let num = 0; num < 100; num++) {
    if (num % 2 === 0) {
      document.getElementById("typed").innerHTML = txt + "|";
    } else {
      document.getElementById("typed").innerHTML = txt;
    }
  }
}