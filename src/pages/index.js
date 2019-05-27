import React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'

export default () => {
    return (
        <Layout>
            <h1>Hello</h1>
            <h2>I am Luiz Carneiro, a front-end developer.</h2>
            <p> Need a developer ? <Link to="/contact"> Contact me.</Link></p>
        </Layout>
    )
}
