import React, { useContext } from 'react';

import { ReactComponent as HomeIcon } from './../../assets/icons/home.svg';
import { ReactComponent as PictureIcon } from './../../assets/icons/image.svg';
import { ReactComponent as UserIcon } from './../../assets/icons/user.svg';
import { ReactComponent as MusicIcon } from './../../assets/icons/music.svg';

import { MusicPlayerContext } from '../../containers/Page';

import Button from '../../components/Button';
import SidebarItem from '../../components/SidebarItem/SidebarItem';
import SidebarItemList from '../../components/SidebarItemList/SidebarItemList';

function Sidebar({ title }) {
  const { active, setActive } = useContext(MusicPlayerContext);

  function toggleMusicPlayer() {
    setActive(!active);
  }

  return (
    <nav className="sidebar">
      {title && <h3 className="sidebar-title">{title}</h3>}
      <SidebarItemList heading="General">
        <SidebarItem exact href="/" icon={HomeIcon}>
          Inicio
        </SidebarItem>
        <SidebarItem href="/albums" icon={PictureIcon}>
          Álbumes
        </SidebarItem>
        <SidebarItem href="/artists" icon={UserIcon}>
          Artistas
        </SidebarItem>
      </SidebarItemList>

      <SidebarItemList heading="Playlist">
        <SidebarItem href="/favourites" icon={MusicIcon}>
          Mis favoritas
        </SidebarItem>
      </SidebarItemList>
      <Button onClick={() => toggleMusicPlayer()}>Toggle Music Player</Button>
    </nav>
  );
}

export default Sidebar;
