let You = { name: "Champion", health: 50, ap: 18, crit: 0.25 };
let Opponent1 = { name: "Strange Stranger", health: 40, ap: 15, crit: 0.25 };

let character = [You, Opponent1];

function attack(by, to, damagemodifier) {                                                           //main attack function
  critmod = Math.random();
  amod = Math.random();
  damage = parseInt(amod * by.ap * damagemodifier);

  if (amod <= 0.25) {                                                                               //randomize damage numbers including crits
    damage = 0;
    to.health = Math.ceil(to.health - damage);
  } else if (critmod <= by.crit) {
    damage = by.ap * 1.5 * damagemodifier;
    to.health = Math.ceil(to.health - damage);
  } else to.health = Math.ceil(to.health - damage);

  if (to.health <= 0) {                                                                             //game over condition
    //add win alert here
    to.health = 0;
    $("#attack").hide();
    $("#defend").hide();
    $("#endturn").hide();
    playerHealthBar(character[0].health);
    enemyHealthBar(character[1].health);
    if (by.name == "Champion")
    $("#battlelog").text(`As you finish off The Strange Stranger, a feeling of guilt passes over you. But you cannot linger, as there are answers to be found.`);
    else $("#battlelog").text(`As you take your last breath, ${by.name}'s face is the last you see. A story ended before one could start...`);
    //location.reload();
  }
  console.log(to.health, damage);
  if (damage == 0) $("#battlelog").append(`${by.name} missed!!<br>`);                                 //battle log conditions
  else if (to.health != 0) {
    battleLog(by, to, damage, critmod);                                                               //call battlelog function
    var audio = new Audio("./sounds/sword.mp3");                                                      //play sound on attack (to be made more rich)
    audio.play();
  }

  $("#attack").attr("disabled", "disabled");                                                          //button states after attack is completed
  $("#defend").attr("disabled", "disabled");
  $("#endturn").removeAttr("disabled", "disabled");

  playerHealthBar(character[0].health);                                                                 //health bar update
  enemyHealthBar(character[1].health);
}

function endTurn(enemyattackmodifier) {                                                                 //end turn function, incorporates an enemy attack after 2000ms it is called
  $("#endturn").attr("disabled", "disabled");
  $("#defend").attr("disabled", "disabled");
  $("#attack").attr("disabled", "disabled");
  setTimeout(function enemyAttack() {
    attack(character[1], character[0], enemyattackmodifier);

    //$("#endturn").attr('disabled','disabled');  //remove the comment to disable "compulsory attack on turn"

    $("#attack").removeAttr("disabled", "disabled");
    $("#defend").removeAttr("disabled", "disabled");
  }, 2000);
}

function defend() {                                                                                       //defend, reduces damage by 50%
  endTurn(0.5);
}

function playerHealthBar(charhealth) {                                                                    //change these numbers to match health bar width in css to change healthbar size
  $(".healthbarplayer").width(charhealth * 9);
}
function enemyHealthBar(charhealth) {
  $(".healthbarenemy").width(charhealth * 11.25);
}

function battleLog(by, to, damage, critmod) {                                                             //randomize battle log text
  let output_generator = Math.floor(Math.random() * 6 + 1);
  if (critmod <= by.crit) output_generator = 7;

  if (output_generator == 1) {
    $("#battlelog").append(`${by.name} strikes for ${damage} damage! <br>`);
  } else if (output_generator == 2) {
    $("#battlelog").append(
      `${to.name} suffers a hit! ${by.name} shouldn't be taken lightly. ${damage} damage!<br>`
    );
  } else if (output_generator == 3) {
    $("#battlelog").append(
      `${to.name} tries to attack quickly, but instead suffers ${damage} damage in a counter-attack by ${by.name}. <br>`
    );
  } else if (output_generator == 4) {
    $("#battlelog").append(
      `A vicious strike by ${by.name}! ${damage} damage. <br>`
    );
  } else if (output_generator == 5) {
    $("#battlelog").append(
      `${to.name} is shaken by ${damage} damage done! <br>`
    );
  } else if (output_generator == 6) {
    $("#battlelog").append(`${damage} damage! Courtesy of ${by.name}. <br>`);
  } else if (output_generator == 7)
    $("#battlelog").append(
      `Critical hit!! There is no recovery from this for ${to.name}. <br>`
    );
  else
    $("#battlelog").append(
      `Its a hit by ${by.name} for ${damage} damage. <br>`
    );
}
console.log(character);
