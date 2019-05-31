import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

//custom hooks
import { useInterval } from "../customer-hooks/useInterval"

//style
require("../style/search-page.css");

//components
import MainLayout from '../components/layouts/Main';

//action
import * as action from '../actions/searchAction';

const timeTypingInterval = 500;

const Search = (props) => {

    const [typingTimer, setTypingTimer] = useState(null);

    const [searchKey, setSearchKey] = useState("");

    const [triggerSearch, setTriggerSearch] = useState(false);

    function onSearchChange(e) {
        setTriggerSearch(false);
        setSearchKey(e.target.value);
        clearTimeout(typingTimer);
        setTypingTimer(setInterval(() => setTriggerSearch(true), timeTypingInterval));
    };

    useEffect(() => {
        let isSubscribed = true;

        async function search() {
            console.log(1111);
            // const searchRes = await action.searchByKeyGetAllResult(searchKey);
            // if (searchRes) {
            //     const searchData = await searchRes.json();
            //     if (searchData) {
            //         console.log(111, searchData);
            //     } else {
            //         console.error("data format wrong");
            //     }
            // } else {
            //     console.error("System error");
            // }
        }

        if (triggerSearch && searchKey.trim() !== "") {
            console.log(1111);
            search();
        }

        return () => isSubscribed = false;
    })

    return (
        <MainLayout>
            <div className="search-page-container-1">
                <div className="search-back-to-collection">
                    <Link style={{ display: "flex", color: "#3399f0" }} to="/nasa-search"><FontAwesomeIcon style={{ display: "flex", marginRight: "10px", fontSize: "1.2em" }} icon={faChevronLeft} />
                        <span style={{ display: "flex", alignItems: "center" }}>
                            Back to Collection
                        </span>
                    </Link>
                </div>
                <div className="search-title">
                    Search from Nasa
                </div>
                <input value={searchKey} onChange={e => onSearchChange(e)} className="search-input" placeholder="Type something to search..." />
                <div className="search-number-of-results">

                </div>
                <div className="search-result">

                </div>
            </div>
        </MainLayout >
    )
};

export default Search;