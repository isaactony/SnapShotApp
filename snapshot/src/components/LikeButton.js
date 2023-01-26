import React from "react";

function LikeButton({ count, onClick }) {
    return (
        <button className="btn btn-danger" onClick={onClick}>&#x2764; {count}</button>
    );
}

export default LikeButton;