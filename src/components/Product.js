import React, { useState, useEffect, useRef } from 'react';
import bg2 from "../Images/HomeBg2.jpg";
import bg from "../Images/HomeBg.jpg";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchRecommendations, setSearchRecommendations] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const productsPerPage = 9;
  
  // Ref for scrolling to top of products section
  const productsRef = useRef(null);
  
  // Sample product data - replace with your actual data
  const products = [
    { id: 1, name: "Wooden Dining Set", inStock: true, price: "$599.99" },
    { id: 2, name: "Classic Dining Table", inStock: true, price: "$449.99" },
    { id: 3, name: "Round Table Set", inStock: true, price: "$699.99" },
    { id: 4, name: "Traditional Dining Set", inStock: false, price: "$899.99" },
    { id: 5, name: "Bistro Table Set", inStock: true, price: "$349.99" },
    { id: 6, name: "Café Table Collection", inStock: true, price: "$299.99" },
    { id: 7, name: "Family Dining Set", inStock: true, price: "$799.99" },
    { id: 8, name: "Vintage Table Set", inStock: true, price: "$649.99" },
    { id: 9, name: "Rustic Dining Collection", inStock: true, price: "$749.99" },
    { id: 10, name: "Modern Dining Set", inStock: true, price: "$549.99" },
    { id: 11, name: "Contemporary Dining Set", inStock: true, price: "$599.99" },
    { id: 12, name: "Outdoor Dining Set", inStock: true, price: "$499.99" },
    { id: 13, name: "Patio Dining Collection", inStock: true, price: "$449.99" },
    { id: 14, name: "Garden Table Set", inStock: true, price: "$399.99" },
    { id: 15, name: "Picnic Table Set", inStock: true, price: "$299.99" },
    { id: 16, name: "Folding Table Collection", inStock: true, price: "$249.99" },
    { id: 17, name: "Extendable Dining Set", inStock: true, price: "$699.99" },
    { id: 18, name: "Space-Saving Table Set", inStock: true, price: "$479.99" },
    { id: 19, name: "Custom Dining Collection", inStock: true, price: "$899.99" },
    { id: 20, name: "Designer Dining Set", inStock: true, price: "$999.99" }
  ];

  // Filter products based on search term
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProduct]);

  // Generate pagination numbers
  const getPaginationNumbers = () => {
    const pageNumbers = [];
    
    // Always include current page
    pageNumbers.push(currentPage);
    
    // Add previous page if it exists
    if (currentPage > 1) {
      pageNumbers.unshift(currentPage - 1);
    }
    
    // Add next page if it exists
    if (currentPage < totalPages) {
      pageNumbers.push(currentPage + 1);
    }
    
    return pageNumbers;
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() !== "") {
      const recommendations = products
        .filter(product => 
          product.name.toLowerCase().includes(value.toLowerCase())
        )
        .slice(0, 5) // Limit to 5 recommendations
        .map(product => product.name);
      
      setSearchRecommendations(recommendations);
      setShowRecommendations(true);
    } else {
      setSearchRecommendations([]);
      setShowRecommendations(false);
    }
  };

  // Select a recommendation
  const selectRecommendation = (recommendation) => {
    setSearchTerm(recommendation);
    setShowRecommendations(false);
  };

  // Close recommendations when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setShowRecommendations(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Handle pagination
  const paginate = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    
    // Scroll to top of products section
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="relative flex flex-col min-h-screen font-sans text-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-40 -z-10"
        style={{ backgroundImage: `url(${bg})` }}
      />
      
      {/* Header Section */}
      <div className="flex px-4 pt-8 sm:px-10 sm:pt-16">
        <span className="px-4 py-2 text-sm font-bold text-orange-500 border border-orange-500 rounded sm:px-6 sm:text-base">
          PRODUCTS
        </span>
      </div>
      
      {/* Search Bar */}
      <div className="flex justify-center w-full px-4 mt-4">
        <div className="relative w-full sm:w-2/3 md:w-1/2 lg:w-1/3" onClick={(e) => e.stopPropagation()}>
          <input
            type="text"
            placeholder="Search Item"
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 text-gray-700 bg-gray-200 rounded-md focus:outline-none"
          />
          <button className="absolute inset-y-0 right-0 flex items-center px-4">
            <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          
          {/* Search Recommendations */}
          {showRecommendations && searchRecommendations.length > 0 && (
            <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg">
              {searchRecommendations.map((recommendation, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => selectRecommendation(recommendation)}
                >
                  {recommendation}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      
      {/* Product Grid */}
      <div ref={productsRef} className="container px-4 py-8 mx-auto sm:px-6">
        {currentProducts.length === 0 ? (
          <div className="py-10 text-center">
            <p className="text-xl">No products found matching "{searchTerm}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {currentProducts.map((product) => (
              <div 
                key={product.id} 
                className="flex flex-col items-center p-3 bg-white border-2 border-blue-100 rounded-lg sm:p-4 bg-opacity-30"
                style={{ borderColor: product.id % 2 === 0 ? '#FFA500' : '#3B82F6' }}
              >
                <img 
                  src={bg} 
                  alt={product.name} 
                  className="object-cover w-full h-48 mb-3 sm:h-56 md:h-64 sm:mb-4"
                />
                <h3 className="mb-2 text-base font-medium text-center sm:text-lg">{product.name}</h3>
                <p className="flex items-center mb-2 text-xs text-gray-600 sm:text-sm">
                  {product.inStock ? (
                    <>
                      <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full sm:w-3 sm:h-3"></span>
                      In Stock
                    </>
                  ) : (
                    <>
                      <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full sm:w-3 sm:h-3"></span>
                      Out of Stock
                    </>
                  )}
                </p>
                <p className="mb-3 font-bold sm:mb-4">{product.price}</p>
                <button
                  onClick={() => openModal(product)}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-black rounded-md hover:bg-gray-800"
                >
                  View More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Pagination */}
      {filteredProducts.length > 0 && (
        <div className="flex flex-wrap items-center justify-center gap-1 px-2 my-6 sm:gap-2 sm:my-8">
          {/* Previous button */}
          <button 
            className="flex items-center justify-center text-orange-500 border border-orange-500 rounded-md w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-100"
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lt;
          </button>
          
          {/* First page button if not in view */}
          {currentPage > 2 && (
            <>
              <button
                onClick={() => paginate(1)}
                className="flex items-center justify-center text-orange-500 border border-orange-500 rounded-md w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-100"
              >
                1
              </button>
              {currentPage > 3 && (
                <span className="flex items-center justify-center w-5 text-gray-500 sm:w-8 h-7 sm:h-8">
                  ...
                </span>
              )}
            </>
          )}
          
          {/* Page numbers */}
          {getPaginationNumbers().map(number => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 border border-orange-500 rounded-md ${
                currentPage === number 
                  ? 'text-white bg-orange-500' 
                  : 'text-orange-500 hover:bg-orange-100'
              }`}
            >
              {number}
            </button>
          ))}
          
          {/* Last page button if not in view */}
          {currentPage < totalPages - 1 && (
            <>
              {currentPage < totalPages - 2 && (
                <span className="flex items-center justify-center w-5 text-gray-500 sm:w-8 h-7 sm:h-8">
                  ...
                </span>
              )}
              <button
                onClick={() => paginate(totalPages)}
                className="flex items-center justify-center text-orange-500 border border-orange-500 rounded-md w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-100"
              >
                {totalPages}
              </button>
            </>
          )}
          
          {/* Next button */}
          <button 
            className="flex items-center justify-center text-orange-500 border border-orange-500 rounded-md w-7 h-7 sm:w-8 sm:h-8 hover:bg-orange-100"
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &gt;
          </button>
          
          {/* Page count indicator */}
          <span className="w-full mt-2 text-xs text-center text-gray-600 sm:w-auto sm:mt-0 sm:ml-4 sm:text-sm">
            Page {currentPage} of {totalPages}
          </span>
        </div>
      )}
      
      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
          <div 
            className="relative w-full max-w-xl bg-white rounded-lg shadow-xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute z-10 text-gray-500 top-3 right-3 sm:top-4 sm:right-4 hover:text-gray-700"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col p-4 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                <div className="flex-shrink-0 w-full mx-auto sm:w-auto sm:mx-0">
                  <img 
                    src={bg} 
                    alt={selectedProduct.name} 
                    className="object-cover w-full h-56 rounded-md sm:h-64 sm:w-64"
                  />
                </div>
                
                <div className="flex flex-col flex-grow">
                  <h2 className="mb-2 text-xl font-bold sm:text-2xl">{selectedProduct.name}</h2>
                  <div className="flex items-center mb-3 sm:mb-4">
                    {selectedProduct.inStock ? (
                      <>
                        <span className="inline-block w-2 h-2 mr-1 bg-green-500 rounded-full sm:w-3 sm:h-3"></span>
                        <span className="text-xs text-gray-600 sm:text-sm">In Stock</span>
                      </>
                    ) : (
                      <>
                        <span className="inline-block w-2 h-2 mr-1 bg-red-500 rounded-full sm:w-3 sm:h-3"></span>
                        <span className="text-xs text-gray-600 sm:text-sm">Out of Stock</span>
                      </>
                    )}
                  </div>
                  
                  <p className="mb-3 text-sm text-gray-700 sm:mb-4 sm:text-base">
                    This beautiful {selectedProduct.name.toLowerCase()} is crafted from premium materials and designed for both comfort and elegance. 
                    Perfect for family gatherings and entertaining guests.
                  </p>
                  
                  <div className="mb-3 sm:mb-4">
                    <h3 className="mb-1 text-base font-medium sm:mb-2 sm:text-lg">Features:</h3>
                    <ul className="pl-4 text-sm list-disc sm:pl-5 sm:text-base">
                      <li>Solid wood construction</li>
                      <li>Comfortable seating for 4</li>
                      <li>Classic, timeless design</li>
                      <li>Easy assembly</li>
                      <li>Stain-resistant finish</li>
                    </ul>
                  </div>
                  
                  <div className="mt-auto">
                    <p className="mb-2 text-lg font-bold sm:text-xl">{selectedProduct.price}</p>
                    <button 
                      className="px-4 sm:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600 w-full sm:w-auto" 
                      disabled={!selectedProduct.inStock}
                    >
                      {selectedProduct.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <div className="flex items-center justify-end gap-4 p-4 mt-auto bg-[#19191A]">
        {/* Footer content can go here */}
      </div>
    </div>
  );
}