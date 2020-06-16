import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from 'react-slick';
import './react-slick.scss';

const useStyles = makeStyles((theme) => ({
  typography: ({ width }) => ({
    color: 'white',
    marginTop: 10,
    width: width || 290
  })
}));

const SlideContainer = ({
  children,
  dots = false,
  infinite = false,
  focusOnSelect = true,
  speed = 500,
  slidesToShow = 4.1,
  slidesToScroll = 1
}) => {
  const settings = {
    dots: dots,
    infinite: infinite,
    focusOnSelect: focusOnSelect,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // const classes = useStyles({ width, height });

  return <Slider {...settings}>{children}</Slider>;
};
export default SlideContainer;
