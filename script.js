var character = document.getElementById("character");
var block = document.getElementById("block");
var pressTimer = null;
var jumpTimer = null;

document.addEventListener("keydown", handleKeyDown);
document.addEventListener("keyup", handleKeyUp);

rotateBlocks();
function rotateBlocks() {
  setInterval(() => {
    const rndInt = randomIntFromInterval(1, 4);
    console.log(rndInt);
    switch (rndInt) {
      case 1:
        document.getElementById("image").src = "assets/drzewo.png";
        document.getElementById("block").style =
          "width: 20px; height: 20px; position: relative; top: 130px; left: 480px ";
        break;
      case 2:
        document.getElementById("image").src = "assets/samolot.png";
        document.getElementById("block").style =
          "width: 30px; height: 20px;  position: relative; top: 90px; left: 470px;";
        break;
      case 3:
        document.getElementById("image").src = "assets/samolot.png";
        document.getElementById("block").style =
          "width: 30px; height: 20px; position: relative; top: 90px; left: 470px;";
        break;
      case 3:
        document.getElementById("image").src = "assets/samolot.png";
        document.getElementById("block").style =
          "width: 30px; height: 20px; position: relative; top: 50px; left: 470px;";
        break;
    }
  }, 4500);
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function handleKeyUp(event) {
  if (event.code === "KeyW" && jumpTimer == null) {
    jump(false);
    clearTimeout(pressTimer);
    pressTimer = null;
    console.log("press");
  }
  if (event.code === "KeyS" && jumpTimer == null) {
    document.getElementById("character").style =
      "width: 60px;height: 45px;position: relative;top: 155px;";
    document.getElementById("dino-image").src = "assets/dino5.png";
  }
}
function handleKeyDown(event) {
  console.log(event);
  if (event.code === "KeyW" && jumpTimer == null) {
    pressTimer = setTimeout(function () {
      jump(true);
      clearTimeout(pressTimer);
      pressTimer = null;
      console.log("longpress");
    }, 120);
  }
  if (event.code === "KeyS" && jumpTimer == null) {
    document.getElementById("character").style =
      " width: 60px;height: 45px;position: relative;top: 163px";
    document.getElementById("dino-image").src = "assets/dino4.png";
  }
}
function jump(isLongPress) {
  if (isLongPress) {
    character.style.animation = "longJump 500ms";
  } else {
    character.style.animation = "jump 500ms";
  }
  jumpTimer = setTimeout(function () {
    clearTimeout(jumpTimer);
    jumpTimer = null;
    character.style.animation = "none";
  }, 500);
  var checkHit = setInterval(() => {
    var characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue("top")
    );
    var blockLeft = parseInt(
      window.getComputedStyle(character).getPropertyValue("left")
    );
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
      block.style.animation = "none";
      block.style.display = "none";
      alert("anlaki");
    }
  }, 10);
}
