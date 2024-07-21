import React, { useState } from "react";
import Item from "./Item";
import FilterPanel from "./FilterPanel";
import ReactPaginate from "react-paginate";
import "./Products.css";

const Products = ({ handleAddProduct, products, searchItem }) => {
  const [status, setStatus] = useState("all");
  const [type, setType] = useState("all");
  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 12;
  const pagesVisited = pageNumber * productsPerPage;
  const noResult = (
    <div className="noResult">
      <p className="noResultInfo">No results</p>
      <img className="noResultImg" src="./images/noResult.png" alt="" />{" "}
    </div>
  );

  const handleStatus = (e) => {
    setStatus(e.target.value);
    setPageNumber(0);
  };
  const handleType = (e) => {
    setType(e.target.value);
    setPageNumber(0);
  };

  const items = products
    .filter((item) => {
      if (searchItem === "") {
        if (type === "all" && status === "all") {
          return item;
        } else if (status === `${status}` && type === "all") {
          item = item.status === `${status}`;
        } else if (type === `${type}` && status === "all") {
          item = item.type === `${type}`;
        } else item = item.type === `${type}` && item.status === `${status}`;
        return item;
      } else if (
        item.title.toLowerCase().includes(searchItem.toString().toLowerCase())
      ) {
        if (type === "all" && status === "all") {
          return item;
        } else if (status === `${status}` && type === "all") {
          item = item.status === `${status}`;
        } else if (type === `${type}` && status === "all") {
          item = item.type === `${type}`;
        } else item = item.type === `${type}` && item.status === `${status}`;
        return item;
      }
      return false;
    })
    .map((item) => (
      <Item
        title={item.title}
        price={item.price}
        image={item.image}
        key={item.id}
        id={item.id}
        quantity={item.quantity}
        handleAddProduct={handleAddProduct}
        item={item}
        status={item.status}
      />
    ));
  const displayProducts = items.slice(
    pagesVisited,
    pagesVisited + productsPerPage
  );
  const pageCount = Math.ceil(items.length / productsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };
  return (
    <div className="container">
      <FilterPanel handleStatus={handleStatus} handleType={handleType} />
      <div className="products">
        {!displayProducts.length ? noResult : displayProducts}
      </div>

      <ReactPaginate
        previousLabel={pageCount <= 1 ? null : "<"}
        nextLabel={pageCount <= 1 ? null : ">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeLinkClassName={"paginationActive"}
      />
      <div className="empty"></div>
    </div>
  );
};

export default Products;
