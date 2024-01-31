import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button, Flex } from "antd";
import { Link } from "react-router-dom";
import "../index.scss";

export const Slide = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slide__firstImg">
          {/* <h3>Слайд 1</h3> */}
          <img
            className="first__img"
            src="https://avatars.mds.yandex.net/i?id=275ae2308d6150933914bbc8baea36b1b531d2a6-10465630-images-thumbs&n=13"
            alt="1-ая картина"
          />
        </div>
        <div>
          <img
            className="first__img"
            src="https://avatars.mds.yandex.net/i?id=85a9261bb46da45aeaf1838ff7915a4da079fe5e-10491961-images-thumbs&n=13"
            alt="2-ая картина"
          />
        </div>
        <div>
          <h3>Слайд 3</h3>
        </div>
      </Slider>
      <Flex>
        <Link to="/">
          <Button type="link">Главная страница</Button>
        </Link>
      </Flex>
    </>
  );
};
