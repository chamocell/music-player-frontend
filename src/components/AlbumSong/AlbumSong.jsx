import React from 'react';

export default function AlbumSong({ song, index, className }) {
  return (
    <li className={'album-song ' + className}>
      <div className="album-song-index">{index}</div>
      <div className="album-song-title">{song.title}</div>
      <div className="album-song-length">{song.length}</div>
    </li>
  );
}
