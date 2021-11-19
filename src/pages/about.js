import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import SocialLinks from '../components/SocialLinks';

import { MainContent } from '../styles/base';

const AboutPage = () => (
  <Layout>
    <SEO
      title="About Me"
      description="Let me tell you a little bit about myself"
    />
    <MainContent>
      <h1>
        Hi! I'm Luiz{' '}
        <span role="img" aria-label="wave">
          &#128075;
        </span>
      </h1>
      <p>
        I'm a senior javascript engineer based in Brazil and I've been working for{' '}
        <a href="https://10up.com" target="_blank" rel="noopener noreferrer">
          10up
        </a>{' '}
        (an american agency) since November 2021 (you can do the math). I have
        also worked at{' '}
        <a
          href="https://github.com/ufersa/plataforma-sabia"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sabiá Platform
        </a>{' '}
        from January 2020 to February 2021.
      </p>
      <p>
        I went to{' '}
        <a
          href="http://portal.uern.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          UERN
        </a>{' '}
        where I graduated with a Bachelor degree in Computer Science. After
        that, I went to UFERSA, where I graduated with a Master's degree in
        Computer Science with an emphasis on Information Systems.
      </p>
      <p>
        I love programming with Javascript, React and Next.js, regardless of
        whether it's a web application, a mobile app or an open source library.
      </p>
      <p>
        I spend my free time watching movies with my wife, Jamila, doing some
        exercise or reading a book (usually an investing book). At the moment,
        my wife, our kid ("Dudu") and I live in Brasilia, Brazil.
      </p>
      <h2>Skills</h2>
      <ul>
        <li>HTML 5</li>
        <li>CSS 3 / Styled Components</li>
        <li>Responsive Design</li>
        <li>Javascript (ES6/7 / Design Patterns)</li>
        <li>Tests (Jest / React Testing Library)</li>
        <li>ReactJS / Redux</li>
        <li>TypeScript</li>
        <li>Next.js</li>
        <li>Strapi</li>
        <li>NodeJS</li>
        <li>PostgreSQL.</li>
        <li>Java</li>
        <li>Scrum and Kanban.</li>
        <li>I'm a fast learner as well :)</li>
      </ul>
      <h2>Contact Me!</h2>
      <p>You can contact me by using one of the links below.</p>
      <SocialLinks />
    </MainContent>
  </Layout>
);

export default AboutPage;
