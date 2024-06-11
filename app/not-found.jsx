import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h4>404</h4>
        <p>Pagina no encontrada</p>
        <Link href='/'>Volver</Link>
    </div>
  )
}

export default NotFound