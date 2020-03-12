import React, { Component } from 'react'

class vistaReact extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {t} = this.props;
        return (
            <div>
                <header className="App-header">
                    <p>
                       {t('Edit')}  <code>src/App.js</code> and save to reload.</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React</a>
                    <button type="button" className="btn btn-primary">Lenguaje</button>
                </header>
            </div>
        )
    }
}


export default vistaReact
