import React from 'react';
import Hero from '../components/Hero/Hero';
import TopTen from '../components/TopTen/TopTen';
import Why from '../components/Why/Why';

function Home({ catBreedList }) {
  return (
    <main>
      <Hero catBreedList={catBreedList} />
      <TopTen catBreedList={catBreedList} />
      <Why />
    </main>
  );
}

export default Home;
