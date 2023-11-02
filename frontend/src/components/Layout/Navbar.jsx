import React from 'react'
import { Link } from 'react-router-dom'
import { navItems } from '../../static/data'
import styles from '../../styles/styles'

const Navbar = ({active}) => {
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
         {
            navItems && navItems.map((i,index) => (
                <div className="flex ">
                    <Link to={i.url}
                    className={`${active === index + 1 ? "text-yellow-300 " : "  text-yellow-400 "} flex items-center justify-center text-md 800px:h-[50px] 800px:pb-0 font-[500] px-4 cursor-pointer}`}
                    >
                    {i.title}
                    </Link>
                </div>
            ))
         }
    </div>
  )
}

export default Navbar