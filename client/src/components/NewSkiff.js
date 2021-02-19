import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const NewSkiff = (props) => {
    const [ buildComplete, setBuildComplete ] = useState(false);
    const [ ownerName, setOwnerName ] = useState("");
    const [ builderName, setBuilderName ] = useState("");
    const [ modelName, setModelName ] = useState("Standard");
    const [ startDate, setStartDate ] = useState("");
    const [ finishDate, setFinishDate ] = useState("");
    const [ stockLength, setStockLength ] = useState();
    const [ customLength, setCustomLength ] = useState();
    const [ pictureUrl, setPictureUrl ] = useState("");
    const [ desc, setDesc ] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/skiffs", {
            buildComplete: buildComplete,
            ownerName: ownerName,
            builderName: builderName,
            modelName: modelName,
            startDate: startDate,
            finishDate: finishDate,
            stockLength: stockLength,
            customLength: customLength,
            pictureUrl: pictureUrl,
            desc: desc
        })
            .then((res) => {
                console.log(res.data);
                navigate(`/skiffs/${ res.data._id }`);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    
    return (
        <div>
            <h2>New Skiff</h2>
            <form onSubmit={ submitForm }>
                <div className="form-check">
                    <label className="form-check-label mr-4" htmlFor="buildComplete">Build Complete</label>
                    <input
                        id="buildComplete"
                        className="form-check-input"
                        name="buildComplete"
                        type="checkbox"
                        onChange={ (e) => setBuildComplete( !buildComplete )}
                        checked={ buildComplete }
                    />
                </div>
                <div className="form-check">
                    <label className="" htmlFor="ownerName">Owner Name</label>
                    <input
                        id="ownerName"
                        className="form-control"
                        name="ownerName"
                        type="text"
                        onChange={ (e) => setOwnerName(e.target.value)}
                        value={ ownerName }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="builderName">Builder Name</label>
                    <input
                        id="builderName"
                        className="form-control"
                        name="builderName"
                        type="text"
                        onChange={ (e) => setBuilderName(e.target.value)}
                        value={ builderName }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="modelName">Model Name</label>
                    <select
                        id="modelName"
                        className="form-control"
                        name="modelName"
                        onChange={ (e) => setModelName(e.target.value)}
                        value={ modelName }
                    >
                        <option value="Standard">Standard</option>
                        <option value="Wide Body">Wide Body</option>
                        <option value="Jumbo">Jumbo</option>
                        <option value="Flat Bottom">Flat Bottom</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input
                        id="startDate"
                        className="form-control"
                        name="startDate"
                        type="date"
                        onChange={ (e) => setStartDate(e.target.value)}
                        value={ startDate }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="finishDate">Finish Date</label>
                    <input
                        id="finishDate"
                        className="form-control"
                        name="finishDate"
                        type="date"
                        onChange={ (e) => setFinishDate(e.target.value)}
                        value={ finishDate }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="stockLength">Stock Length</label>
                    <input
                        id="stockLength"
                        className="form-control"
                        name="stockLength"
                        type="text"
                        onChange={ (e) => setStockLength(e.target.value)}
                        value={ stockLength }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="customLength">Custom Length</label>
                    <input
                        id="customLength"
                        className="form-control"
                        name="customLength"
                        type="text"
                        onChange={ (e) => setCustomLength(e.target.value)}
                        value={ customLength }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="pictureUrl">Picture URL</label>
                    <input
                        id="pictureUrl"
                        className="form-control"
                        name="pictureUrl"
                        type="text"
                        onChange={ (e) => setPictureUrl(e.target.value)}
                        value={ pictureUrl }
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input
                        id="desc"
                        className="form-control"
                        name="desc"
                        type="text"
                        onChange={ (e) => setDesc(e.target.value)}
                        value={ desc }
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-secondary"
                >
                    Add My Skiff
                </button>
            </form>
        </div>
    );
};

export default NewSkiff;