import React from "react"
import Layout from "../components/Layout"
import { useStaticQuery, graphql, Link } from "gatsby"
import blogStyles from "../../styles/pagesStyle/blogStyles.module.scss"

export default function blog() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (sort: {
      fields: publishedDate,
      order: ASC
    }) {
      edges {
        node {
          title
          slug
          publishedDate (formatString: "MMMM Do, YYYY")
        }
      }
    }
  }
  `)

  const fetchPosts = data => {
    return (
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map(post => (
          <li className={blogStyles.post} key={post.node.slug}>
            <Link
              to={`/blog/${post.node.slug}`}
              id={`${post.node.slug}`}
            >
              <h2>{post.node.title}</h2>
              <p>{post.node.publishedDate}</p>
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
