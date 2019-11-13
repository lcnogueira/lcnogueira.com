import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Search from '../components/Search';

const SearchPage = () => (
  <Layout>
    <SEO title="Search" description="Go ahead! Here you can find content that can truly help you!"/>
    <Search />
  </Layout>
);

export default SearchPage;
