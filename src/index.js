import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
    <App
        grid={[
            [1, 0, 0, 1],
            [0, 0, 1, 1],
            [1, 0, 0, 1],
        ]}
    />,
    document.getElementById('root')
)
