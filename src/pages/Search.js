import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

//custom hooks
import { useInterval } from "../customer-hooks/useInterval"

//style
require("../style/search-page.css");

//components
import MainLayout from '../components/layouts/Main';
import Cards from '../components/items/card/Cards';

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

    const [searchMess, setSearchMess] = useState("");

    const [searchResults, setSearchResults] = useState([]);

    const [nextLink, setNextLink] = useState([]);

    useEffect(() => {
        let isSubscribed = true;

        async function search() {
            const searchRes = await action.searchByKey(searchKey);
            if (searchRes) {
                const searchData = await searchRes.json();
                if (searchData) {
                    if (isSubscribed) {
                        const newSearchResults = [];
                        let items = searchData.collection.items.filter(item => ["video", "image"].indexOf(item.data[0].media_type) !== -1);
                        while (items.length) {
                            newSearchResults.push(items.splice(0, 3));
                        }

                        setSearchResults(newSearchResults);
                        setNextLink(searchData.collection.links);
                    }
                } else {
                    if (isSubscribed) {
                        setSearchMess("Data format wrong");
                    }
                }
            } else {
                if (isSubscribed) {
                    setSearchMess("System error");
                }
            }
        }

        if (triggerSearch && searchKey.trim() !== "") {
            search();
        }

        return () => isSubscribed = false;
    }, [triggerSearch, searchKey])

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
                    {searchMess}
                </div>
                <div className="search-result">
                    <Cards cards={searchResults} mode={"search"} />
                </div>
            </div>
        </MainLayout >
    )
};

export default Search;