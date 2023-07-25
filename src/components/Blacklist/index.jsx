/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CircularProgress, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import { ReactComponent as AddingIcon } from 'assets/icons/add_user.svg';
import LeftArrowIcon from 'assets/icons/arrow_backward.svg';
import RightArrowIcon from 'assets/icons/arrow_forward.svg';
import { ReactComponent as CalendarIcon } from 'assets/icons/calender.svg';
import { ReactComponent as CloseIcon } from 'assets/icons/close_icon_snackbar.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_red.svg';
import DeleteModal from 'components/DeleteModalV2';

export default function Blacklist({
  title,
  linkList,
  onDelete,
  onAdd,
  setLinkSearch,
  setDateSearch,
  totalResult,
  maxPage,
  currentPage,
  setCurrentPage,
  fetchLoading,
}) {
  const [linkInput, setLinkInput] = useState('');
  const [dateInput, setDateInput] = useState(null);
  const [addingLink, setAddingLink] = useState('');
  const [deletingUrl, setDeletingUrl] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(1);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    if (dateInput === null) {
      setDateSearch('');
      return;
    }
    const formatingDate = `${dateInput.getDate()}-${
      dateInput.getMonth() + 1
    }-${dateInput.getFullYear()}`;
    setDateSearch(formatingDate);
  }, [dateInput]);

  const handleLinkSearch = (e) => {
    setLinkInput(e.target.value);
    setIsloading(true);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setLinkSearch(e.target.value);
      setIsloading(false);
    }, 300);
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      onAdd(addingLink);
      setAddingLink('');
    }
  };

  const onLoadPage = (pageNumber) => {
    if (pageNumber === currentPage) return;
    if (pageNumber < 1 || pageNumber > maxPage) return;
    setCurrentPage(pageNumber);
  };

  const table = () => (
    <table>
      <thead className="flex h-[40px] w-fit text-xs mb-[8px] items-center bg-white text-gdscBlue-300 border-b border-gdscGrey-500 rounded-t-[8px]">
        <th className="w-[400px] max-w-[400px]">
          <span>{title === 'Domain Blacklist' ? 'DOMAIN' : 'LONG LINK'}</span>
        </th>
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
        {linkList.map((item) => (
          <tr
            className="mb-[8px] flex-row text-xs m-0 rounded-[8px] items-center bg-white block"
            key={item.link}
          >
            <th className="w-[400px] max-w-[400px] pl-[20px] text-left truncate font-normal">
              <span>{item.link}</span>
            </th>
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
                onClick={(e) => {
                  e.stopPropagation();
                  setDeletingUrl(item);
                  setIsDeleting(true);
                }}
              >
                <DeleteIcon />
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const paginationBar = () => {
    const result = [];
    if (maxPage <= 5) {
      for (let i = 1; i <= maxPage; i += 1) {
        result.push(
          <li
            className={`inline-block mx-[16px] cursor-pointer p-[8px] text-[20px] rounded-[8px] border border-gdscBlue-100 hover:bg-gdscGrey-200 ${
              i === currentPage ? 'bg-gdscBlue-100' : ''
            }`}
            onClick={() => onLoadPage(i)}
          >
            {i}
          </li>,
        );
      }
    } else {
      let leftMostPage;
      if (currentPage <= 3) leftMostPage = 1;
      else if (currentPage + 2 <= maxPage) leftMostPage = currentPage - 2;
      else leftMostPage = maxPage - 4;
      for (let i = leftMostPage; i <= leftMostPage + 4; i += 1) {
        result.push(
          <li
            className={`inline-block mx-[16px] cursor-pointer p-[8px] text-[20px] rounded-[8px] border border-gdscBlue-100 hover:bg-gdscGrey-200 ${
              i === currentPage ? 'bg-gdscBlue-100' : ''
            }`}
            onClick={() => onLoadPage(i)}
          >
            {i}
          </li>,
        );
      }
    }

    return (
      <div className="flex items-center justify-center font-normal">
        <button type="button" onClick={() => onLoadPage(currentPage - 1)}>
          <img src={LeftArrowIcon} alt="Previous" />
        </button>
        <ul className="inline-block">{result}</ul>
        <button type="button" onClick={() => onLoadPage(currentPage + 1)}>
          <img src={RightArrowIcon} alt="Next" />
        </button>
      </div>
    );
  };

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
        <h1 className="font-medium text-[20px] mb-[16px]">{title}</h1>
        <div className="xl:flex grid grid-rows-2 gap-[20px] mb-[12px] text-xs">
          <div className="flex h-[40px]">
            <input
              className="w-[300px] px-[12px] mr-[20px] rounded-[8px] outline-none placeholder:text-xs
              border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
              placeholder={`Search ${
                title === 'Domain Blacklist' ? 'Domain' : 'Url'
              }...`}
              value={linkInput}
              onChange={(e) => handleLinkSearch(e)}
            />
            <div
              className={`dateInputSearch flex px-[12px] items-center text-xs relative w-[150px] rounded-[8px] outline-none ${
                dateInput === null
                  ? 'border-gdscGrey-300'
                  : 'border-gdscBlue-300'
              } border-[1px] border-solid
              bg-white font-normal justify-between`}
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MobileDatePicker
                  allowSameDateSelection
                  onClick={() => setDatePicker(true)}
                  onAccept={() => setDatePicker(false)}
                  open={datePicker}
                  value={dateInput}
                  onChange={(newTime) => setDateInput(newTime)}
                  renderInput={(params) => (
                    <TextField
                      id="standard-basic"
                      variant="standard"
                      {...params}
                      InputProps={{ disableUnderline: true }}
                    />
                  )}
                />
              </LocalizationProvider>
              {dateInput === null ? (
                <div className="absolute text-gdscGrey-500">mm/dd/yyyy</div>
              ) : (
                ''
              )}
              {dateInput !== null ? (
                <CloseIcon
                  className="cursor-pointer"
                  onClick={() => setDateInput(null)}
                />
              ) : (
                <CalendarIcon
                  onClick={() => {
                    setDatePicker(true);
                  }}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <div className="flex h-[40px]">
            <input
              className="px-[12px] w-[300px] mr-[20px] rounded-[8px] outline-none placeholder:text-xs
                border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
              placeholder={`Add ${
                title === 'Domain Blacklist' ? 'Domain' : 'Url'
              }...`}
              value={addingLink}
              onChange={(e) => setAddingLink(e.target.value)}
              onKeyDown={(e) => handleEnterKey(e)}
            />
            <button
              type="button"
              onClick={() => {
                onAdd(addingLink);
                setAddingLink('');
              }}
            >
              <AddingIcon className="cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
      <div className="text-base text-gdscGrey-700 mb-[12px]">
        {`Total results: ${totalResult}`}
      </div>
      {isLoading || fetchLoading ? (
        <div className="text-center">
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <>
          {table()}
          {paginationBar()}
        </>
      )}
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
  setLinkSearch: PropTypes.func.isRequired,
  totalResult: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  fetchLoading: PropTypes.bool.isRequired,
};

Blacklist.defaultProps = {
  linkList: [],
};
