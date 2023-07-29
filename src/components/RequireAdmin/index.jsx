import PropTypes from 'prop-types';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RequireAdmin({ children, redirectTo }) {
  const isAdmin = JSON.parse(localStorage.getItem('is_admin')) || false;

  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  if (!isAdmin) return <Navigate to={redirectTo} />;

  return !isAuthenticated && !loading ? <Navigate to={redirectTo} /> : children;
}

RequireAdmin.propTypes = {
  children: PropTypes.elementType.isRequired,
  redirectTo: PropTypes.string.isRequired,
};
