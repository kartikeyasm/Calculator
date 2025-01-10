import React from 'react'

const History = ({ history }) => {
  return (
    <div className="bg-gray-700 text-white p-4 mt-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Calculation History</h2>
      <ul className="space-y-2">
        {history.map((data, index) => {
          return (
            <li key={index} className="bg-gray-800 p-2 rounded-md hover:bg-gray-600 transition-colors">
              <span>{data[0]}</span> <span className="text-green-400">= {data[1]}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default History
