import React, { Component } from 'react';
class David extends Component {
    render() {
        const {name,AntiheroName} = this.props
        return (
            <div>
                <h2>This Is The Head of Class Component</h2>
                <h1>{name} a.k.a {AntiheroName}</h1>
            </div>
        )
    }
}
export default David

export const lobo = ({name}) => {
    // console.log(name);
    return <h2>There is "{name}" in the Console</h2>
}
