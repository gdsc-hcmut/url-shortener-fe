import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { SHOW_COPY_SUCCESS_MODAL, SHOW_EDIT_URL_MODAL } from 'action-types';
import {
  toggleSuccessModalOpen,
  toggleSuccessModalClose,
} from 'actions/notification';
import { ReactComponent as ArrowBackward } from 'assets/icons/arrow_backward.svg';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as ArrowForward } from 'assets/icons/arrow_forward.svg';
import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import EditSlugModal from 'components/EditSludModal';
import ModalSucess from 'components/ModalSuccess';
import fakeGetUrlsList, { MAX_URL_PER_PAGE } from 'services/getUrlsList';

export default function MyUrl({ slug }) {
  const [option, setOption] = useState('Most Clicked');
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [pageNum, setPageNum] = useState(1);
  const [currSlug, setCurrSlug] = useState('');
  const dispatch = useDispatch();
  const { CopySuccessModal, EditUrlModal } = useSelector(
    (state) => state.showModal,
  );

  const sortOptions = ['Most Clicked', 'Less Clicked', 'Latest', 'Oldest'];
  const maxNumPage = Math.ceil(fakeGetUrlsList.length / MAX_URL_PER_PAGE);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const filterUrl = (short, long, searchVal) => {
    let longFiltered = long;
    if (longFiltered.startsWith('https://')) {
      longFiltered = longFiltered.substring(8);
    } else if (longFiltered.startsWith('http://')) {
      longFiltered = longFiltered.substring(7);
    }

    if (longFiltered.startsWith('www.')) {
      longFiltered = longFiltered.substring(4);
    }
    return longFiltered.startsWith(search) || short.startsWith(`/${searchVal}`);
  };

  useEffect(() => {
    if (CopySuccessModal) {
      setTimeout(() => {
        dispatch(toggleSuccessModalClose());
      }, 3000);
    }
  }, [CopySuccessModal]);

  return (
    <div className="bg-opacity-0 flex flex-col md:w-[392px] h-full w-full md:pr-0 md:p-0 py-5 pr-5">
      <div className="modal absolute z-50">
        <EditSlugModal
          slug={currSlug}
          onClose={() => dispatch({
            type: SHOW_EDIT_URL_MODAL,
            payload: false,
          })}
          show={EditUrlModal}
        />
        <ModalSucess
          text="Link copied to clipboard."
          onClose={() => dispatch({
            type: SHOW_COPY_SUCCESS_MODAL,
            payload: false,
          })}
          show={CopySuccessModal}
        />
      </div>
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>

      <button
        type="button"
        className="z-10 w-40 h-11 text-base text-gdscGrey-700 px-5 outline-none bg-white my-3 mx-0 self-end text-left cursor-pointer focus:outline-none focus:ring-1 focus:ring-gdscBlue-300 focus:border-gdscBlue-300 rounded block md:absolute md:mt-1 md:mr-4"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={handleClick}
      >
        <span className="flex items-center justify-between">
          <span className="inline truncate py-3">{option}</span>
          <span className="">
            <ArrowDown />
          </span>
        </span>
        <div
          className={`relative top-2 right-5 space-y-2 w-40 h-[116px] bg-white rounded font-light shadow-md text-base px-5 py-3 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {sortOptions
            .filter((el) => el !== option)
            .map((el) => (
              <div
                aria-hidden="true"
                key={el}
                className="block"
                onClick={() => {
                  setOption(el);
                  setIsOpen(false);
                }}
              >
                {el}
              </div>
            ))}
        </div>
      </button>

      <input
        className="w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light md:w-[376px] relative"
        placeholder="Search your URL ..."
        value={search}
        onChange={handleSearch}
      />
      <ul className="md:overflow-y-scroll mt-10 space-y-10 relative h-full ">
        {fakeGetUrlsList
          .filter((url, index) => {
            if (search) {
              return filterUrl(url.slug, url.longUrl, search);
            }
            return Math.ceil((index + 1) / MAX_URL_PER_PAGE) === pageNum;
          })
          .map((url) => (
            <li
              key={url.slug}
              className={`w-full h-[100px] flex flex-col space-y-2 justify-center rounded font-normal md:w-[376px] ${
                url.slug === `/${slug}`
                  ? 'bg-[#F1F6FE] border-2 border-gdscBlue-300 p-[18px]'
                  : 'bg-white px-5'
              } `}
            >
              <Link
                to={`/detail${url.slug}`}
                className="text-xl h-6 font-medium w-64 overflow-x-hidden truncate "
              >
                <span>{url.longUrl}</span>
              </Link>
              <span className="flex justify-between">
                <span className="text-base text-gdscGrey-700 w-32 overflow-clip  ">
                  {url.slug}
                </span>
                <div className="flex space-x-2 lg:hidden">
                  <button
                    type="button"
                    aria-label="Copy Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                    onClick={() => dispatch(toggleSuccessModalOpen(url.slug))}
                  >
                    <CopyIcon />
                  </button>
                  <button
                    type="button"
                    aria-label="Edit Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                    onClick={() => {
                      setCurrSlug(url.slug);
                      dispatch({
                        type: SHOW_EDIT_URL_MODAL,
                        payload: true,
                      });
                    }}
                  >
                    <EditIcon />
                  </button>
                  <button
                    type="button"
                    aria-label="Delete Button"
                    className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </span>
            </li>
          ))}
        <span className="flex w-full h-11 justify-center items-center">
          <span className="flex justify-between items-center w-[268px] h-full bg-opacity-0">
            <span
              aria-hidden="true"
              className="cursor-pointer"
              onClick={() => setPageNum(1)}
            >
              <ArrowBackward />
            </span>
            <div
              aria-hidden="true"
              className="flex justify-center items-center w-11 h-11 rounded-full bg-opcacity-0 text-gdscGrey-700 text-base font-bold cursor-pointer hover:bg-opacity-full hover:bg-gdscGrey-300 transition-all duration-200 ease-out"
              onClick={() => pageNum - 1 > 0
                && pageNum - 1 <= maxNumPage
                && setPageNum(pageNum - 1)}
            >
              {pageNum - 1 > 0 && pageNum - 1 <= maxNumPage ? pageNum - 1 : ''}
            </div>
            <div
              aria-hidden="true"
              className="flex justify-center items-center w-11 h-11 rounded-full bg-gdscBlue-300 text-white text-base font-bold cursor-pointer "
            >
              {pageNum > 0 && pageNum <= maxNumPage ? pageNum : ''}
            </div>
            <div
              aria-hidden="true"
              className="flex justify-center items-center w-11 h-11 rounded-full bg-opacity-0 text-gdscGrey-700 text-base font-bold cursor-pointer hover:bg-opacity-full hover:bg-gdscGrey-300 transition-all duration-200 ease-out"
              onClick={() => pageNum + 1 > 0
                && pageNum + 1 <= maxNumPage
                && setPageNum(pageNum + 1)}
            >
              {pageNum + 1 > 0 && pageNum + 1 <= maxNumPage ? pageNum + 1 : ''}
            </div>
            <span
              aria-hidden="true"
              className="cursor-pointer"
              onClick={() => setPageNum(maxNumPage)}
            >
              <ArrowForward />
            </span>
          </span>
        </span>
      </ul>
    </div>
  );
}

MyUrl.propTypes = {
  slug: PropTypes.string,
};

MyUrl.defaultProps = {
  slug: null,
};
