import React from 'react';
import CardLandscape from '../Cards/CardLandscape';
import SlideContainer from '../SlideContainer';
import CardSearch from '../Cards/CardSearch';
import CardTalent from '../Cards/CardTalent';

function Home() {

  // Data mockeada
  const data = {
      favoritos: [],
  }

  for (let i = 0; i < 6; i++) {
      data.favoritos.push(<CardLandscape key="" novo data='' image={'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'} />)
  }

  return (
    <div className="home">
      <CardTalent />
      <h1 className="titulo_home">Mis Favoritos</h1>
      <SlideContainer slidesToShow={5} dots>
        {data.favoritos}
      </SlideContainer>
      <br></br>
      <h1 className="titulo_home">Nuevos álbums</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="Mutter" subTitle="Rammstein" />
      </SlideContainer>

      <br></br>
      <h1 className="titulo_home">Nuevos sencillos</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="uno" subTitle="sub título"/>
      </SlideContainer>

    </div>
  );
}

export default Home;
