import React from 'react';
import CardLandscape from '../Cards/CardLandscape';
import SlideContainer from '../SlideContainer';
import CardSearch from '../Cards/CardSearch';

function Home() {
  return (
    <div className="home">
      <SlideContainer slidesToShow={5}>
        <CardLandscape novo data='' image={'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'} />
      </SlideContainer>
      <br></br>
      <h1>Nuevos álbums</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="uno" />
      </SlideContainer>

      <br></br>
      <h1>Nuevos sencillos</h1>
      <SlideContainer slidesToShow={4.2} dots>
        <CardSearch title="uno" />
      </SlideContainer>

    </div>
  );
}

export default Home;
