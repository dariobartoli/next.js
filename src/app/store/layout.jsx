import React from 'react'

export const metadata = {
    title: 'Oficial store',
  }

const StoreLayout = ({children}) => {
  return (
    <>
        <nav>
            <h3>Store space</h3>
            <ul>
                <li>Category</li>
                <li>Products</li>
            </ul>
        </nav>  
        {children}
    </>
  )
}

export default StoreLayout