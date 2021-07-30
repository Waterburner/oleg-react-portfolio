import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            // isLoading: true,                        // THIS IS JUST A TEST
            data: []
        };

        // this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        // this.undoHandlePageTitle = this.undoHandlePageTitle.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        if (filter === "clear_filters") {
            this.getPortfolioItems();
        } else { 
         this.getPortfolioItems(filter);
        }
    }

    getPortfolioItems(filter = null) {
        axios
        .get("https://waterburner.devcamp.space/portfolio/portfolio_items")
        .then(response => {
            if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                })
            } else {
                this.setState({
                    data: response.data.portfolio_items
                });
            }
        })
        .catch(error => {
            console.log(error);
        });
    }

    portfolioItems() {
        //data that we'll need:
        // - background pic thumb_image_url
        // - logo
        // - description: description
        // - id: id
        
        return this.state.data.map(item => {
            // debugger;
            return <PortfolioItem key={item.id} item={item} />;
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    // handlePageTitleUpdate() {
    //     this.setState({
    //         pageTitle: "Something else"
    //     });
    // }

    // undoHandlePageTitle() {
    //     this.setState({
    //         pageTitle: "Welcome to my portfolio"
    //     });
    // }

    render() {
        if (this.state.isLoading) { 
            return <div>Loading...</div>;
        }

        return (
            <div className="homepage-wrapper">
                    <div className="filter-links">
                        <button className="btn" onClick={() => this.handleFilter("eCommerce")}>
                            eCommerce
                        </button>
                        <button className="btn" onClick={() => this.handleFilter("Scheduling")}>
                            Scheduling
                        </button>
                        <button className="btn" onClick={() => this.handleFilter("Enterprise")}>
                            Enterprise
                        </button>

                        <button className="btn" onClick={() => this.handleFilter("clear_filters")}>
                            All
                        </button>
                    </div>

                <div className="portfolio-items-wrapper">
                    {this.portfolioItems()}
                </div>
            </div>
        );
    }
}
