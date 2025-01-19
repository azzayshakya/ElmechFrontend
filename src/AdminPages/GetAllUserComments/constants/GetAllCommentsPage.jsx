import React, { useState, useEffect } from 'react';
import { useGetAllComments } from '../hooks/useGetAllComments';
import '../css/UserCommentsPage.css';
import { RotatingLines } from "react-loader-spinner";
export default function GetAllCommentsPage() {
  const { fetchComments, comments, isLoading, isError, error } = useGetAllComments();
  const [filteredComments, setFilteredComments] = useState(comments);
  const [timeFilter, setTimeFilter] = useState('all');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    fetchComments(); // Fetch comments when the component loads
  }, [fetchComments]);

  useEffect(() => {
    // Filter comments based on the selected time filter
    const filterComments = () => {
      let filtered = [...comments];
      const now = new Date();

      // Apply time-based filtering
      if (timeFilter === 'lastHour') {
        filtered = filtered.filter(comment => {
          const commentDate = new Date(comment.createdAt);
          return now - commentDate <= 60 * 60 * 1000; // Last 1 hour
        });
      } else if (timeFilter === 'lastDay') {
        filtered = filtered.filter(comment => {
          const commentDate = new Date(comment.createdAt);
          return now - commentDate <= 24 * 60 * 60 * 1000; // Last 24 hours
        });
      } else if (timeFilter === 'lastMonth') {
        filtered = filtered.filter(comment => {
          const commentDate = new Date(comment.createdAt);
          return now - commentDate <= 30 * 24 * 60 * 60 * 1000; // Last 30 days
        });
      }

      // Apply name-based filtering using regex
      if (nameFilter) {
        const regex = new RegExp(nameFilter, 'i'); // 'i' for case-insensitive matching
        filtered = filtered.filter(comment =>
          regex.test(comment.firstName) || regex.test(comment.lastName)
        );
      }

      // Sort comments in reverse order (latest first)
      setFilteredComments(filtered.reverse());
    };

    filterComments(); // Apply filter whenever timeFilter, nameFilter, or comments change
  }, [comments, timeFilter, nameFilter]);

  const handleTimeFilterChange = (e) => {
    setTimeFilter(e.target.value); // Update the time filter based on selection
  };

  const handleNameFilterChange = (e) => {
    setNameFilter(e.target.value); // Update the name filter based on input
  };

  if (isLoading) {
    return (
      <div className="loading-message">
        <div className="spinner"></div>
        <p>Loading your comments...</p>

      </div>
    );
  }

  if (isError) {
    return (
      <div className="error-message">
        <div className="error-icon">❌</div>
        <p>Sorry, failed to fetch comments. {error?.response?.data?.message}</p>
      </div>
    );
  }

  return (
    <div className="comments-page">
      <div className="comments-page-header">
        <h1 className="comments-page-title">All Comments</h1>
        <div className="search-and-filter">
          <input
            type="text"
            id="nameFilter"
            value={nameFilter}
            onChange={handleNameFilterChange}
            className="name-filter-input"
            placeholder="Enter name"
          />

          <div className="filter-dropdown">
            <label htmlFor="timeFilter">Time Filter: </label>
            <select
              id="timeFilter"
              value={timeFilter}
              onChange={handleTimeFilterChange}
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

      {filteredComments.length > 0 ? (
        <div className="comments-list">
          {filteredComments.map((comment, index) => (
            <div key={comment._id || index} className="comment-card">
              <div className="comment-header">
                <div className="comment-avatar">
                  {comment.firstName[0]}{comment.lastName[0]}
                </div>
                <div className="comment-info">
                  <h3 className="comment-name">{comment.firstName} {comment.lastName}</h3>
                  <p className="comment-profession">{comment.profession}</p>
                </div>
              </div>
              <div className="comment-details">
                <p><strong>Email:</strong> {comment.email}</p>
                <p><strong>Phone:</strong> {comment.phone}</p>
                <p><strong>Gender:</strong> {comment.gender}</p>
              </div>
              <div className="comment-body">
                <p>{comment.comment}</p>
              </div>
              <p className="comment-timestamp">
                Posted at: {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-comments-message-here">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="5s"
              width="96"
              visible={true}
            />
            <p>Loading your comments...</p>

        </div>
      )}
    </div>
  );
}
