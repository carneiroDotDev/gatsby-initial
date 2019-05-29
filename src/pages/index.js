import React from "react"
import Layout from "../components/Layout"
import { Link } from 'gatsby'
import Head from '../components/Head'

export default () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Hello</h1>
            <h2>I am Luiz Carneiro, a front-end developer.</h2>
            <p> Need a developer ? <Link to="/contact"> Contact me!!!</Link></p>
        </Layout>
    )
}
