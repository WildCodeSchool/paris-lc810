import React, {Component} from 'react';
import "./Item.css";
class Item extends Component {
 render () {
   return (
     <div className="ItemH2">
       <h2>{this.props.title}</h2>
     </div>
   )
 }
}

export default Item;