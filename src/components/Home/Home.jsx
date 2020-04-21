import React from 'react';
import { Link } from 'react-router-dom';

// Components
import CardLandscape from '../Cards/CardLandscape';
import SlideContainer from '../SlideContainer';
import CardSearch from '../Cards/CardSearch';
import CardTalent from '../Cards/CardTalent';

// Requests
import Artist from '../../requests/Artista/Artista';

function Home() {

  // Data mockeada
  const data = {
      favoritos: [],
  }

  for (let i = 0; i < 6; i++) {
      data.favoritos.push(<CardLandscape key="" novo data='' image={'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'} />)
  }

  const [artista, setArtista] = React.useState([]);

  React.useEffect(() => {
    Artist.get('?results=50').then((res) => {
      setArtista(res);
      })
  }, []);

  return (
    <div className="home">
      <CardTalent />
      <h1 className="titulo_home">Mis Favoritos ({data.favoritos.length >= 0 ? data.favoritos.length : '0'})</h1>
      { 
          data.favoritos.length <= 0 ? <h3 className="no_favoritos">No tiene favoritos agregados</h3> : 
          <SlideContainer slidesToShow={5.2} dots>
            {data.favoritos}
          </SlideContainer>
      }
      <br></br>
      <h1 className="titulo_home">Nuevos álbums</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </SlideContainer>

      <br></br>
      <h1 className="titulo_home">Nuevos sencillos</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="uno" subTitle="sub título"/>
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </SlideContainer>

      <br></br>
      <h1 className="titulo_home">Artistas destacados</h1>
      <SlideContainer slidesToShow={12} dots>
        {artista && artista.data && artista.data.results.map(e =>
        <Link to={`/artistas/${e.id.value}`} key="">
          <CardTalent key={e.id.value}  width={80} height={80} title={e.name.first} image={e.picture.medium} infoTalent={e.gender}/>
        </Link>
        )}
      </SlideContainer>
      

    </div>
  );
}

export default Home;
