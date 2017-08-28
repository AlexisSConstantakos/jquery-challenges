/**
 * Hockey is the game. Make it happen.
 *
 * USEFUL RESOURCES
 * https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics
 * https://api.jquery.com/id-selector/
 * https://api.jquery.com/html/
 * https://api.jquery.com/css/
 * https://api.jquery.com/click/
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *
 * If you want to turn it into some other sport, have at it.
 *
 * Anyway, I have given you a basic HTML structure for a
 * BATTLE OF THE SPORTS GAME THING between these two rivals, and you
 * should make the page do what it needs to do, using your knowledge
 * of JS, HTML, CSS, and... sports.
 *
 * Here's what this 'game' should do:
 *
 * 1. Clicking a "SHOOT" button attempt to score against the opposing team.
 *   - shots have a random chance of succeeding or failing
 *   - number of shots taken should increase every click on the "SHOOT" button
 *   - number of hits obviously only increases when the shot is successful
 *
 * 2. Clicking the "RESET" button resets all the shot and score counters and
 * adds 1 to the number of resets
 *
 * 3. Any time a team shoots and scores change the background color of
 *    page to that teams color
 *
 * OPTIONAL STUFF:
 * - add logos of the two rivals below their name
 * - make the page just look better
 * - play a sound when someone clicks the "Shoot" button. You'll need to read about the <audio> element
 *   and how to use it in JS. You will also need to download a sound bite
 */

(function(){

  //jQuery equivelent to window.onload = function{}
  //code in here wont run until page loads
  $(function(){

    let teamOneShootButton = $("#teamone-shoot")
    let teamTwoShootButton = $("#teamtwo-shoot")
    let reset = $("#reset")
    let teamOneGoal = $("#teamone-numhits")
    let teamTwoGoal = $("#teamtwo-numhits")
    let teamOneShot_Counter = 0
    let teamTwoShot_Counter = 0
    let teamOneShots = $("#teamone-numshots")
    let teamTwoShots = $("#teamtwo-numshots")
    let numReset = $("#num-resets")


    teamOneShootButton.click(function(){
      teamOneShot_Counter = teamOneShot_Counter + 1;
        console.log(teamOneShots);
          teamOneShots.text(teamOneShot_Counter);
    let randomNumber = Math.random()
      if(randomNumber > .5) {
        teamOneGoal.html(parseInt(teamOneGoal.html()) + 1)
    }
    })

    teamTwoShootButton.click(function(){
      teamTwoShot_Counter = teamTwoShot_Counter + 1;
        console.log(teamTwoShots);
          teamTwoShots.text(teamTwoShot_Counter);
    let randomNumber = Math.random()
      if(randomNumber > .5) {
        teamTwoGoal.html(parseInt(teamTwoGoal.html()) + 1)
    }
    })

    reset.click(function(){

      numReset.html(parseInt(numReset.html()) + 1);

      teamOneShots.html(0);
      teamTwoShots.html(0);
      teamOneGoal.html(0);
      teamTwoGoal.html(0);
    })

    teamOneShootButton .click(function() {
      var color = $(this).css("background-color", "Salmon");
    })
    teamTwoShootButton.click(function() {
      var color = $(this).css("background-color", "LightSeaGreen");
    })

    teamOneShots.click(function() {
      var color = $(this).css("background", "WhiteSmoke");
    })
    teamTwoShots.click(function() {
      var color = $(this).css("background", "Linen");
    })

  })

})();
