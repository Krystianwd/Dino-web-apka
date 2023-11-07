var character = document.getElementById("character");
var block = document.getElementById("block");
console.log(character, block);
function jump() {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(function () {
    character.classList.remove("animate");
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
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    document.addEventListener("keyup", (event) => {
      jump();
      if (presstimer !== null) {
        clearTimeout(presstimer);
        presstimer = null;
      }
    });
    var presstimer = setTimeout(function () {
      longJump();
      longpress = true;
    }, 1000);

    // jump();
  }

  console.log(event);
});
