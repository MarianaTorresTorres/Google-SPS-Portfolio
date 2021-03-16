let i = 0;
let txt = "I'm a ";
let speed = 75;
let backspace = false;
let blinkCursor = true;

window.onload = function() {
  fetchText(0);
  typeFact();
};

/*Fetches comments from the server and adds them to the DOM. */
function loadComments() {
  fetch('/list-comments').then(response => response.json()).then((comments) => {
    const commentListElement = document.getElementById('comment-list');
    comments.forEach(function(comment) {
        const commentElement = document.createElement('li');
        commentElement.className = 'comment';
        const textElement = document.createElement('span');
        textElement.innerText = comment.text;   
        commentElement.appendChild(textElement);
        commentListElement.appendChild(commentElement);
    })
  });
}

async function fetchText(index) {
    const responseFromServer = await fetch('/servlet');
    let facts = await responseFromServer.json();
    if(index >= 0) {
        txt = "I'm a " + facts[index];
    } else {
        txt = "I'm a " + facts[Math.floor(Math.random() * facts.length)];
    }
}

/*This function gets called when the user presses the intro button, gets the data from the
servlet, and executes the typeFact function */
function typeButton() {
  i = 0;
  fetchText(-1);
  backspace = false;
  typeFact();
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
