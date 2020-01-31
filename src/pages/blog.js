import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';

const Blog = () => {
    return (
        <Layout title="Blog" description="Check out my blog to read my articles">
            <Container>
                <p>No Post to display.</p>
            </Container>
        </Layout>
    )
}

export default Blog;