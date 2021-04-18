$(document).on('mousemove', function(e){
  basket.css('left', e.pageX);

});



function egg_down(egg) {
  egg_current_position = parseInt(egg.css('top'));
  egg.css('top', egg_current_position + speed);
}

function check_egg_hits_floor(egg){
    if(collision(egg,floor)) {
      show_broken_egg(egg);
      decrement_life();
      return true;
    }
    return false;
}

function set_egg_to_initial_position(egg) {
   egg.css('top', egg_initial_position);
}

function show_bulls_egg(egg) {
     bullseyeegg_num = egg.attr('data-bullseyegg');
     $('#bullseyegg' + bullseyegg_num).show();
     hide_bulls_egg(bullseyegg_num);
}

function hide_bulls_egg(bullseyegg_num) {
  setTimeout(function (){
     $('#bullseyegg' + bullseyegg_num).hide();
  }, 800);

}

function decrement_life() {
    life--;
    life_span.text(life);
}

function check_egg_hits_basket(egg) {
  if(collision (egg, basket)){
    egg_top = parseInt(egg.css('top'));
    if(egg_top < basket_top){
      update_score();
      return true;
    }
  }
  return false;
}

function update_score() {
  score++;
  if(score % 10 === 0 && speed <= max_speed){
    speed++;
  }
  score_span.text(score);
  score_1.text(score);
}

function stop_the_game() {
  cancelAnimationFrame(anim_id);
  restart.slideDown();
}

restart.click(function(){
  location.reload();
});
