// src/components/ComplianceForm.jsx
import React, { useState } from 'react';
import categories from '../data/categories';  // Adjust the path if needed

export default function ComplianceForm() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState(null);

  const handleCategoryChange = (e) => {
    const selected = e.target.value;
    setSelectedCategory(selected);
    setCategoryData(categories[selected] || null);  // Set the category data when a category is selected
  };

  return (
    <div>
      <h2>Select Product Category</h2>
      <form>
        <label>
          Product Category:
          <select onChange={handleCategoryChange} value={selectedCategory}>
            <option value="">Select</option>
            {Object.keys(categories).map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </label>
        
        {selectedCategory && categoryData && (
          <div>
            <h3>Compliance Requirements for {selectedCategory}</h3>
            <p><b>Mandatory:</b> {categoryData.mandatory.join(", ")}</p>
            <p><b>Recommended:</b> {categoryData.recommended.join(", ")}</p>
          </div>
        )}
      </form>
    </div>
  );
}
