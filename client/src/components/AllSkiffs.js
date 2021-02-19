import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const AllSkiffs = (props) => {
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/skiffs')
            .then((allSkiffs) => {
                console.log(allSkiffs.data);
            })
    }, []);

    return (
        <div>
            <h2>All Skiffs</h2>
        </div>
    );
};

export default AllSkiffs;