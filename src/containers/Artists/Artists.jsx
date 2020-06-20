import Grid from '@material-ui/core/Grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardTalent from '../../components/Cards/CardTalent';
import Search from '../../components/Search/Search';
import SimpleBarReact from 'simplebar-react';
import 'simplebar/src/simplebar.css';

// Requests
import Artist from '../../requests/Artista/Artista';
import genres from '../../Mocks/mock-genres';


const Artists = () => {
  const [artistas, setArtistas] = useState([]);

  useEffect(() => {
    Artist.get('?results=20').then((res) => {
      setArtistas(res);
    });
  }, []);

  return (
    <div className="artists">
      <Grid container direction="row" justify="space-between" alignItems="flex-start">
        <Search search="" />
        <CardTalent image="https://avatars3.githubusercontent.com/u/15000248?s=460&u=2e1dc6e71e73a162aef210b9807890c30bc48c1f&v=4" />
      </Grid>

      {genres.map((genre) => (
        <div className="generoArtistas">
          <h4>{genre.name}</h4>

          <SimpleBarReact
            direction="rtl"
            autoHide={false}
            scrollbarMaxSize="40"
            scrollbarMinSize="20"
          >
            <Grid container justify="flex-start" alignItems="flex-start" wrap="nowrap">
              {artistas?.data?.results?.sort(() => Math.random() - 0.5).map((e, index) => (
                <Link
                  to={`/artists/${e.id.value}`}
                  key={index}
                  style={{ textDecoration: 'none' }}
                >
                  <CardTalent
                    width={200}
                    height={200}
                    title={e.name.first}
                    image={e.picture.large}
                    // infoTalent={`# ${index + 1}`}
                  />
                </Link>
              ))}
            </Grid>
          </SimpleBarReact>
        </div>
      ))}
    </div>
  );
};

export default Artists;
