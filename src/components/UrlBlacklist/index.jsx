import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';

// import { SHOW_DELETE_URL_MODAL } from 'action-types';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon_modal.svg';
import TrashIcon from 'assets/icons/delete_icon_red.svg';
import Button from 'components/DeleteModal/Button';

import AddingIcon from '../../assets/icons/add_user.svg';
import LeftArrowIcon from '../../assets/icons/arrow_backward.svg';
import RightArrowIcon from '../../assets/icons/arrow_forward.svg';

export default function UrlBlacklist() {
  const [searchText, setSearchText] = useState('');
  const [listUser, setListUser] = useState([]);
  const [addingLink, setAddingLink] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [dateSearch, setDateSearch] = useState('');
  const [deletingUrl, setDeletingUrl] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  const [pageArray] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const list = [
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh1',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh2',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh3',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh4',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh5',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh6',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh7',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh8',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh9',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhA',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhB',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhC',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhD',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhE',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhF',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
    ];
    setListUser(list);
  }, []);

  const formatDateTime = (time) => `${new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(time)} ${time.getDate()}/${
    time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth()
  }/${time.getFullYear()} ${time.toLocaleTimeString()}`;

  const handleAdd = () => {
    try {
      if (addingLink.length <= 0) throw Error('Please Enter the link');
      listUser.forEach((item) => {
        if (item.link === addingLink) throw Error(`This link has been added at ${item.addedAt}`);
      });
      const current = new Date();
      const newUrl = {
        link: addingLink,
        addedAt: formatDateTime(current),
        addedBy: 'Tran Quoc Hieu',
      };
      setListUser((list) => [...list, newUrl]);
      setAddingLink('');
    } catch (error) {
      console.log(error);
      setAddingLink('');
    }
  };

  const handleDateSearch = (e) => {
    setDateInput(e.target.value);
    if (e.target.value === '') setDateSearch('');
    else {
      const formatingSearch = e.target.value.split('-');
      const formatingDate = `${formatingSearch[2]}/${formatingSearch[1]}/${formatingSearch[0]}`;
      setDateSearch(formatingDate);
    }
  };

  const checkSearch = (item) => item.link.includes(searchText) && item.addedAt.includes(dateSearch);

  const handleDelete = (item) => {
    const newList = listUser.filter((it) => it.link !== item.link);
    setListUser(newList);
    setIsDeleting(false);
  };

  const tableList = () => (
    <table>
      <thead className="flex h-[60px] w-fit text-xl mb-[16px] items-center bg-white text-gdscBlue-300 border-b border-gdscGrey-500 rounded-t-[8px]">
        <th className="w-[664px]">
          <span>LONG LINK</span>
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
        {listUser
          .filter((el) => checkSearch(el))
          .map((item) => (
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
                  // onClick={() => handleDelete(item)}
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
      <div className="modal absolute z-50">
        <div
          aria-hidden="true"
          className={`fixed z-20 inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 transition-all duration-300 ease-out pointer-events-none ${
            isDeleting ? 'opacity-100 pointer-events-auto' : ''
          }`}
        >
          <div
            aria-hidden="true"
            className="w-[320px] sm:w-[376px] h-[376px] md:w-[412px] px-[20px] sm:px-[58px] py-8 flex flex-col items-center border bg-white rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <DeleteIcon />
            </div>
            <span className="text-2xl font-normal text-gdscRed-300 mt-7">
              ARE YOU SURE?
            </span>
            <span className="text-base text-gdscGrey-800 text-center mt-7 md:mt-9">
              The link will be removed from URL Blacklist
            </span>
            <div className="w-[260px] mt-3 flex justify-between">
              <Button text="Cancel" onClick={() => setIsDeleting(false)} />
              <Button text="Delete" onClick={() => handleDelete(deletingUrl)} />
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-[8px]">
        <h1 className="font-medium text-[32px] mb-[28px]">Url Blacklist</h1>
        <div className="flex h-[60px] mb-[20px]">
          <input
            className="p-[20px] w-[500px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            placeholder="Search URL..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
          <button type="button" onClick={() => handleAdd()}>
            <img
              src={AddingIcon}
              alt="adding"
              className="cursor-pointer w-[36px] h-[36px]"
            />
          </button>
        </div>
      </div>
      <div className="text-base text-gdscGrey-700 mb-[16px]">
        Total results:
        {' '}
        {listUser.filter((el) => checkSearch(el)).length}
      </div>
      {tableList()}
      <div className="flex items-center justify-center font-normal">
        <button type="button">
          <img src={LeftArrowIcon} alt="Previous" />
        </button>
        <ul className="inline-block">
          {pageArray.map((item) => (
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
