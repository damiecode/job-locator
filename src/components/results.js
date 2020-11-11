import React from 'react';
import JobDetail from './JobDetails';

const Results = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((job, index) => (
        <JobDetail key={job.id} {...job} index={index} />
      ))}
    </div>
  );
};
export default Results;
