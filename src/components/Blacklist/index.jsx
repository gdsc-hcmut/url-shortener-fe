import { LocalizationProvider, MobileDatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField } from '@mui/material';
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
  // linkSearch,
  setLinkSearch,
  setDateSearch,
}) {
  const [linkInput, setLinkInput] = useState('');
  const [dateInput, setDateInput] = useState(null);
  const [addingLink, setAddingLink] = useState('');
  const [deletingUrl, setDeletingUrl] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [pageList, setPageList] = useState([]);
  const [datePicker, setDatePicker] = useState(false);
  const [dateSearchMode, setDateSearchMode] = useState(false);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const pageArray = [1];
    const pageCount = Math.ceil(linkList.length / 10);
    for (let i = 2; i <= pageCount; i += 1) {
      pageArray.push(i);
    }
    setPageList(pageArray);
  }, [linkList]);

  useEffect(() => {
    if (dateSearchMode) {
      if (dateInput === null) {
        setDateSearch('');
        return;
      }
      const formatingDate = `${
        dateInput.getDate() < 10
          ? `0${dateInput.getDate()}`
          : dateInput.getDate()
      }/${
        dateInput.getMonth() < 9
          ? `0${dateInput.getMonth() + 1}`
          : `${dateInput.getMonth() + 1}`
      }/${dateInput.getFullYear()}`;
      setDateSearch(formatingDate);
    } else {
      setDateSearch('');
    }
  }, [dateSearchMode, dateInput]);

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      onAdd(addingLink);
      setAddingLink('');
    }
  };

  const handleLinkSearch = (e) => {
    setLinkInput(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      setLinkSearch(e.target.value);
    }, 300);
  };

  const table = () => (
    <table>
      <thead className="flex h-[60px] w-fit text-xl mb-[16px] items-center bg-white text-gdscBlue-300 border-b border-gdscGrey-500 rounded-t-[8px]">
        <th className="3xl:w-[664px] 3xl:max-w-[664px] xl:w-[600px] xl:max-w-[600px] w-[500px] max-w-[500px]">
          <span>{title === 'Domain Blacklist' ? 'DOMAIN' : 'LONG LINK'}</span>
        </th>
        <th className="3xl:w-[340px] 3xl:max-w-[340px] xl:w-[220px] xl:max-w-[220px] w-0 max-w-0 truncate">
          <span>ADDED AT</span>
        </th>
        <th className="3xl:w-[300px] 3xl:max-w-[300px] 2xl:w-[200px] 2xl:max-w-[200px] w-0 max-w-0 truncate">
          <span>ADDED BY</span>
        </th>
        <th className="w-[160px] max-w-[160px]">
          <span>ACTIONS</span>
        </th>
      </thead>
      <tbody>
        {linkList.map((item) => (
          <tr
            className="mb-[16px] flex-row text-xl m-0 h-[60px] rounded-[8px] bg-white block"
            key={item.link}
          >
            <th className="3xl:w-[664px] 3xl:max-w-[664px] xl:w-[600px] xl:max-w-[600px] w-[500px] max-w-[500px]  pl-[20px] py-[16px] text-left truncate font-normal">
              {item.link}
            </th>
            <th className="3xl:w-[340px] 3xl:max-w-[340px] xl:w-[220px] xl:max-w-[220px] w-0 max-w-0 text-center items-center truncate font-normal">
              {item.addedAt}
            </th>
            <th className="3xl:w-[300px] 3xl:max-w-[300px] 2xl:w-[200px] 2xl:max-w-[200px] w-0 max-w-0 text-center items-center truncate font-normal">
              {item.addedBy}
            </th>
            <th className="w-[160px] max-w-[160px] font-normal items-center">
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
        <div className="xl:flex grid grid-rows-2 gap-[20px] mb-[20px]">
          <div className="flex h-[60px]">
            <input
              className="3xl:w-[500px] 2xl:w-[400px] xl:w-[300px] w-[400px] p-[20px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
              placeholder={`Search ${
                title === 'Domain Blacklist' ? 'Domain' : 'Url'
              }...`}
              value={linkInput}
              onChange={(e) => handleLinkSearch(e)}
            />
            {dateSearchMode ? (
              <div
                className="flex px-[20px] items-center w-[200px] rounded-[8px] outline-none border-gdscBlue-300 border-[1px] border-solid
              bg-white font-normal justify-between"
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
                <CloseIcon
                  className="cursor-pointer"
                  onClick={() => setDateSearchMode(false)}
                />
              </div>
            ) : (
              <div
                className="flex px-[20px] items-center w-[200px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid
                  bg-white text-gdscGrey-500 font-normal justify-between"
              >
                <span>dd/mm/yyyy</span>
                <CalendarIcon
                  onClick={() => {
                    setDateSearchMode(true);
                    setDatePicker(true);
                  }}
                  className="cursor-pointer"
                />
              </div>
            )}
          </div>
          <div className="flex h-[60px]">
            <input
              className="p-[20px] 3xl:w-[500px] 2xl:w-[400px] xl:w-[300px] w-[400px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
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
      <div className="text-base text-gdscGrey-700 mb-[16px]">
        {`Total results: ${linkList.length}`}
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
  // linkSearch: PropTypes.string.isRequired,
  setLinkSearch: PropTypes.func.isRequired,
};

Blacklist.defaultProps = {
  linkList: [],
};
