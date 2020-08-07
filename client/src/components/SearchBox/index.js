import React from "react";
import { Input, FormBtn } from "../Form/index";

function SearchBox(props) {
    const {searchBook, handleInputChange, handleBtnSubmit} = props;
    return (
      <div className="container">
          <div className="row">
            <p>Book Search</p>
            <Input 
                value={searchBook}
                onChange={handleInputChange}
           />
            <FormBtn
                onClick={handleBtnSubmit}
            >
                Search
            </FormBtn>
          </div>
      </div>
    );
  }


export default SearchBox;