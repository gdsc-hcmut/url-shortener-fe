import PropTypes from 'prop-types';
import React from 'react';

import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_red.svg';

export default function TableBody({ items, handleDelete, isDomain }) {
  return (
    <>
      {items.map((item) => (
        <tr
          className="mb-[8px] flex-row text-xs m-0 rounded-[8px] items-center bg-white block"
          key={item.link}
        >
          <th className="w-[400px] max-w-[400px] pl-[20px] text-left truncate font-normal">
            <span>{item.link}</span>
          </th>
          {!isDomain && (
            <th className="w-[100px] max-w-[100px] text-center items-center truncate font-normal">
              <span>{item.organization || 'nothing'}</span>
            </th>
          )}
          <th className="xl:w-[200px] xl:max-w-[200px] lg:w-[120px] lg:max-w-[120px] w-0 max-w-0 text-center items-center truncate font-normal">
            <span>{item.addedAt}</span>
          </th>
          <th className="xl:w-[200px] xl:max-w-[200px] lg:w-[120px] lg:max-w-[120px] w-0 max-w-0 text-center items-center truncate font-normal">
            <span>{item.addedBy}</span>
          </th>
          <th className="w-[100px] max-w-[100px] font-normal items-center">
            <button
              type="button"
              className="p-[8px] cursor-pointer"
              onClick={(e) => handleDelete(e, item)}
            >
              <DeleteIcon />
            </button>
          </th>
        </tr>
      ))}
    </>
  );
}

TableBody.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      addedAt: PropTypes.string.isRequired,
      addedBy: PropTypes.string.isRequired,
    }),
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
  isDomain: PropTypes.bool.isRequired,
};
