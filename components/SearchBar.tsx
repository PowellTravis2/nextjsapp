'use client'
import { useState, useEffect } from 'react';

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  
    // Fetch products from the API
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      };
  
      fetchProducts();
    }, []);

    useEffect(() => {
      const filtered = products
        .filter((product) =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 20);
      setFilteredProducts(filtered);
    }, [searchQuery, products]);
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search products"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  </td>
                  <td>${product.price.toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3}>No products found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
};
