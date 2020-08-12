import React from 'react';

const Map = ({ he }) => {
    return (
        <div className={he ? 'container right-panel col-12 col-lg-6 order-2 ' : 'container right-panel col-12 col-lg-6  '}>
            <div className={he ? "map container " : ' map container justify-content-end'}>
                <iframe
                    defer
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3379.017612591515!2d34.82635138449781!3d32.122826624358595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4929572d0da3%3A0x7e0f7b453972932d!2sSaar%20the%20barber!5e0!3m2!1siw!2sil!4v1596541789336!5m2!1siw!2sil"
                    width="500"
                    height="350"
                    frameBorder="0"
                    title="barbershop"
                    allowFullScreen={false}
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>)
};

export default Map