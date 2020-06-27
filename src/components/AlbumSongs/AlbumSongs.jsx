import React from 'react';
import AlbumSong from '@components/AlbumSong';

export default function AlbumSongs({ songs }) {
  return (
    <ul className="album-songs-box">
      <li className="album-song album-song-heading">
        <div className="album-song-index">#</div>
        <div className="album-song-title">Titulo</div>
        <div className="album-song-length">Duración</div>
      </li>
      {songs.map((song, index) => (
        <AlbumSong key={song.id} index={index + 1} song={song} />
      ))}
    </ul>
  );
}
