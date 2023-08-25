import React from 'react'
import './App.css'

const App = ({ grid }) => {
    return (
        <div>
            <div>Click on the red cells</div>
            {grid.map((row, i) => (
                <div key={i}>
                    {row.map((val, j) => (
                        <div key={i * row.length + j} className="cell"></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default App
