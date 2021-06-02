import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';


import '../assets/scss/mardeurano.scss';
import '../assets/scss/style.scss';
import Diamond from './diamond';
import ModalDiamond from './modalDiamond';

export default function LandingPage() {

  const [show, setShow] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [loading, setLoading] = useState(false);

  const [loadingImages, setloadingImages] = useState(true);

  const [promotion, setPromotion] = useState(true);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setTimeout(() => { setPromotion(false) }, 45000);
  }, []);

  const handleOnClick = () => {

    const randomNumber = Math.ceil(1 + Math.random() * (63 - 1));

    const image = `./static/images/landingimages/image-${randomNumber}.png`;

    setCurrentImage(image);
    setShow(true);
    setLoading(true);
  };

  const loadingImg = () => {
    setLoading(false);
  }

  const images = {
    cristaleslluvia01: './static/images/cristaleslluvia01.png',
    cristaleslluvia02: './static/images/cristaleslluvia02.png',
    cristaleslluvia03: './static/images/cristaleslluvia03.png',
    cristaleslluvia04: './static/images/cristaleslluvia04.png',
    cristaleslluvia05: './static/images/cristaleslluvia05.png',
    landingLogo: './static/images/Urano600.png',
    shopImg: './static/images/Shop.png',
    olasImg: './static/images/olas.gif',
  }

  let imagesLength = Object.keys(images).length;

  const onLoadImgages = () => {
    imagesLength -= 1;

    (imagesLength < 0) &&
      setTimeout(() => { setloadingImages(false); }, 2000);

  }

  return <>
    <main className="index">

      <div>

        <Diamond img={images.cristaleslluvia01} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />
        <Diamond img={images.cristaleslluvia01} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />
        <Diamond img={images.cristaleslluvia02} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />
        <Diamond img={images.cristaleslluvia03} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />
        <Diamond img={images.cristaleslluvia04} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />
        <Diamond img={images.cristaleslluvia05} selectDiamond={handleOnClick} onLoadImgages={onLoadImgages} />

        <div className="landing-logo">
          <img src={images.landingLogo} alt="logo mar de urano" className="landing-logo-img" onLoad={onLoadImgages}></img>
        </div>


        <div className="link">
          {(promotion) &&
            <div className="promotion">
              <img src={'./static/images/Instrucciones.png'} alt="instructions" className="promotion-img" />
              <div className="arrow bounce">
                <i className="fa fa-arrow-down fa-2x"></i>
              </div>
            </div>
          }

          <Link to="/home">
            <img src={images.shopImg} alt="img" className="link-img" onLoad={onLoadImgages} />
          </Link>
        </div>

        <div className="contentOlas">
          <img
            className="olas"
            src={images.olasImg}
            alt="waves"
            onLoad={onLoadImgages}
          />
        </div>


        {/* <div className="contentBosque">
          <img
            className="bosque"
            src={'./static/images/bosque.png'}
            alt="bosque"
          />
        </div> */}

        {/* <div className="DIVGuacamaya">
          <a href="/#" onClick={handleOnClick} data-target="#Guacamaya">
            <img
              className="Guacamaya"
              src={'./static/images/Guacamaya.gif'}
              alt="Guacamaya"
            />
          </a>
        </div> */}

        {/* 
        <img
          className="splash1"
          src={'./static/images/Splash_GIF.gif'}
          alt="splash"
        />
        <img
          className="splash2"
          src={'./static/images/Splash_GIF.gif'}
          alt="splash"
        />
        <div className="contentTiburcio">
          <img
            className="tiburcio"
            src={'./static/images/tiburcio.png'}
            alt="shark"
          />
        </div> */}

      </div>

      {(loading || loadingImages) &&
        <div className={`loader-content ${loadingImages ? 'loader-content-images' : 'loader-content-diamonds'}`}>
          <div className="loader"></div>
          <h3 className="loader-content-text"><b>MAR</b> de <b>URANO</b></h3>
        </div>
      }

      <ModalDiamond handleClose={handleClose} show={show} currentImage={currentImage} loadingImg={loadingImg} loading={loading} />
    </main >

  </>
}

