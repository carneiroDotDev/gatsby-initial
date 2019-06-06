import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import blogStyles from "../../styles/pagesStyle/blogStyles.module.scss"
import Head from "../components/Head"
import Layout from "../components/Layout"

export default function blog(): JSX.Element {
  const content: any = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: ASC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const fetchPosts = (data: any): JSX.Element => {
    return (
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((post: any) => (
          <li className={blogStyles.post} key={post.node.slug}>
            <Link to={`/blog/${post.node.slug}`} id={`${post.node.slug}`}>
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
      <Head title="Blog" />
      <h1>Blog</h1>
      <p>Posts will show up here later on.</p>
      {fetchPosts(content)}
    </Layout>
  )
}
