import React, { Component } from 'react'
// import { useTranslation } from 'react-i18next';
import { withNamespaces } from 'react-i18next';
import i18n from './i18n';

class vistaReact extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
          }

        return (
            <div>
                <header className="App-header">
                    <p>
                    {this.props.language('Edit')}<code>src/App.js</code>{this.props.language('Save')}</p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React</a>
                    <button type="button" onClick={() => changeLanguage('es')} className="btn btn-primary">Lenguaje</button>
                </header>
            </div>
        )
    }
}
export default vistaReact