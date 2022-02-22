import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RequireAuth({ children, redirectTo }) {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  return !isAuthenticated && !loading ? <Navigate to={redirectTo} /> : children;
}

RequireAuth.propTypes = {
  children: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
