import * as actionTypes  from '../../const/index';
import audioPlayer from '../../plugin/audioPlayer';

function musicPlayer (state: object = {audioState: false}, action: any) {
  const audio = audioPlayer.getInstance();
  switch(action.type) {
    case actionTypes.MUSIC_PLAYER.PLAY_MUSIC:
      audio.play();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.STOP_MUSIC:
      audio.pause();
      return Object.assign({}, state, {status: action.payload});
    case actionTypes.MUSIC_PLAYER.SET_SOURCE:
      audio.setSrc(action.payload);
    break;
    case actionTypes.MUSIC_PLAYER.LOAD_SOURCE:
      audio.load();
    break;
  }
  return state;
}

export default musicPlayer;