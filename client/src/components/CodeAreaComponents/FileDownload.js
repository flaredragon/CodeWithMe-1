import React from 'react';

const fileDownload = (props) => {
    return (
        <div className="form-group">
        <span>
            <button onClick={props.downloadFile} className="btn btn-primary" href="" download>Download your code</button>
        </span>
        </div>
    );
}

export default fileDownload;