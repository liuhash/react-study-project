import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Scroll from "./hooks_redux/Scroll";

class App extends Component {
    render() {
        return(
            <div style={{height:10000}}>
                <h1>根组件</h1>
                <Scroll >
                    {
                        ({left,top})=>(<div style={{position:'fixed'}}>{left}-{top}</div>)
                    }
                </Scroll>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
