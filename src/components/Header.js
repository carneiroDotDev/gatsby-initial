import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from '../../styles/componentsStyle/header.module.scss'

export default function Header() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }`)

    return (
        <header className={headerStyles.header}>
            <h1> {data.site.siteMetadata.title} </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/"> Home </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/blog"> Blog </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/about"> About </Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} activeClassName={headerStyles.navItemActive} to="/contact"> Contact </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
