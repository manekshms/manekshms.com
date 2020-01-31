import React from "react"
import { css } from '@emotion/core'; 

import Layout from '../components/layout';
import Container from '../components/container';

export default () => {
    return (
        <Layout>
            <div>
                <Container>
                    <h2 css={css`color: #424242`}>About Me</h2>
                    <p>I am a Full Stack Developer living in India Kerala God's Own Country <span aria-label="crown" role="img">👑</span>. After my Bachelor's degree I started woking on web development. I enjoy web application development both frontend and backend. I love to design illustrations on photoshop and illustrator. Most recently, I started working on some opensource project. When i am free i play fingerstyle guitar <span aria-label="guitar" role="img">🎸</span>.
                    </p>
                </Container>
            </div>
        </Layout>
    )
}
