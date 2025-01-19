import React, { useState, useEffect } from 'react';
import { useGetAllQueries } from '../hooks/useGetAllQueries';
import '../css/GetAllUserQueries.css';
import { RotatingLines } from 'react-loader-spinner';

export default function UserQueriesPage() {
  const { fetchQueries, queries, isLoading, isError, error } = useGetAllQueries();
  const [filteredQueries, setFilteredQueries] = useState([]);
  const [timeFilter, setTimeFilter] = useState('all');
  const [searchName, setSearchName] = useState('');

  useEffect(() => {
    fetchQueries(); // Fetch queries when the component loads
  }, [fetchQueries]);

  useEffect(() => {
    // Apply both time filtering and search filtering
    const filterQueries = () => {
      let filtered = [...queries];
      const now = new Date();

      // Time filter
      if (timeFilter === 'lastHour') {
        filtered = filtered.filter(query => {
          const queryDate = new Date(query.createdAt);
          return now - queryDate <= 60 * 60 * 1000;
        });
      } else if (timeFilter === 'lastDay') {
        filtered = filtered.filter(query => {
          const queryDate = new Date(query.createdAt);
          return now - queryDate <= 24 * 60 * 60 * 1000;
        });
      } else if (timeFilter === 'lastMonth') {
        filtered = filtered.filter(query => {
          const queryDate = new Date(query.createdAt);
          return now - queryDate <= 30 * 24 * 60 * 60 * 1000;
        });
      }

      // Search filter
      if (searchName.trim()) {
        filtered = filtered.filter(query =>
          query.name.toLowerCase().includes(searchName.toLowerCase())
        );
      }

      // Sort queries in reverse order (latest first)
      setFilteredQueries(filtered.reverse());
    };

    filterQueries();
  }, [queries, timeFilter, searchName]);

  const handleFilterChange = (e) => {
    setTimeFilter(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchName(e.target.value);
  };

  if (isLoading) {
    return (
      <div className="loading-message">
        <div className="spinner"></div>
        <p>Loading your queries...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-message">
        <div className="error-icon">❌</div>
        <p>Sorry, failed to fetch queries. {error?.response?.data?.message}</p>
      </div>
    );
  }

  return (
    <div className="queries-page">
      <div className="queries-page-header">
        <h1 className="queries-page-title">All Queries</h1>
        <div className="search-and-filter">
          <input
            type="text"
            placeholder="Search by name"
            value={searchName}
            onChange={handleSearchChange}
            className="search-input"
          />
          <div className="filter-dropdown">
            <label htmlFor="timeFilter">Filter: </label>
            <select
              id="timeFilter"
              value={timeFilter}
              onChange={handleFilterChange}
              className="filter-select"
            >
              <option value="all">All</option>
              <option value="lastHour">Last Hour</option>
              <option value="lastDay">Last Day</option>
              <option value="lastMonth">Last Month</option>
            </select>
          </div>
        </div>
      </div>

      {filteredQueries.length > 0 ? (
        <div className="queries-list">
          {filteredQueries.map((query, index) => (
            <div key={query._id || index} className="query-card">
              <div className="query-header">
                <div className="query-avatar">{query.name[0]}</div>
                <div className="query-info">
                  <h3 className="query-name">{query.name}</h3>
                  <p className="query-email">{query.email}</p>
                </div>
              </div>
              <div className="query-details">
                <p><strong>Mobile:</strong> {query.mobile}</p>
                <p><strong>Location:</strong> {query.location}</p>
                <p><strong>Message:</strong> {query.message}</p>
              </div>
              <p className="query-timestamp">
                Submitted at: {new Date(query.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-queries-message">
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="5s"
            width="96"
            visible={true}
          />
          <p>Loading your queries...</p>
        </div>
      )}
    </div>
  );
}
