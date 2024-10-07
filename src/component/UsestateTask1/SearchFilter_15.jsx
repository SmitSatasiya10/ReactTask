import React, { useState, useEffect } from 'react';

const SearchFilter15 = () => {
  const [searchTerm, setSearchTerm] = useState(''); 
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm); 
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const sampleData = [
    'Green Tea',
    'Lemonade',
    'Coffee',
    'Date',
    'Grape',
    'Coconut Water',
    'Cheesecake',
    'Popcorn',
    'Pizza',
    'Potato Chips',
  ];

  useEffect(() => {
    setItems(sampleData);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); 
    }, 300);

    return () => {
      clearTimeout(handler); 
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setFilteredItems(
        items.filter(item =>
          item.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredItems(items); 
    }
  }, [debouncedSearchTerm, items]);

  return (
    <div className="container mt-5 text-center">
      <h2>Search Filter with Debounce</h2>
      <input
        type="text"
        className="form-control mt-3"
        placeholder="Search..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} 
      />
      <ul className="list-group mt-3">
        {filteredItems.map((item, index) => (
          <li key={index} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter15;
