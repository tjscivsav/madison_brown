import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'


export default function ExploreGallery({open, setOpen, images}) {

    const [selectedImage, setSelectedImage] = useState(images[0].galleryImage)

    return (
        <div className={ open ? "explore_gallery_open" : "explore_gallery_close"}>
            <div className="explore_gallery_background" onClick={() => setOpen(false)} />
            
            <div className="explore_gallery_images">
                <div className="explore_gallery_close_button">
                    <a onClick={() => setOpen(false)}>X</a>
                </div>
                <div className="explore_gallery_image_main">
                    <GatsbyImage
                        image={getImage(selectedImage)}
                        imgClassName="explore_gallery_image_main_img"
                        style={{ height: selectedImage.childImageSharp.gatsbyImageData.width / selectedImage.childImageSharp.gatsbyImageData.height > 1 ? `auto` : "100%", width: '', aspectRatio: `${selectedImage.childImageSharp.gatsbyImageData.width / selectedImage.childImageSharp.gatsbyImageData.height}` }}
                        imgStyle={{ aspectRatio: selectedImage.childImageSharp.gatsbyImageData.width / selectedImage.childImageSharp.gatsbyImageData.height, width: "fit-content" }}
                        objectFit="cover"
                    />
                </div>
                <div className="explore_gallery_select">
                    <div className="explore_gallery_select_row">
                        {images.map((val, ind) => (
                            <div className="explore_gallery_select_img_container" onClick={() => setSelectedImage(val.galleryImage)}>
                                {/* <img src={TestImage} className="explore_gallery_select_img" /> */}
                                
                                <GatsbyImage style={{height: "100%"}} image={getImage(val.galleryImage)} imgClassName="explore_gallery_select_img" />

                            </div>
                            
                        ))}
                        
                       


                    </div>
                </div>
            </div>

        </div>
    )
}