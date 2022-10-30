import React, {Component} from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('1',"constructor")
    }
    render() {
        console.log("2","render")
        return (
            <div>
                LifeCycle
            </div>
        );
    }
    componentDidMount() {
        console.log("3","componentdidmount")
    }
}

export default LifeCycle;