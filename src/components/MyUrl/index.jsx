import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  SHOW_COPY_SUCCESS_MODAL,
  SHOW_DELETE_URL_MODAL,
  SHOW_EDIT_URL_MODAL,
  UPDATE_URL_LISTS,
} from 'action-types';
import {
  toggleSuccessModalOpen,
  toggleSuccessModalClose,
} from 'actions/notification';
import { ReactComponent as ArrowDown } from 'assets/icons/arrow_down.svg';
import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import DeleteModal from 'components/DeleteModal';
import EditSlugModal from 'components/EditSludModal';
import ModalSucess from 'components/ModalSuccess';
import Snackbar from 'components/Snackbar';
import UrlAPI from 'services/url.service';

export default function MyUrl({ id }) {
  const SORT_OPTION = ['Oldest', 'Latest', 'Least Clicked', 'Most Clicked'];

  const [option, setOption] = useState(SORT_OPTION[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [searchList, setSearchList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currSlug, setCurrSlug] = useState('');
  const [currId, setCurrId] = useState('');
  const [stopSending, setStopSending] = useState(false);
  const dispatch = useDispatch();
  const { DeleteUrlModal, CopySuccessModal, EditUrlModal } = useSelector(
    (state) => state.showModal,
  );
  const { showSnackbar } = useSelector((state) => state.notification);
  const { urlList } = useSelector((state) => state.url);
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (!stopSending && scrollHeight - scrollTop - clientHeight < 1) {
      setPage(page + 1);
    }
  };

  const orderUrlList = (list) => {
    switch (option) {
      case SORT_OPTION[0]:
        return _.orderBy(list, ['updatedAt'], ['asc']);
      case SORT_OPTION[1]:
        return _.orderBy(list, ['updatedAt'], ['desc']);
      case SORT_OPTION[2]:
        return _.orderBy(list, ['totalClicks'], ['asc']);
      case SORT_OPTION[3]:
        return _.orderBy(list, ['totalClicks'], ['desc']);
      default:
        break;
    }
    return urlList;
  };

  useEffect(() => {
    const getUrlList = async () => {
      setLoading(true);
      const { data: newUrlLists } = await UrlAPI.getUrlList(page);
      if (newUrlLists.length > 0) {
        const orderedUrlLists = orderUrlList(
          _.uniqBy([...urlList, ...newUrlLists], 'id'),
        );
        dispatch({
          type: UPDATE_URL_LISTS,
          payload: orderedUrlLists,
        });
      } else {
        setStopSending(true);
      }
      setLoading(false);
    };
    const mobileScrollDiv = document.querySelector('#MyUrlPage');
    getUrlList().catch(() => setLoading(false));
    mobileScrollDiv.addEventListener('scroll', handleScroll, {
      passive: true,
    });
    return () => mobileScrollDiv.removeEventListener('scroll', handleScroll);
  }, [page]);

  useEffect(() => {
    const searchUrl = async () => {
      setLoading(true);
      const { data: newUrlLists } = await UrlAPI.searchUrl(search);
      setSearchList(newUrlLists);
      setLoading(false);
    };
    if (search) {
      searchUrl();
    }
  }, [search]);

  useEffect(() => {
    dispatch({
      type: UPDATE_URL_LISTS,
      payload: orderUrlList(urlList),
    });
  }, [option]);

  useEffect(() => {
    if (CopySuccessModal) {
      setTimeout(() => {
        dispatch(toggleSuccessModalClose());
      }, 3000);
    }
  }, [CopySuccessModal]);

  useEffect(() => {
    const closeSelect = () => setIsOpen(false);
    setTimeout(() => {
      if (isOpen) {
        window.addEventListener('click', closeSelect);
      }
    }, 0);
    return () => window.removeEventListener('click', closeSelect);
  }, [isOpen]);

  return (
    <div className="bg-opacity-0 flex flex-col xl:w-[296px] 3xl:w-[392px] h-full w-full xl:p-0 py-5 pr-5 md:pr-[60px] xl:pr-0 md:overflow-y-scroll no-scrollbar">
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
        <DeleteModal
          id={currId}
          text="The shortened link and all relevant data will be removed."
          onClose={() => dispatch({
            type: SHOW_DELETE_URL_MODAL,
            payload: false,
          })}
          show={DeleteUrlModal}
        />
      </div>
      <div className="absolute bottom-4 right-4">
        {showSnackbar && <Snackbar />}
      </div>
      <h1 className="font-normal text-[32px] leading-10">My URLs</h1>

      <button
        type="button"
        className="z-10 w-40 xl:w-32 3xl:w-40 h-11 text-base text-gdscGrey-700 px-5 outline-none bg-white my-3 mx-0 self-end text-left cursor-pointer focus:outline-none rounded block xl:absolute xl:mt-1 xl:mr-4"
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
          className={`relative top-2 right-5 space-y-2 w-40 h-[116px] bg-white rounded font-light shadow-xl text-base px-5 py-3 ${
            isOpen ? '' : 'hidden'
          }`}
        >
          {SORT_OPTION.filter((el) => el !== option).map((el) => (
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
        className="w-full h-14 bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 font-light xl:w-[284px] 3xl:w-[376px] relative"
        placeholder="Search your URL ..."
        value={search}
        onChange={handleSearch}
      />
      <ul
        className="xl:overflow-y-scroll mt-10 space-y-5 relative h-full "
        onScroll={handleScroll}
      >
        {(search ? searchList : urlList).map((url) => (
          <li
            key={url.slug}
            className={`w-full h-[100px] flex flex-col space-y-2 justify-center rounded font-normal xl:w-[284px] 3xl:w-[376px] ${
              url.id === id
                ? 'bg-[#F1F6FE] border-2 border-gdscBlue-300 p-[18px]'
                : 'bg-white px-5'
            } `}
          >
            <Link
              to={`/urls/${url.id}`}
              className="text-xl h-6 font-medium w-64 overflow-x-hidden truncate "
            >
              <span>{url.longUrl}</span>
            </Link>
            <span className="flex justify-between">
              <span className="text-base text-gdscGrey-700 w-32 truncate  ">
                {url.slug}
              </span>
              <div className="flex space-x-2 xl:hidden">
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
                  onClick={() => {
                    setCurrId(url.id);
                    dispatch({
                      type: SHOW_DELETE_URL_MODAL,
                      payload: true,
                    });
                  }}
                >
                  <DeleteIcon />
                </button>
              </div>
            </span>
          </li>
        ))}
        {loading ? (
          <div className="text-center">
            <CircularProgress color="inherit" />
          </div>
        ) : (
          ''
        )}
      </ul>
    </div>
  );
}

MyUrl.propTypes = {
  id: PropTypes.string,
};

MyUrl.defaultProps = {
  id: '',
};
