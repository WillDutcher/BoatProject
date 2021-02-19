import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllSkiffs = (props) => {
    const [ allSkiffs, setAllSkiffs ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/skiffs')
            .then((res) => {
                console.log(res.data);
                setAllSkiffs(res.data);
            })
            .catch((err) => {
                console.log("Error received", err);
            })
    }, []);

    return (
        <div>
            <h2>All Skiffs</h2>
            {
                allSkiffs.map((skiff, idx) => (
                    <div key={ idx }>
                        <img
                            src={ skiff.pictureUrl } 
                            alt={ skiff.description }
                        />
                        <h4>{`${skiff.ownerName}'s ${skiff.modelName} Skiff`}</h4>
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" onClick={ () => navigate(`/skiffs/${ skiff._id }`)}>View Skiff Details</button>
                            {/* <button className="btn btn-success" onClick={ () => navigate(`/skiff/${ skiff._id }/edit`)}>Update Skiff</button> */}
                            <button className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllSkiffs;