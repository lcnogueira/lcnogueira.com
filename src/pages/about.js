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
        I'm a software engineer based in Brazil and I've been working for{' '}
        <a
          href="https://ufersa.edu.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          UFERSA
        </a>{' '}
        (a Brazilian University) since August 2012 (you can do the math) and for{' '}
        <a href="https://www.udacity.com/course/react-nanodegree--nd019">
          Udacity
        </a>{' '}
        (as a React/Javascript project reviewer) since April 2018.
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
        I love programming with Javascript, React and Gatsby, regardless of
        whether it's a web application, a mobile app or an open source library.
      </p>
      <p>
        I spend my free time watching movies with my wife, Jamila, doing some
        exercise or reading a book (usually an investing book). At the moment,
        my wife and I are moving to Brasilia, Brazil, and have no kids (yet).
      </p>
      <h2>Skills</h2>
      <ul>
        <li>HTML 5</li>
        <li>CSS 3/ Styled Components</li>
        <li>Responsive Design</li>
        <li>Javascript (Design Patterns, Tests and ES6/7)</li>
        <li>ReactJS / Redux</li>
        <li>TypeScript</li>
        <li>NextJs</li>
        <li>GatsbyJS</li>
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
