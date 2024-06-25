'use client'
import React, { useState } from 'react'

const HomePage = () => {
    const [title, setTitle] = useState('HomePage')
    //todas las funcionalidades que se ejecutan desde el navegador, como los states, hooks, eventlisteners, windows. Hay que passar
    //el server componente a un client component con 'use client'
    //los metadata solo funcionan en los server component
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={() => (alert('hola mundo'))}>
            boton
        </button>
    </div>
  )
}

export default HomePage