import React, { useState } from "react";
import getRecommendations from "./componnents/Recommendation";
import products from "./products"; 

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState({
    message: "Explore our latest products:",
    data: products,
  });

  const handleSearch = () => {
    if (!query.trim()) {
      setResult({ message: "Explore our latest products:", data: products });
      return;
    }
    const rec = getRecommendations(query);
    setResult(rec);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f1f3f6",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header
        style={{
          backgroundColor: "#2874f0",
          color: "white",
          padding: "15px 30px",
          fontSize: "22px",
          fontWeight: "600",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
          Product Recommender
      </header>

      {/* Search Section */}
      <div
        style={{
          backgroundColor: "white",
          margin: "30px auto",
          padding: "25px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          maxWidth: "900px",
          textAlign: "center",
        }}
      >
        
        <input
          type="text"
          placeholder="e.g. affordable phones or gaming laptops"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            padding: "12px",
            width: "65%",
            border: "1px solid #ddd",
            borderRadius: "5px",
            fontSize: "15px",
          }}
        />
        <button
          onClick={handleSearch}
          style={{
            marginLeft: "10px",
            padding: "12px 25px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#2874f0",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            fontSize: "15px",
            transition: "0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#0b57d0")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2874f0")}
        >
          Get Recommendation
        </button>
      </div>

      {/* Results Section */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "auto",
          backgroundColor: "white",
          borderRadius: "8px",
          padding: "30px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <h3
          style={{
            color: "#212121",
            marginBottom: "25px",
            borderBottom: "2px solid #2874f0",
            paddingBottom: "8px",
          }}
        >
          {result.message}
        </h3>

        {result.data.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "25px",
            }}
          >
            {result.data.map((item) => (
              <div
                key={item.id}
                style={{
                  border: "1px solid #eee",
                  borderRadius: "10px",
                  background: "#fff",
                  textAlign: "center",
                  padding: "15px",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 4px 12px rgba(0,0,0,0.2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.boxShadow =
                    "0 1px 4px rgba(0,0,0,0.1)")
                }
              >
                <img
                  src={
                    item.image ||
                    "https://via.placeholder.com/150?text=Product+Image"
                  }
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
                <h4
                  style={{
                    fontSize: "16px",
                    color: "#212121",
                    margin: "10px 0 5px 0",
                  }}
                >
                  {item.name}
                </h4>
                <p
                  style={{
                    color: "#388e3c",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  ${item.price}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: "#888", textAlign: "center" }}>
            No matching products found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
