import React from 'react';
import Layout from '../components/layout';
import Container from '../components/container';
import { css } from '@emotion/core';
import ListBox from '../components/listBox';
import styled from '@emotion/styled';

const StyledLink = styled.a(css`
    text-decoration: none;
`);

const Contact = () => {
    return (
        <Layout title="Contact" description="Contact Maneksh M S to find more about him">
            <Container>
                <h2>Contact</h2>
                    <ListBox borderColor="transparent" background="#f5fbff" >
                        <StyledLink href="https://github.com/manekshms" css={css`color: #0d47a1; :hover{ color: #2196f3;}`} target="__blank"><strong>GitHub - </strong>My Opensource Projects</StyledLink>
                    </ListBox>
                    <ListBox borderColor="transparent" background="#edf7f9">
                        <StyledLink href="https://www.linkedin.com/in/maneksh-ms/" css={css`color: #006064; :hover { color: #00bcd4;}`} target="__blank" ><strong>LinkedIn - </strong>My LinkedIn page</StyledLink>
                    </ListBox>
                    <ListBox borderColor="transparent" background="#f7f7fb">
                        <StyledLink href="https://www.facebook.com/Maneksh-MS-544588929013183" css={css`color: #1a237e; :hover { color: #3f51b5;}`} target="__blank" ><strong>Facebook - </strong>My Facebook page</StyledLink>
                    </ListBox>
                    <ListBox borderColor="transparent" background="#fff9fb">
                        <StyledLink href="https://www.instagram.com/maneksh.m.s/" css={css`color: #880e4f; :hover { color: #e91e63; }`} target="__blank" ><strong>Instagram - </strong>My photos</StyledLink>
                    </ListBox>
            </Container>
        </Layout>
    )
}

export default Contact;