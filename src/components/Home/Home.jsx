import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './../Page';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

// Components
import CardLandscape from '../Cards/CardLandscape';
import SlideContainer from '../SlideContainer';
import CardSearch from '../Cards/CardSearch';
import CardTalent from '../Cards/CardTalent';
import Button from './../Button';

// Requests
import Artist from '../../requests/Artista/Artista';

function Home() {
  const { user, setUser } = useContext(AuthContext);
  const [artista, setArtista] = useState([]);

  function handleClick() {
    setUser();
    localStorage.removeItem('user');
  }

  useEffect(() => {
    Artist.get('?results=7').then((res) => {
      setArtista(res);
    });
  }, []);

  return (
    <div className="home">
      Welcome Back, {user.email}
      <Button onClick={handleClick}>Log out</Button>
      <CardTalent />
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
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </Grid>
      <br></br>
      <h1 className="titulo_home">Sencillos más recientes</h1>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
        <CardSearch title="uno" subTitle="sub título" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </Grid>
      <br></br>
      <h1 className="titulo_home">Artistas destacados</h1>
      <Grid container direction="row" justify="flex-start" alignItems="flex-start">
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
                title={e.name.first}
                image={e.picture.large}
                infoTalent="Artista"
              />
            </Link>
          ))}
      </Grid>
    </div>
  );
}

export default Home;
