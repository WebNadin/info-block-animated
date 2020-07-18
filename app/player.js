let player = {
  img: 'player-name',
  name: 'Nick name',
  team: 'Matumbaman'
};

let playerCardTemplate = require("../templates/player.hbs");

function playerHTML(player) {
  var resultsContainer = $(".animatedBlock");
  resultsContainer.html(playerCardTemplate(player));
}

playerHTML(player);

