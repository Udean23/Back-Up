function play(){

  const container = document.querySelector(".container");
  const bloodSpot = document.querySelector(".bloodSpot");
  const startBtn = document.querySelector(".startBtn");
  const scorelast = document.querySelector("#scorelast");
  const dificultylast = document.querySelector("#dificultylast");

  const terrorist = document.createElement("img");
  const terrorist2 = document.createElement("img");
  const terrorist3 = document.createElement("img");
  
  const contHeight = container.offsetHeight;
  const contWidth = container.offsetWidth;

  document.getElementById("gamemenu").style.display = 'none';
  document.querySelector(".gameplay").style.display = 'flex';
  document.querySelector(".container").style.display = 'block';
  document.querySelector(".leaderboard").style.display = 'block';
  let Username = document.getElementById("username").value;
  document.getElementById("player").innerHTML = Username;
  
  setInterval(() => {
    const randTop = Math.random() * (contHeight + 200);
    const randLeft = Math.random() * (contWidth + 950);
  
    terrorist.style.position = "absolute";
    terrorist.style.top = randTop + "px";
    terrorist.style.left = randLeft + "px";
    terrorist.style.display = 'block';
  }, 3000);
  
  setInterval(() => {
    const randTop = Math.random() * (contHeight + 450);
    const randLeft = Math.random() * (contWidth + 850);
  
    terrorist2.style.position = "absolute";
    terrorist2.style.top = randTop + "px";
    terrorist2.style.left = randLeft + "px";
    terrorist2.style.display = 'block';
  }, 3000);
  
  setInterval(() => {
    const randTop = Math.random() * (contHeight + 700);
    const randLeft = Math.random() * (contWidth + 1100);
  
    terrorist3.style.position = "absolute";
    terrorist3.style.top = randTop +  "px";
    terrorist3.style.left = randLeft  + "px";
    terrorist3.style.display = 'block';
  }, 3000);
  
  let score1 = 0;
  
  startBtn.addEventListener("click", () => {
    startCounter();
    container.appendChild(terrorist);
    container.appendChild(terrorist2);
    container.appendChild(terrorist3);
  
  
    startBtn.innerText = "SCORE: " + score1;
  });
  
  window.addEventListener("click", (e) => {
    bloodSpot.style.top = e.pageY + "px";
    bloodSpot.style.left = e.pageX + "px";
    bloodSpot.style.display = 'block';
    setInterval(()=>{
      bloodSpot.style.display = 'none';
    },3500);
  
    if (e.target === terrorist){ score1++;
    terrorist.style.display = 'none';
    }
    if (e.target === terrorist2){ score1++;
    terrorist2.style.display = 'none';
    }
    if (e.target === terrorist3){ score1++;
    terrorist3.style.display = 'none';
    }
  
    startBtn.innerText = "SCORE: " + score1;
  });
  
  const cursor = document.querySelector(".cursor");
  window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
  });
  
  let seconds = 25;
  let counterInterval;
  let counterDisplay = document.getElementById('counter');

  let target = document.querySelector('input[name="target"]:checked').value;
  //console.log(target)
  let pointer = document.querySelector('input[name="pointer"]:checked').value;
  //console.log(pointer)
  let  gun = document.getElementById('gun');
  let gun1 =['Sprites/gun1.png'];
  let gun2 =['Sprites/gun2.png'];
  var e = document.getElementById("level");
  var level = e.value;
  //console.log(level);

  if(pointer == '1'){

    gun.src = gun1;

  }else if(pointer == '2'){

    gun.src = gun2;

  }

  if(target == '1'){

    terrorist.setAttribute("class", "terrorist");
    terrorist.setAttribute("src", "Sprites/target1.png");

    
    terrorist2.setAttribute("class", "terrorist2");
    terrorist2.setAttribute("src", "Sprites/target1.png");

    
    terrorist3.setAttribute("class", "terrorist3");
    terrorist3.setAttribute("src", "Sprites/target1.png");

  }else if(target == '2'){
    terrorist.setAttribute("class", "terrorist");
    terrorist.setAttribute("src", "Sprites/target2.png");

    
    terrorist2.setAttribute("class", "terrorist2");
    terrorist2.setAttribute("src", "Sprites/target2.png");

    
    terrorist3.setAttribute("class", "terrorist3");
    terrorist3.setAttribute("src", "Sprites/target2.png");

  }else if(target == '3'){
    terrorist.setAttribute("class", "terrorist");
    terrorist.setAttribute("src", "Sprites/target3.png");

    
    terrorist2.setAttribute("class", "terrorist2");
    terrorist2.setAttribute("src", "Sprites/target3.png");

    
    terrorist3.setAttribute("class", "terrorist3");
    terrorist3.setAttribute("src", "Sprites/target3.png");

  }

  if(level == 'EASY'){
    seconds += 5;
  }else if(level == 'MEDIUM'){
    seconds -= 5;
  }else if(level == 'HARD'){
    seconds -= 10;
  }
  
  function startCounter() {
    counterInterval = setInterval(updateCounter, 1000);
  }
  
  function updateCounter() {
    seconds--;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const display = `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    counterDisplay.textContent = display;
    if(seconds == 0){
        seconds-0;
        stopCounter();
        document.querySelector(".gameplay").style.display = 'none';
        document.querySelector(".finalscore").style.display = 'block';

        document.getElementById("playername").innerHTML = Username;
        scorelast.innerText = "SCORE : " + score1;
        dificultylast.innerText = "DIFICULTY : " + level;
    }
  }
  
  function stopCounter() {
    clearInterval(counterInterval);
  }
  
  const saveScoreBtn = document.getElementById("saveScoreBtn")
  const MAX_HIGH_SCORES = 5;

  const highScoresList = document.getElementById("highScoresList");
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} <br> <br> Score: ${score.score} <br> Dificulty: ${score.dificulty}</li> <h2>__________________________</h2> <br>`;
  })
  .join("");
  

  saveHighScore = e =>{
    const score = {
      score : score1,
      dificulty : level,
      name : Username
    };
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);
    highScores.push(score);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    console.log(highScores);
    saveScoreBtn.style.display = 'none';
  }
  
}

function reveal(){
  document.getElementById("instruction").style.display = 'block';
}

function hide(){
  document.getElementById("instruction").style.display = 'none';
}