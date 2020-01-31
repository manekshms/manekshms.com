import React from "react"
import { css } from '@emotion/core';

import Layout from '../components/layout';
import Container from '../components/container';
import ListBox from '../components/listBox';
import Chips from '../components/chips';
import { facebook , instagram, github, linkedin } from '../components/social';

export default () => {
    return (
        <Layout>
            <div css={css`margin-top: 50px; margin-bottom: 50px;`} >
                <Container >
                    <div css={css`
                        padding: 10px 15px;
                        margin-top: 20px;
                        border: 1px solid #b2dfdb;
                        border-radius: 5px;
                        background: #fbffff;

                        & > p {
                            font-size: 20px;
                            line-height: 32px;
                            color: #424242;
                        }
                    `}>
                        <h3>Hi..</h3>
                        <p>My name is Maneksh M S. I am a software developer living in India. Interested in Node.js and Javascript Frontend tools.</p>
                        <div css={css`
                            display: flex;
                            a {
                                margin-right: 10px;
                            }

                        `}>
                            <a className="github" href="https://github.com/manekshms" target="__blank" >{github}</a>
                            <a href="https://www.linkedin.com/in/maneksh-ms" target="__blank" >{linkedin}</a>
                            <a href="https://www.instagram.com/maneksh.m.s" target="__blank" >{instagram}</a>
                            <a href="https://www.facebook.com/Maneksh-MS-544588929013183" target="__blank" >{facebook}</a>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div css={css`margin-bottom: 40px;`}>
                    <h2 css={css`color: #424242;`}>
                        My Projects
                    </h2>
                </div>
                <ListBox 
                    title="Online Treasury Savings Bank, Government of Kerala" 
                    content="Online Treasury Savings bank is an online banking application. It provides facilities for Savings Bank operations and Fixed Deposits. The Savings Bank facility in Kerala Treasuries serves as a means to provide a channel for safe deposits for the public since last fifty years." 
                >
                    <Chips color="#880e4f" hoverColor="#e91e63" background="#fce4ec"><a href="https://tsbonline.kerala.gov.in/" rel="nofollow" target="__blank">Website</a></Chips>
                </ListBox>
                <ListBox 
                    title="DB2Util" 
                    content="DB2Util is a PHP composer package for building SQL query for IBM DB2 database. This package will help developers to improve the productiviy. It can be used to perform most database operations. DB2Util is built on the top of PDO database PHP API also It make use of PDO parameter binding to protect your application from SQL injection attacks." 
                >
                    <Chips color="#ff6f00" hoverColor="#ff9800" background="#fff3e0"><a href="https://packagist.org/packages/manekshms/db2util" rel="nofollow" target="__blank">Package</a></Chips>
                    <Chips color="#01579b" hoverColor="#03a9f4" background="#e1f5fe"><a href="https://github.com/manekshms/DB2Util" rel="nofollow" target="__blank" >GitHub</a></Chips>
                </ListBox>

                <ListBox 
                    title="NgMatAdmin" 
                    content="NgMatAdmin is a simple and elegant Angular admin dashboard template. NgMatAdmin make use of Angular Material components for buiding the UI." 
                >
                    <Chips color="#01579b" hoverColor="#03a9f4" background="#e1f5fe"><a href="https://github.com/manekshms/ngMatAdmin" rel="nofollow" target="__blank" >GitHub</a></Chips>
                    <Chips color="#1b5e20" hoverColor="#4caf50" background="#e8f5e9"><a href="http://manekshms.com/ngMatAdmin" target="__blank" >Demo</a></Chips>
                </ListBox>
            </Container>
        </Layout>
    )
}
