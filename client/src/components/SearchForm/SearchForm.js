import React from 'react';
import './style.css';

function SearchForm(props) {

    return (
        <div id='search-form' className='text-center'>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <input className='form-control' name='title'
                        placeholder='Search for a book...'
                        type='text'
                        onChange={props.handleInputChange}></input>
                    <br />
                    <button
                        className='btn btn-link'
                        onClick={props.handleFormSubmit}
                        type='submit'
                    >   Search
            </button>
                </div>
            </div>
        </div>
    )
}

export default SearchForm;