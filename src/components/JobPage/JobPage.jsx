import React, { useState } from 'react';
import './JobPage.css';

const JobPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const findData = async () => {
        const parameter1 = document.getElementById("parameter1").value;
        const parameter2 = document.getElementById("parameter2").value;
        const parameter3 = document.getElementById("parameter3").value;

        setLoading(true);

        if (!parameter1 || !parameter2 || !parameter3) {
            alert("Please provide all parameters");
            setLoading(false);
            return;
        }

        const encodedQuery = encodeURIComponent(parameter1);
        const url = `https://jsearch.p.rapidapi.com/search?query=${encodedQuery}&page=1&num_pages=1&remote_jobs_only=${parameter2}&country=${parameter3}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '44712b7dc0mshc4efde86658ad08p1099a6jsn02c6eefedc04',
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const result = await response.json();
            setJobs(result.data);
        } catch (error) {
            console.error(error);
            alert('Failed to fetch data. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ overflow: "hidden" }}>
            <div className="wrapper-page">
                <div className="wrapper-sidebar">
                    <div className="mb-3 sidebar">
                        <label htmlFor="parameter1" className="form-label">What type of job are you looking for?</label>
                        <textarea className="form-control" id="parameter1" placeholder="eg: Manager, developer, etc " rows="3" cols="30"></textarea>
                        <select className="form-select" id="parameter2" aria-label="Remote job only?">
                            <option value="">Remote job only?</option>
                            <option value="true">Remote job - Yes</option>
                            <option value="false">Remote job - No</option>
                        </select>
                        <select className="form-select" id="parameter3" aria-label="Country">
                            <option value="">Country</option>
                            <option value="in">India (IN)</option>
                            <option value="th">Thailand (TH)</option>
                            <option value="us">America (US)</option>
                        </select>
                        <button type="button" style={{ minWidth: "20%" }} onClick={findData} className="btn btn-secondary">Find</button>
                    </div>
                </div>
                <div className="wrapper-results">
                    <h4 style={{ padding: "2vh 0vh 0vh 5vh", width: "100%" }}>Search Results :</h4>
                    <hr />
                    <div className="parent-wrapper-cards">
                        <div style={{ padding: "2vh 5vh 0vh 5vh" }} className="wrapper-cards">
                            {loading && <div className="loader"></div>}
                            {jobs.map((item, index) => (
                                <div className="row g-0 card-body" key={index}>
                                    <div className="col-md-8">
                                        <div>
                                            <h2 className="card-title mb-4">{item.job_title}</h2>
                                            <p className="card-text"><strong>Company:</strong> {item.employer_name}</p>
                                            <hr className="my-3" />
                                            <p className="card-text"><strong>Company Website:</strong> <a href={item.employer_website} target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted">www.elance.com</a></p>
                                            <p className="card-text"><strong>Apply Now:</strong> <a href={item.job_apply_link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Start Your Journey</a></p>
                                            <hr className="my-3" />
                                            <p className="card-text text-muted">
                                                <strong>Description:</strong> {item.job_description}
                                            </p>
                                            <hr className="my-3" />
                                            <p className="card-text"><strong>Location:</strong> {item.job_city}, {item.job_country}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 d-flex align-items-center justify-content-center">
                                        {item.employer_logo ? <img src={item.employer_logo} className="img-fluid rounded-start" alt="Job Image" /> : item.employer_name}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobPage;
