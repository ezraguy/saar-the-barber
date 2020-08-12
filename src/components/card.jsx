import React from 'react';
import InstagramEmbed from "react-instagram-embed";

const Card = ({ post }) => {
    return (
        <div
            key={post.id}
            data-aos="fade-down"
            data-aos-delay={post.delay}
            className="post col-xl-3 col-lg-5 col-md-5 col-sm-10 col-xs-12"
        >
            <InstagramEmbed
                url={post.url}
                maxWidth={320}
                hideCaption={true}
                protocol=""
                containerTagName="div"
                injectScript
            />
        </div>

    )

}

export default Card