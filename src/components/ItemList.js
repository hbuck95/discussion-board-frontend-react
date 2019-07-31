import React, { Component } from 'react';
    
import 'bootstrap/dist/css/bootstrap.css';

import Item from './Item';

export default class ItemList extends Component {

    render() {
        return (
            <div id = "itemList">
                {this.props.data.reverse().map((item) => (<Item key={item._id} func={this.props.func} _id={item._id} username={item.username} content={item.content}/>))};
            </div>
        )
    };

    
}