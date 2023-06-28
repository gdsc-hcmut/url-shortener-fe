import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { SHOW_DELETE_URL_MODAL } from 'action-types';
import TrashIcon from 'assets/icons/delete_icon_red.svg';
// import DeleteModal from 'components/DeleteModal';

import AddingIcon from '../../assets/icons/add_user.svg';
import LeftArrowIcon from '../../assets/icons/arrow_backward.svg';
import RightArrowIcon from '../../assets/icons/arrow_forward.svg';

export default function Urlblacklist() {
  const [search, setSearch] = useState('');
  const [listuser, setListuser] = useState([]);
  const [addlink, setAddlink] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [datesearch, setDatesearch] = useState('');
  // const dispatch = useDispatch();
  const [pageCount] = useState([1, 2, 3, 4]);
  // const DeleteUrlModal = useSelector(
  //   (state) => state.showModal,
  // );

  useEffect(() => {
    const list = [
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh1',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh2',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh3',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh4',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh5',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh6',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh7',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh8',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh9',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhA',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhB',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhC',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhD',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhE',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhF',
        addedat: '20:30 - 17/06/2023',
        addedby: 'Tran Quoc Hieu',
      },
    ];
    setListuser(list);
  }, []);

  const handleAdding = () => {
    try {
      if (addlink.length <= 0) throw Error('Please Enter the link');
      listuser.forEach((el) => {
        if (el.link === addlink) throw Error(`This link has been added at ${el.addedat}`);
      });
      const current = new Date();
      const clearFormat = (num) => (num > 9 ? `${num}` : `0${num}`);
      const newUser = {
        link: addlink,
        addedat: `${clearFormat(current.getHours())}:${clearFormat(
          current.getMinutes(),
        )} 
          - ${clearFormat(current.getDate())}/${clearFormat(
  current.getMonth() + 1,
)}/${clearFormat(current.getFullYear())}`,
        addedby: 'Tran Quoc Hieu',
      };
      // console.log(newUser);
      // console.log(listuser[0]);
      setListuser((ls) => [...ls, newUser]);
      setAddlink('');
    } catch (error) {
      console.log(error);
      setAddlink('');
    }
  };

  const handleDatesearch = (e) => {
    setDateInput(e.target.value);
    // console.log(dateInput);
    if (e.target.value === '') setDatesearch('');
    else {
      const formatsearch = e.target.value.split('-');
      const formatdate = `${formatsearch[2]}/${formatsearch[1]}/${formatsearch[0]}`;
      setDatesearch(formatdate);
    }
  };

  const checkSearch = (el) => el.link.includes(search) && el.addedat.includes(datesearch);

  const handleDelete = (item) => {
    // dispatch({
    //   type: SHOW_DELETE_URL_MODAL,
    //   payload: true,
    // });
    const newList = listuser.filter((it) => it.link !== item.link);
    setListuser(newList);
  };

  return (
    <div className="no-scrollbar text-base overflow-scroll display-none">
      {/* <div className="modal absolute z-50">
        <DeleteModal
          // id={currId}
          text="The shortened link and all relevant data will be removed."
          onClose={() => dispatch({
            type: SHOW_DELETE_URL_MODAL,
            payload: false,
          })}
          show={DeleteUrlModal}
        />
      </div> */}
      <div className="rounded-[8px]">
        <h1 className="font-medium text-[32px] mb-[28px]">Url Blacklist</h1>
        <div className="flex h-[60px] mb-[20px]">
          <input
            className="p-[20px] w-[500px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            placeholder="Search URL..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className="p-[20px] w-[200px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            type="date"
            value={dateInput}
            onChange={(e) => handleDatesearch(e)}
          />
          <input
            className="p-[20px] w-[500px] mr-[20px] rounded-[8px] outline-none border-gdscGrey-300 border-[1px] border-solid focus:border-gdscBlue-300 focus:border-[1px] focus:border-solid"
            placeholder="Add URL..."
            value={addlink}
            onChange={(e) => setAddlink(e.target.value)}
          />
          <button type="button" onClick={() => handleAdding()}>
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
        {listuser.filter((el) => checkSearch(el)).length}
      </div>
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
          {listuser
            .filter((el) => checkSearch(el))
            .map((item) => (
              <tr
                className="mb-[16px] flex-row text-xl m-0 h-[60px] rounded-[8px] bg-white block"
                key={item.link}
              >
                <th className="w-[664px] max-w-[664px] p-[20px] text-left whitespace-nowrap overflow-hidden text-ellipsis font-normal">
                  {item.link}
                </th>
                <th className="w-[300px] text-center items-center whitespace-nowrap overflow-hidden text-ellipsis font-normal">
                  {item.addedat}
                </th>
                <th className="w-[300px] text-center items-center whitespace-nowrap overflow-hidden text-ellipsis font-normal">
                  {item.addedby}
                </th>
                <th className="w-[190px] font-normal items-center">
                  <button
                    type="button"
                    className="bg-gdscRed-100 p-[8px] rounded-[8px] cursor-pointer"
                    onClick={() => handleDelete(item)}
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
      <div className="flex items-center justify-center font-normal">
        <button type="button">
          <img src={LeftArrowIcon} alt="Previous" />
        </button>
        <ul className="inline-block">
          {pageCount.map((item) => (
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
