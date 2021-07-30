import React, { Component } from 'react';
import axios from 'axios';

// banner_image_url: "https://devcamp-space.s3.amazonaws.com/UU1oX8N2ZGwfpEPCECKusheF?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20…"
// category: "test_1"
// column_names_merged_with_images: ["id", "name", "description", "url", "category", "position", "thumb_image", "banner_image", "logo"] (9)
// description: "This is description for item 1. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi gravida libero nec velit. Morbi scelerisqu…"
// id: 23682
// logo_url: "https://devcamp-space.s3.amazonaws.com/PJ34MF5kfSfgeDzXMjY1uBnf?response-content-disposition=inline%3B%20filename%3D%22crondose.png%22%3B%20…"
// name: "Portfolio item 1 (CronDose)"
// position: 4
// thumb_image_url: "https://devcamp-space.s3.amazonaws.com/eJvJX9nWA7XS8hbz8Df97BQk?response-content-disposition=inline%3B%20filename%3D%22crondose.jpg%22%3B%20…"
// url: "https://apple.com"

export default class PortfolioDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            portfolioItem: {}
        };
    }

    componentWillMount() {
        this.getPortfolioItems();
    }

    getPortfolioItems() {
        axios
            .get(`https://waterburner.devcamp.space/portfolio/portfolio_items/${
                    this.props.match.params.slug
                }`, 
                { withCredentials: true }
            )
            .then(response => {
                console.log('response', response);
                
                this.setState({
                    portfolioItem: response.data.portfolio_item
                })
            })
            .catch(error => {
                console.log('getPortfolioItems error', error);
            });
    }

    render() {
        const {            
            banner_image_url,
            category,
            column_names_merged_with_images,
            description,
            id,
            logo_url,
            name,
            position,
            thumb_image_url,
            url,
        } = this.state.portfolioItem;
        
        const bannerStyles = {
            backgroundImage: "url(" +banner_image_url + ")",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center"
        };

        const logoStyles = {
            width: "200px"
        };

        return (
            <div className="portfolio-detail-wrapper">
                <div className="banner" style={bannerStyles}>
                    <img src={logo_url} alt="logo" style={logoStyles}/>
                </div>
                
                <div className="portfolio-detail-description-wrapper">
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                    
                <div className="bottom-content-wrapper">
                    <a href={url} className="site-link" target="_blank">
                        Visit {name}
                    </a>
                </div>
            </div>
        );
    }
}