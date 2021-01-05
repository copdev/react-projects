import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [ 'all', ...new Set( items.map( item => item.category ) ) ];

function App () {
  
  const [ menuItem, setMenuItem ] = useState( items );
  const [ categories, setCategories ] = useState(allCategories);

  const filterItems = ( category ) => {
    if ( category === 'all' )
    {
      setMenuItem( items );
      return;
    }
    const newItem = items.filter( item => item.category === category )
    setMenuItem( newItem );
  }

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>Our Menu</h2>
        <div className="underline"></div>
      </div>
      <Categories filterItems={filterItems} categories={categories} />
      <Menu items={menuItem} />
    </section>
  </main>;
}

export default App;
