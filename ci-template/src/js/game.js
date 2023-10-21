import Character from "./domain";
export default Game;
export class GameSavingData {};
export {readGameSaving};
export {writeGameSaving};


class Game {
    start() {
      console.log('game started');
    }
  }
  
  class GameSavingData {
  }
  
  function readGameSaving() {
  }
  
  function writeGameSaving() {
  }
  