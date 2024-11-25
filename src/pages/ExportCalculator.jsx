import React, { useState, useEffect } from 'react';

const categories = {
  Electronics: { baseTariff: 10, additionalFee: 5 },
  Clothing: { baseTariff: 8, additionalFee: 3 },
  Toys: { baseTariff: 12, additionalFee: 4 },
};

export default function ComplianceForm() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalTariff, setTotalTariff] = useState(0);

  // Function to calculate the tariff based on category and quantity
  const calculateTariff = () => {
    if (!selectedCategory) return;
    const categoryData = categories[selectedCategory];
    const tariff = categoryData.baseTariff + categoryData.additionalFee;
    setTotalTariff(tariff * quantity); // Example calculation
  };

  // Recalculate tariff when category or quantity changes
  useEffect(() => {
    calculateTariff();
  }, [selectedCategory, quantity]);

  return (
    <div>
      <h2>Product Compliance and Tariff Calculator</h2>
      <form>
        <label>
          Product Category:
          <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
            <option value="">Select Category</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
        <br />

        <label>
          Quantity:
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>

        {selectedCategory && totalTariff > 0 && (
          <div>
            <h3>Total Tariff Calculation</h3>
            <p>For {selectedCategory} category, with {quantity} units:</p>
            <p><b>Total Tariff:</b> ${totalTariff}</p>
          </div>
        )}
      </form>
    </div>
  );
}
