require('./search');

class Player {

  init() {
    console.log('init');
    this.showBlocks();

    gsap.to(".js-playerAvatar", {duration: 1, delay: 2.3, onComplete: this.hideText});
    gsap.to(".js-playerAvatar", {duration: 1, delay: 2.7, onComplete: this.hideBlocks});

  }

  showBlocks() {
    gsap.to(".js-playerAvatar", {duration: .8, x: 0});
    gsap.to(".js-playerAvatar", {duration: .8, opacity: 1});
    gsap.to(".js-playerAvatarImg", {duration: 1.5, delay: .3, opacity: 1});

    gsap.to(".js-playerTitle", {duration: .8, delay: .1, x: 0});
    gsap.to(".js-playerTitle", {duration: 1, opacity: 1});

    gsap.to(".js-playerTeam", {duration: .8, x: 0, onComplete: this.showText});
    gsap.to(".js-playerTeam", {duration: 1, opacity: 1});

  }

  hideBlocks() {
    gsap.to(".js-playerAvatar", {duration: 1, x: -100, ease: Power1.easeOut});
    gsap.to(".js-playerAvatar", {duration: 1, opacity: 0, ease: Power1.easeOut});
    gsap.to(".js-playerAvatarImg", {duration: .3, opacity: 0, ease: Power1.easeOut});

    gsap.to(".js-playerTitle", {duration: 1, delay: .1, x: -100, ease: Power1.easeOut});
    gsap.to(".js-playerTitle", {duration: 1, opacity: 0, ease: Power1.easeOut});

    gsap.to(".js-playerTeam", {duration: 1, x: -100, ease: Power1.easeOut});
    gsap.to(".js-playerTeam", {duration: 1, opacity: 0, ease: Power1.easeOut});

  }

  showText() {
    gsap.to(".js-playerTitleText", {duration: 1, y: 0});
    gsap.to(".js-playerTeamText", {duration: 1, delay: .2, y: 0});
  }

  hideText() {
    gsap.to(".js-playerTeamText", {duration: 1, y: -100, ease: Power1.easeOut});
    gsap.to(".js-playerTitleText", {duration: 1, delay: .1, y: -100, ease: Power1.easeOut});
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let playerInfo = document.querySelector('.js-playerInfo');
  let player = new Player();
  setTimeout(() => player.init(), 2000);
});
