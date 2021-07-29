import React, { Component } from 'react';
import aboutImg from "../../../static/assets/img/about/about_img.jpg";
// import aboutImg from "http://www.themarketingsage.com/wp-content/uploads/2015/08/about-me-leon-severan-we-buy-houses.jpg";

export default function() {
    return (
        <div className="about-page-wrapper">
            <div className="content-page-wrapper">
                <div 
                    className="left-column about-image"
                    style={{
                        background: "url(" + aboutImg + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }} 
                >
                    {/* <img src={aboutImg} alt="Oleg's picture" /> */}
                </div>

                <div className="right-column">
                    <div className="about-me">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolores est quasi nostrum possimus repellat harum, ipsam, debitis incidunt ad in nesciunt autem ratione? Quis, commodi quisquam tempora similique minima quos animi earum consectetur sunt pariatur accusamus fugiat atque minus at provident ad. Doloremque officiis, vel culpa magni tempora nulla maxime deserunt harum, qui ut cupiditate quibusdam, natus laudantium recusandae nihil facilis delectus tenetur? Necessitatibus ab reiciendis eius praesentium, adipisci cumque vero error consectetur, a, atque earum consequuntur nisi culpa dolorem! Corporis, hic! Sapiente, minus nulla voluptatum necessitatibus corporis totam, natus consectetur cupiditate esse, magni est! Iure quam maiores eos. Quos magnam nesciunt, unde nemo explicabo ipsum, distinctio voluptate sint beatae delectus quia laboriosam mollitia. Illo nesciunt, nostrum animi illum repellendus vero minus sint, quasi qui deserunt quo?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}