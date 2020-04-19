import React from 'react';

// Components
import Button from './components/Button';
import CardTalent from './components/Cards/CardTalent';
import CardSearch from './components/Cards/CardSearch';
import SlideContainer from './components/SlideContainer';
import CardLandscape from './components/Cards/CardLandscape';

function App() {
  
  let lista = [
    {
      nombre: 'Rammstein',
      genero: 'Metal Industrial',
      image: 'http://clarovideocdn7.clarovideo.net/GRACENOTE/TALENT/3158/EXPORTACION_WEB/3158.jpg'
    }
  ]
  return (
    <div>
      <Button />

      <h2>ARTISTA</h2>
      <CardTalent title={lista[0].nombre} infoTalent={lista[0].genero} image={lista[0].image} />
      <CardLandscape novo data='' image={'http://clarovideocdn1.clarovideo.net/pregeneracion//cms/images/202002/75549_Default_Legion-Now_03181244.jpg?size&imwidth=290'} />
      <h2>CARROUSEL UNO</h2>
      <SlideContainer slidesToShow={5} dots>
        <CardSearch title="uno" />
        <CardSearch title="dos" />
        <CardSearch title="tres" />
        <CardSearch title="cuatro" />
        <CardSearch title="cinco" />
        <CardSearch title="seis" />
      </SlideContainer>

      <h2>CARROUSEL DOS</h2>
      <SlideContainer slidesToShow={5} dots>
        <CardSearch title="uno" />
        <CardSearch title="dos" />
        <CardSearch title="tres" />
        <CardSearch title="cuatro" />
        <CardSearch title="cinco" />
        <CardSearch title="seis" />
      </SlideContainer>
    </div>
  );
}

export default App;
