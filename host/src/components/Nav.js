import React from 'react'
import { Link } from 'react-router-dom'

const pages = ['buttons', 'img', 'list']

const makeLink = route => (
  <li key={route}>
    <Link to={`/${route}`}>{route}</Link>
  </li>
)

const links = pages.map(makeLink)

const Nav = () => <ul>{links}</ul>

export default Nav