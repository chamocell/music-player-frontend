import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import useUser from '../../hooks/useUser';
import AlbumSongs from '../../components/AlbumSongs';
import AlbumInfo from '../../components/AlbumInfo';

export default function Album() {
  const { user } = useUser();
  const { id } = useParams();
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch album...

    const songs = [
      { id: 1, title: 'Broken Whiskey Glass', length: 234 },
      { id: 2, title: 'Big Lie', length: 208 },
      { id: 3, title: 'Deja Vu', length: 234 },
      { id: 4, title: 'No option', length: 180 },
      { id: 5, title: 'Cold', length: 269 },
      { id: 6, title: 'White Inversion', length: 257 }
    ];

    const artist = { name: 'Post Malone' };

    const album = {
      id,
      title: 'Stoney',
      year: 2016,
      imageUrl: 'https://i.scdn.co/image/ab67616d00001e0255404f712deb84d0650a4b41',
      artist,
      songs
    };

    setAlbum(album);
    setLoading(false);
  }, [id]);

  if (loading) return null;

  return (
    <div className="album">
      <section className="album-info">
        <AlbumInfo album={album} />
      </section>
      <section className="album-songs">
        <AlbumSongs songs={album.songs} />
      </section>
    </div>
  );
}
