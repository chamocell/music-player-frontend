import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Menu, MenuItem } from '@material-ui/core';

import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';

import CardLandscape from '../../components/Cards/CardLandscape';
import CardSearch from '../../components/Cards/CardSearch';
import CardTalent from '../../components/Cards/CardTalent';
import Search from '../../components/Search/Search';

// Requests
import Artist from '../../requests/Artista/Artista';
import useUser from '../../hooks/useUser';

function Home() {
  const { user } = useUser();
  const [artista, setArtista] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const avatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const artists = useEffect(() => {
    Artist.get('?results=7').then((res) => {
      setArtista(res);
    });
  }, []);

  return (
    <div className="home">
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Search search={artists} />
        Welcome Back, {user.email}
        <CardTalent
          clickHandler={avatarClick}
          image="https://avatars3.githubusercontent.com/u/15000248?s=460&u=2e1dc6e71e73a162aef210b9807890c30bc48c1f&v=4"
        />
        <Menu
          anchorEl={anchorEl}
          keepMounted
          onClose={handleClose}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Perfil</MenuItem>
          <MenuItem onClick={handleClose}>Mi Cuenta</MenuItem>
          <MenuItem onClick={user.logOut}>Salir</MenuItem>
        </Menu>
      </Grid>
      <h1 className="titulo_home">
        Mis favoritos (
        {artista && artista.data && artista.data.results.length >= 0
          ? artista && artista.data && artista.data.results.length
          : 0}
        )
      </h1>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <CardLandscape
          novo
          data=""
          width={250}
          image={
            'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'
          }
        />
      </Grid>
      <br></br>
      <h1 className="titulo_home">Álbumes más recientes</h1>
      <SimpleBarReact
        direction="rtl"
        autoHide={false}
        scrollbarMaxSize="40"
        scrollbarMinSize="20"
      >
        <Grid className="albumsRecents">
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
        </Grid>
      </SimpleBarReact>
      <br></br>
      <h1 className="titulo_home">Sencillos más recientes</h1>
      <SimpleBarReact
        direction="rtl"
        autoHide={false}
        scrollbarMaxSize="40"
        scrollbarMinSize="20"
      >
        <Grid className="albumsRecents">
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
          <CardSearch title="Mutter" subTitle="Rammstein" />
        </Grid>
      </SimpleBarReact>
      <br></br>
      <h1 className="titulo_home">Artistas destacados</h1>
      <SimpleBarReact
        direction="rtl"
        autoHide={false}
        scrollbarMaxSize="40"
        scrollbarMinSize="20"
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          wrap="nowrap"
        >
          {artista &&
            artista.data &&
            artista.data.results.map((e, index) => (
              <Link
                to={`/artists/${e.id.value}`}
                key={index}
                style={{ textDecoration: 'none' }}
              >
                <CardTalent
                  width={150}
                  height={150}
                  //title={e.name.first}
                  image={e.picture.large}
                  //infoTalent="Artista"
                />
              </Link>
            ))}
        </Grid>
      </SimpleBarReact>
    </div>
  );
}

export default Home;
