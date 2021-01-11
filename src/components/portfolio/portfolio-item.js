import React from "react";
import { Link } from "react-router-dom";

export default function(props) {
    //data that we'll need:
    // - background pic: thumb_image_url
    // - logo: logo_url
    // - description: description
    // - id: id

      const { id, description, thumb_image_url, logo_url} = props.item;
    return (
    <div className="portfolio-item-wrapper">

      <div 
        className="portfolio-img-background"
        style={{backgroundImage: "url(" + thumb_image_url + ")"}}
      />

      <div className="img-text-wrapper">
        <div className="logo-wrapper">
          <img src={logo_url} />
        </div>

        <div className="subtitle">{description}</div>
      </div>
    </div>
  );
}