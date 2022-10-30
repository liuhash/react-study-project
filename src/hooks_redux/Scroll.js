import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Scroll extends Component {
    static propsTypes={
        children:PropTypes.func.isRequired
    }
    state={
        top:0,
        left:0
    }
    render() {
        return this.props.children(this.state)
    }
    componentDidMount() {
        window.addEventListener('scroll',this.scroll)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.scroll)
    }
    scroll=()=>{
        this.setState({
            top:window.scrollX,
            left:window.scrollY
        })
    }
}

export default Scroll;