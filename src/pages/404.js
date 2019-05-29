import React from 'react'
import Layout from '../components/Layout';
import Head from '../components/Head'
import { Link } from 'gatsby';

export default function NotFound() {
    return (
        <Layout>
            <Head title="404" />
            <h1> Page not found</h1>
            <p> <Link to="/"> Head home </Link></p>
        </Layout>
    )
}
