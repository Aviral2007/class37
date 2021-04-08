class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

   play(){
    form.hide();
    textSize(30);
    text("Game Begins", 200, 100);
    Player.getplayerInfo();
    if(allplayers!==undefined){
      var displayPosition = 130;
      for(var plr in allplayers){
        if(plr === "player"+ player.index)
        fill("red")
        else
        fill("blue");
        displayPosition += 30;
      text(allplayers[plr].name+ " : "+ allplayers[plr].distance, 120, displayPosition);
      }
      
    }
     if(keyDown(UP_ARROW)&&player.index!==null ){
    
     player.distance += 10; 
     player.update();

     }

  }

}
