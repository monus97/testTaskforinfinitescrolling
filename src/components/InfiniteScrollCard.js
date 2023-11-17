import React, { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./Card";
import "../css/Card.css";

const InfiniteScrollCards = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.magicthegathering.io/v1/cards?page=${page}&pageSize=20`
      );
      const newData = response?.data?.cards;

      if (newData.length === 0) {
        setHasMore(false);
        return;
      }

      setItems((prevItems) => [...prevItems, ...newData]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCards = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="card-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Search by card name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <InfiniteScroll
        dataLength={filteredCards.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className="card-grid">
          {filteredCards.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default InfiniteScrollCards;
