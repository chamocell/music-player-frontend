import React from 'react';
import { ReactComponent as NextIcon } from './../../assets/icons/next.svg';
import { ReactComponent as PauseIcon } from './../../assets/icons/pause.svg';
import { ReactComponent as PlayIcon } from './../../assets/icons/play.svg';
import { ReactComponent as PreviousIcon } from './../../assets/icons/previous.svg';
import { ReactComponent as RepeatIcon } from './../../assets/icons/repeat.svg';
import { ReactComponent as ShuffleIcon } from './../../assets/icons/shuffle.svg';

function MusicPlayer({ musicPlayerState: state }) {
  function togglePlaying() {
    state.setPlaying(!state.playing);
  }

  return (
    <div className="music-player-box">
      {state.active && (
        <div className="music-player">
          <MusicPlayerIcon icon={<ShuffleIcon />} />
          <MusicPlayerIcon icon={<PreviousIcon />} />
          <MusicPlayerIcon
            icon={state.playing ? <PauseIcon /> : <PlayIcon />}
            extraClasses="music-player-icon--toggle-play"
            onClick={togglePlaying}
          />
          <MusicPlayerIcon icon={<NextIcon />} />
          <MusicPlayerIcon icon={<RepeatIcon />} />
        </div>
      )}
    </div>
  );
}

function MusicPlayerIcon({ icon, extraClasses, ...rest }) {
  return (
    <span {...rest} className={'music-player-icon ' + extraClasses}>
      {icon}
    </span>
  );
}

export default MusicPlayer;
