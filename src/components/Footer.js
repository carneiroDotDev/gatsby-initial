import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import footerStyles from '../../styles/componentsStyle/footer.module.scss'

export default function Footer() {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title,
            author
          }
        }
      }
    `)
    return (
        <footer className={footerStyles.footer}>
            <p>Created by {data.site.siteMetadata.author}, ©2019.</p> 
        </footer>
    )
}
