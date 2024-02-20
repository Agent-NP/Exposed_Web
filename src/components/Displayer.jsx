import React from 'react';

export default function Displayer({ data }) {
  // Handle empty or undefined data gracefully
  if (!data || data.length === 0) {
    return <div>No matches found.</div>;
  }

  return (
    <div className="container py-2 py-lg-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-lg-2 gy-2">
        {data.map((match, index) => (
          <div key={index} className="col">
            <div className="d-flex flex-column rounded border border-2 p-2 border-danger h-100 matchBox">
              <span className="d-inline-block w-100 text-center">
                {match.home} <span className="fw-bold fs-4">vs</span> {match.away}
              </span>
              <table className="table flex-fill">
                <thead>
                  <tr>
                    <th scope="col" colSpan={2} className="text-center fw-bold">
                      Red Cards
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Home</th>
                    <td>{match["red card"]?.home || 0}</td>
                  </tr>
                  <tr>
                    <th scope="row">Away</th>
                    <td>{match["red card"]?.away || 0}</td>
                  </tr>
                </tbody>
              </table>
              <button className="btn btn-danger">
                <a
                  href={match["match link"]}
                  className="text-decoration-none text-light"
                  target="_self"
                >
                  Preview
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
