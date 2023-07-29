import PropTypes from 'prop-types';
import React from 'react';

// import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_red.svg';
import TableBody from './TableBody';

export default function Table({
  list, isDomain, setDelete, setIsDeleting,
}) {
  const handleDelete = (e, item) => {
    e.stopPropagation();
    setDelete(item);
    setIsDeleting(true);
  };

  return (
    <table>
      <thead className="flex h-[40px] w-fit text-xs mb-[8px] items-center bg-white text-gdscBlue-300 border-b border-gdscGrey-500 rounded-t-[8px]">
        <th className="w-[400px] max-w-[400px]">
          <span>{isDomain ? 'DOMAIN' : 'LONG LINK'}</span>
        </th>
        {!isDomain && (
          <th className="w-[100px] max-w-[100px]">
            <span>ORGANIZATION</span>
          </th>
        )}
        <th className="xl:w-[200px] xl:max-w-[200px] lg:w-[120px] lg:max-w-[120px] w-0 max-w-0 truncate">
          <span>ADDED AT</span>
        </th>
        <th className="xl:w-[200px] xl:max-w-[200px] lg:w-[120px] lg:max-w-[120px] w-0 max-w-0 truncate">
          <span>ADDED BY</span>
        </th>
        <th className="w-[100px] max-w-[100px]">
          <span>ACTIONS</span>
        </th>
      </thead>
      <tbody>
        <TableBody
          items={list}
          handleDelete={handleDelete}
          isDomain={isDomain}
        />
      </tbody>
    </table>
  );
}

Table.propTypes = {
  isDomain: PropTypes.bool.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      addedAt: PropTypes.string.isRequired,
      addedBy: PropTypes.string.isRequired,
    }),
  ),
  setDelete: PropTypes.func.isRequired,
  setIsDeleting: PropTypes.func.isRequired,
};

Table.defaultProps = {
  list: [],
};
