import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import AddingIcon from 'assets/icons/add_user.svg';
import LeftArrowIcon from 'assets/icons/arrow_backward.svg';
import RightArrowIcon from 'assets/icons/arrow_forward.svg';
import TrashIcon from 'assets/icons/delete_icon_red.svg';
import DeleteModal from 'components/DeleteModalV2';

export default function Blacklist({
  title,
  linkList,
  onDelete,
  onAdd,
  linkSearch,
  setLinkSearch,
  setDateSearch,
}) {
  // const [textInput, setTextInput] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [addingLink, setAddingLink] = useState('');
  const [deletingUrl, setDeletingUrl] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [pageList, setPageList] = useState([]);

  useEffect(() => {
    const pageArray = [1];
    const pageCount = Math.ceil(linkList.length / 10);
    for (let i = 2; i <= pageCount; i += 1) {
      pageArray.push(i);
    }
    setPageList(pageArray);
  }, [linkList]);

  const handleDateSearch = (e) => {
    setDateInput(e.target.value);
    if (e.target.value === '') setDateSearch('');
    else {
      const formatingSearch = e.target.value.split('-');
      const formatingDate = `${formatingSearch[2]}/${formatingSearch[1]}/${formatingSearch[0]}`;
      setDateSearch(formatingDate);
    }
  };

  const table = () => (
    <table>
      <thead className="flex h-[60px] w-fit text-xl mb-[16px] items-center bg-white text-gdscBlue-300 border-b border-gdscGrey-500 rounded-t-[8px]">
        <th className="w-[664px]">
          <span>{title === 'Domain Blacklist' ? 'DOMAIN' : 'LONG LINK'}</span>
        </th>
        <th className="w-[300px]">
          <span>ADDED AT</span>
        </th>
        <th className="w-[300px]">
          <span>ADDED BY</span>
        </th>
        <th className="w-[190px]">
          <span>ACTIONS</span>
        </th>
      </thead>
      <tbody>
        {linkList.map((item) => (
          <tr
            className="mb-[16px] flex-row text-xl m-0 h-[60px] rounded-[8px] bg-white block"
            key={item.link}
          >
            <th className="w-[664px] max-w-[664px] pl-[20px] py-[16px] text-left whitespace-nowrap overflow-hidden text-ellipsis font-normal">
              {item.link}
            </th>
            <th className="w-[300px] text-center items-center whitespace-nowrap overflow-hidden text-ellipsis font-normal">
              {item.addedAt}
            </th>
            <th className="w-[300px] text-center items-center whitespace-nowrap overflow-hidden text-ellipsis font-normal">
              {item.addedBy}
            </th>
            <th className="w-[190px] font-normal items-center">
              <button
                type="button"
                className="bg-gdscRed-100 p-[8px] rounded-[8px] cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setDeletingUrl(item);
                  setIsDeleting(true);
                }}
              >
                <img
                  src={TrashIcon}
                  alt="Delete"
                  className="w-[24px] h-[24px] mr-auto ml-auto"
                />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div
      className={`no-scrollbar text-base display-none ${
        isDeleting ? 'overflow-hidden' : 'overflow-scroll'
      }`}
    >
      <DeleteModal
        title={title}
        onDelete={onDelete}
        deletingUrl={deletingUrl}
        show={isDeleting}
        setShow={setIsDeleting}
      />
      <div className="rounded-[8px]">
        <h1 className="font-medium text-[32px] mb-[28px]">{title}</h1>
        <div className="flex h-[60px] mb-[20px]">
          <input
            className="p-[20px] w-[500px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            placeholder="Search URL..."
            value={linkSearch}
            onChange={(e) => {
              setLinkSearch(e.target.value.trim());
            }}
          />
          <input
            className="p-[20px] w-[200px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            type="date"
            value={dateInput}
            onChange={(e) => handleDateSearch(e)}
          />
          <input
            className="p-[20px] w-[500px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            placeholder="Add URL..."
            value={addingLink}
            onChange={(e) => setAddingLink(e.target.value)}
          />
          <button
            type="button"
            onClick={() => {
              onAdd(addingLink);
              setAddingLink('');
            }}
          >
            <img
              src={AddingIcon}
              alt="Adding"
              className="cursor-pointer w-[36px] h-[36px]"
            />
          </button>
        </div>
      </div>
      <div className="text-base text-gdscGrey-700 mb-[16px]">
        Total results:
        {' '}
        {linkList.length}
      </div>
      {table()}
      <div className="flex items-center justify-center font-normal">
        <button type="button">
          <img src={LeftArrowIcon} alt="Previous" />
        </button>
        <ul className="inline-block">
          {pageList.map((item) => (
            <li className="inline-block mx-[16px] cursor-pointer pt-[8px] text-center text-[20px] w-[36px] h-[36px] rounded-full hover:bg-gdscBlue-100">
              {item}
            </li>
          ))}
        </ul>
        <button type="button">
          <img src={RightArrowIcon} alt="Next" />
        </button>
      </div>
    </div>
  );
}

Blacklist.propTypes = {
  title: PropTypes.string.isRequired,
  linkList: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      addedAt: PropTypes.string.isRequired,
      addedBy: PropTypes.string.isRequired,
    }),
  ),
  onAdd: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  setDateSearch: PropTypes.func.isRequired,
  linkSearch: PropTypes.string.isRequired,
  setLinkSearch: PropTypes.func.isRequired,
};

Blacklist.defaultProps = {
  linkList: [],
};
