import React from 'react'

const App = ({ grid }) => {
    return (
        <div>
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
