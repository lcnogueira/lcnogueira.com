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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
        consequuntur. Dolores corporis doloribus consequatur nam omnis facere
        perferendis, assumenda iure.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil odit
        aspernatur nemo ipsum non iusto atque mollitia molestias, enim dicta
        consequuntur ratione incidunt, omnis cumque odio molestiae laborum quia
        ut earum tempora! Amet omnis magni voluptatibus perspiciatis. Non
        asperiores facere quis praesentium, sapiente doloribus sit obcaecati
        fugiat soluta commodi unde.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
        inventore, rem similique laudantium blanditiis vel esse dolor
        necessitatibus nesciunt voluptatum, amet tempore deleniti excepturi
        ratione beatae cupiditate a nulla quo.
      </p>

      <h2>Skills</h2>

      <ul>
        <li>Lorem, ipsum.</li>
        <li>Lorem.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
        <li>lorem</li>
        <li>Lorem, ipsum.</li>
        <li>Lorem, ipsum.</li>
      </ul>

      <h2>Contact Me!</h2>
      <p>You can contact me by using one of the links below.</p>

      <SocialLinks />
    </MainContent>
  </Layout>
);

export default AboutPage;
