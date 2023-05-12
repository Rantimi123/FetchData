import React from 'react'

const Fetch = () => {
    const fetchData = () => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(respond => respond.json())
        .then(respond => console.log(respond))
        .catch(error => console.log(error))
    }
  return (
    <div>
<button onClick ={fetchData}>Catch Data</button>
    </div>
  )
}

export default Fetch