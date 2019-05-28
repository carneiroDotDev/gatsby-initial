import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "../../styles/pagesStyle/blogStyles.module.scss"

export default function blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  const fetchPosts = data => {
    return (
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(post => (
          <li className={blogStyles.post}>
            <Link
              to={`/blog/${post.node.fields.slug}`}
              id={`${post.node.fields.slug}`}
            >
              <h2>{post.node.frontmatter.title}</h2>
              <p>{post.node.frontmatter.date}</p>
            </Link>
          </li>
        ))}
      </ol>
    )
  }

  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      {fetchPosts(data)}
    </Layout>
  )
}
