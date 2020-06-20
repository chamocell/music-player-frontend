import React from 'react';
import Song from '../AlbumSong';

export default function AlbumSongs({ songs }) {
  return (
    <ul className="album-songs-box">
      <Song
        className="album-song-heading"
        song={{ title: 'Titulo', length: 'Duración' }}
        index="#"
      />
      {songs.map((song, index) => (
        <Song key={song.id} index={index} song={song} />
      ))}
    </ul>
  );
}
