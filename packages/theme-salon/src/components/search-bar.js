import React from 'react';
import {connect, styled} from "frontity";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";


const SearchBar = () => {

    return (

            <Search>
                <SearchIconWrapper icon={faSearch} />
                <StyledInput
                    placeholder="Rechercher"
                />
            </Search>

    );
}

export default connect(SearchBar);


const Search = styled.div`
    display:flex;
    align-items: center;
    border:none;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
    background-color: white; 
    width: 100%;
    height: 2.5rem;   
`;

const SearchIconWrapper = styled(FontAwesomeIcon)`
    padding-left: 10px;
    color: #424242;
`;

const StyledInput = styled.input`
    color: inherit;
    width: 100%;
    background-color: transparent;
    border: none;
    height: 100%;
    font-size: 1.25rem;
    margin-left: 5px;
    :focus {
      outline: none;
    }
`;

