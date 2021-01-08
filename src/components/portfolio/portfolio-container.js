import React, {Component} from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {

    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            // isLoading: true,                        // THIS IS JUST A TEST
            data: []
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        this.undoHandlePageTitle = this.undoHandlePageTitle.bind(this);

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        })
    }

    getPortfolioItems(){
        axios
        .get("https://waterburner.devcamp.space/portfolio/portfolio_items")
        .then(response => {
            this.setState({
                data: response.data.portfolio_items
            })
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
            return (<PortfolioItem key = {item.id} item={item}/>);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something else"
        });
    }

    undoHandlePageTitle() {
        this.setState({
            pageTitle: "Welcome to my portfolio"
        });
    }

    render() {
        if (this.state.isLoading) { 
            return <div>Loading...</div>
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>

                {this.portfolioItems()}

                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change title</button>
                <button onClick={this.undoHandlePageTitle}>Undo change title</button>

                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enerprise')}>Enterprise</button>

            </div>
        )
    }
}