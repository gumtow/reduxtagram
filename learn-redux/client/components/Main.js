import React from 'react';
import { Link } from 'react-router';


const Main = React.createClass({
    render() {
        return(
            <div>
                <h1>
                    <Link to="/">Reduxtagram 2.0</Link>
                </h1>
                {React.cloneElement(this.props.children, this.props)}
            </div>
        )
    }
})

export default Main;