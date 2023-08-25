import React from 'react'
import { useState } from 'react'
import './App.css'

const App = ({ grid }) => {
    const [version, setVersion] = useState(0)

    return (
        <div>
            <div>Click on the red cells</div>
            {grid.map((row, i) => (
                <div key={i}>
                    {row.map((val, j) => (
                        <div
                            key={i * row.length + j}
                            className={`cell ${
                                val ? 'cell-red' : 'cell-green'
                            }`}
                            onClick={() => {
                                if (val === 1) {
                                    dfs(grid, i, j)
                                }
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default App
