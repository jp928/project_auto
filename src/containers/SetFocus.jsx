import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchAction from '../actions';

require('../../style/_base/app.scss');

export default class SetFocus extends Component {

    constructor(props){
        super(props);
        this.state = { searchString: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        this.setState({ searchString: e.target.value });
         const { searchAction } = this.props;
         searchAction(this.state.searchString);
    }

    renderList() {
        const {sites} = this.props.sites;
        return sites.map((site, index) => {
            const startURL = "http://" + site.siteUrl;
            return (
                <li key={index}>
                    <a href={startURL} className="link">{site.siteUrl}</a>
                    <span className="description">{site.description}</span>
                </li>
            );
        });
    }

    onKeyDown(event) {
        console.log("keyDown:  " + event.key);
        if (event.key === 'Escape')
            this.setState({searchString: ''
        });
    }

    viewList() {
        if(this.state.searchString.length > 0) {
            return 'show';
        }
        return 'hide';
    }

    render() {
        return (
            <div>
                <div id="zip-lookup">
                    <input type="text" className="" 
                    onChange={this.handleChange}
                    onKeyDown={this.onKeyDown.bind(this)}
                    placeholder="Type here" /><i id="filter_submit" className="fa fa-search" aria-hidden="true"></i>
                    <ul className={this.viewList()}>
                        {this.renderList()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return { 
    sites: state.sites,
    categories: state.categories
  }
}

function mapDispatchProps(dispatch) {
    return bindActionCreators(searchAction, dispatch);
}

export default connect(mapStateToProps, mapDispatchProps)(SetFocus);