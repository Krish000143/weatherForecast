import React from 'react'

function Button(props) {
  return (
    <>

    <div>
      <button className="text-white bg-blue-800 hover:bg-blue-900 focus:outline-none font-medium rounded-lg text-sm px-4 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 outline-none" onClick={props.onClick} > {props.value}</button>
    </div>

    </>
  )
}

export default Button