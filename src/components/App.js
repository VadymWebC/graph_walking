import React from 'react'
import { useState } from 'react'
import './App.css'

const App = ({ grid }) => {
    const [version, setVersion] = useState(0)

    function dfs(grid, y, x) {
        grid[y][x] = 0

        for (let [dx, dy] of [
            [0, 1],
            [1, 0],
            [0, -1],
            [-1, 0],
        ]) {
            const nextX = x + dx
            const nextY = y + dy

            if (
                withinGrid(grid.length, grid[0].length, nextX, nextY) &&
                grid[nextY][nextX] === 1
            ) {
                dfs(grid, nextY, nextX)
            }
        }
    }

    function withinGrid(h, w, x, y) {
        return 0 <= x && x < w && 0 <= y && y < h
    }

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
                                setVersion(version + 1)
                            }}
                        ></div>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default App
