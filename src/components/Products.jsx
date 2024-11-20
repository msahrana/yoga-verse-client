"use client";

import React, {useEffect, useState} from "react";
import CardInfo from "./CardInfo";

const Products = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-center text-xl md:text-4xl font-bold pt-4">
        Our Popular Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cards.length > 0 ? (
          cards.map((card) => <CardInfo key={card.id} card={card} />)
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Products;
