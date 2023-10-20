import React from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <>
    <div className='flex gap-3 mb-2 ml-2'>
    <Link to={'/'}>Listar</Link>
    <Link to={'/criar'}>Adicionar</Link>
    <Link to={'/procurar'}>Procurar</Link>
    </div>
    </>
  )
}
