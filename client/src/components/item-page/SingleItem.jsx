import React from "react";
import {Link} from "react-router-dom";

const SingleItem = props => (
  <div>
    <Link to={`/item/${props.item.id}`} >
      <span id='product' onClick={props.setProduct} >{`${props.item.name} ${props.item.price}`}</span>
    </Link>
    <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button_count&size=small&mobile_iframe=true&width=78&height=20&appId" width="78" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
  </div>
);

export default SingleItem;

//onClick={this.setProduct}
