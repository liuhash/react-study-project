import React, {Component} from 'react';
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div>
                你找的页面已经不存在！
                <Link to="/">去首页</Link>
            </div>
        );
    }
}

export default NotFound;