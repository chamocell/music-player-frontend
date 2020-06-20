import React from 'react';

export default function AlbumSong({ song, index }) {
  return (
    <li className={'album-song'}>
      <div className="album-song-index">{index}</div>
      <div className="album-song-title">{song.title}</div>
      <div className="album-song-length">{song.length}</div>
    </li>
  );
}
