import React from 'react';


// import '../assets/scss/_diamond.scss';

export default function Diamond({ img, selectDiamond, onLoadImgages }) {

    return (
        <div className="diamond">
            <a href="/#" onClick={selectDiamond}>
                <img
                    className="diamond-img"
                    src={img}
                    alt="diamond"
                    onLoad={onLoadImgages}
                />
            </a>
        </div>
    )
}

// export default diamond;