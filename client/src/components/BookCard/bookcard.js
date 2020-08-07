import React from "react";


function BookCard(props) {
    const { title, author, image, link, description } = props;

    return (
        <div className="card mb-3" style={{"maxWidth": "540px"}}>
            <div className="row">
                <div className="col-md-4">
                    <img src={image} className="card-img" alt={title}></img>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h6 className="card-title">{author}</h6>
                        <p className="card-text">{description}</p>
                       <a href={link} target="_blank" rel="noopener noreferrer"><button className="btn btn-success">View</button></a>
                       <button className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default BookCard;