import { useState } from "react";
import Data from "./Restua-Data.js";
import { FaStar } from "react-icons/fa6";
import { ImSpoonKnife } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";

import ReactPaginate from 'react-paginate';


function Restaurant() {

    const [searchValue, setSearchValue] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);



    const itemPerPage = 16;

    const filterData = Data.filter((obj) => {
        return (obj.name.toLowerCase().includes(searchValue.toLowerCase()) && obj.rating >= minRating)
    });

    const pageCount = Math.ceil(filterData.length / itemPerPage);
    const totalPage = (currentPage-1) * itemPerPage ;
    const currentItems = filterData.slice(totalPage , totalPage + itemPerPage);


    const handlePageClick = ({ selected }) => {
        console.log('Page clicked:', selected + 1);
        setCurrentPage(selected + 1);
    };

    return (
        <>
            <div className="Restaurant-container">
                <div className="search-rating">
                    <input className="search-restua" type="text"
                        placeholder="Search by Restaurant name..."
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value) ;
                            setCurrentPage(1);
                            } } />

                    <div className="rating">
                        <label>Minimum Rating :</label>
                    <input className="rating-points"
                        type="number"
                        min={0}
                        max={5}
                        value={minRating}
                        onChange={(e) => {
                             setMinRating(Number(e.target.value));
                             setCurrentPage(1);
                        }} />
                        </div>
                </div>



                <div className="restua-div">
                    {currentItems.map((obj) =>

                        <div key={obj._id.$oid} className="restaurant-card">
                            <h1 className="restau-name">{obj.name}
                                <span className="star">
                                    {[...Array(5)].map((__, index) => {
                                        //  console.log(index, obj.rating, index < obj.rating);
                                         return (
                                        <FaStar id="stars" key={index} className={`star-rating ${index < obj.rating ? "colorYellow" : "colorGray"}`} />
                                    )
})}
                                </span>
                            </h1>
                            <h2 className="address">
                               <span className="location-icon"><FaLocationDot /></span> {obj.address}
                            </h2>
                            <p className="address-code">{obj.outcode} {obj.postcode}</p>
                            <div className="restra-menu">
                                <p className="food-type">
                                     <span className="fork-icon"> <ImSpoonKnife /> </span>
                                {obj.type_of_food}</p>
                                <p className="anchor-link" style={{marginTop:"10px"}}><a href="#">Visit Menu</a></p>
                            </div>
                        </div>

                    )}
                </div>
            </div>
           
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
            
        </>
    )
}
export default Restaurant;