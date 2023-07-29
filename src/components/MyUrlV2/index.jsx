import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowDownIcon from 'assets/icons/arrow_down.svg';
import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import DeleteModal from 'components/DeleteModal';
import EditSlugModal from 'components/EditSludModal';
import ListBox from 'components/ListBox';
import ModalSucess from 'components/ModalSuccess';
import domains from 'constant/domain';
import {
  LATEST, OLDEST, LEAST_CLICKED, MOST_CLICKED,
} from 'constant/options';

const options = [LATEST, OLDEST, LEAST_CLICKED, MOST_CLICKED];
const { REACT_APP_SHORTEN_BASE_URL } = process.env;

export default function MyUrlV2({
  pageName, fetchUrlList, searchUrl, id,
}) {
  const [search, setSearch] = useState('');
  const [searchList, setSearchList] = useState([]);
  const [option, setOption] = useState(LATEST);
  const [currSlug, setCurrSlug] = useState('');
  const [stopSending, setStopSending] = useState(false);
  const [page, setPage] = useState(1);
  const [currId, setCurrId] = useState('');
  const [urlList, setUrlList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let urlDomain;

  const [isShowCopyModal, setIsShowCopyModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowOption, setIsShowOption] = useState(false);

  const getUrlList = async () => {
    await fetchUrlList(page, option)
      .then((response) => {
        const { data: newUrlLists } = response;
        if (newUrlLists.length > 0) {
          const combinedList = _.uniqBy([...urlList, ...newUrlLists], 'id');
          setUrlList(combinedList);
        } else {
          setStopSending(true);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
    if (!stopSending && scrollHeight - scrollTop - clientHeight < 3) {
      setPage(page + 1);
    }
  };

  useEffect(async () => {
    if (search) {
      setLoading(true);
      const { data: newUrlLists } = await searchUrl(search);
      setSearchList(newUrlLists);
      setLoading(false);
    }
  }, [search]);

  useEffect(async () => {
    setLoading(true);
    setStopSending(false);
    await getUrlList();
    setPage(1);
    setLoading(false);
  }, [option]);

  useEffect(async () => {
    const mobileScrollDiv = document.querySelector('#MyUrlPage');
    await getUrlList();
    if (mobileScrollDiv.getAttribute('scroll') !== true) {
      mobileScrollDiv.addEventListener('scroll', handleScroll, {
        passive: true,
      });
    }
    return () => mobileScrollDiv.removeEventListener('scroll', handleScroll);
  }, [page]);

  useEffect(() => {
    if (isShowCopyModal) {
      setTimeout(() => {
        setIsShowCopyModal(false);
      }, 3000);
    }
  }, [isShowCopyModal]);

  return (
    <div
      id="MyUrlPage"
      className="bg-opacity-0 flex flex-col xl:w-[296px] 3xl:w-[392px] h-full w-full pr-5 md:pr-[60px] xl:pr-0  pt-5 md:pt-0 overflow-y-scroll no-scrollbar-desktop"
    >
      <div className="modal absolute z-50">
        <ModalSucess
          text="Link copied to clipboard."
          onClose={() => setIsShowCopyModal(false)}
          show={isShowCopyModal}
        />
        <EditSlugModal
          slug={currSlug}
          onClose={() => setIsShowEditModal(false)}
          show={isShowEditModal}
        />
        <DeleteModal
          id={currId}
          text="The shortened link and all relevant data will be removed."
          onClose={() => setIsShowDeleteModal(false)}
          show={isShowDeleteModal}
        />
      </div>
      <h1 className="font-normal text-[32px] leading-10">{pageName}</h1>
      <button
        type="button"
        className="z-10 w-40 xl:w-32 3xl:w-40 h-11 relative flex flex-row items-center justify-between px-[20px] text-base text-gdscGrey-700 outline-none bg-white my-3 mx-0 self-end text-left cursor-pointer focus:outline-none rounded xl:absolute xl:mt-1 xl:mr-4 xl:h-11"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onClick={() => setIsShowOption(!isShowOption)}
      >
        <span className="truncate">{option}</span>
        <img
          src={ArrowDownIcon}
          className="w-[12px] h-[8px]"
          alt="arrow down icon"
        />
        <ListBox
          options={options}
          selectedOption={option}
          onClick={setOption}
          isOpen={isShowOption}
          setIsOpen={setIsShowOption}
        />
      </button>
      <input
        className="w-full min-h-[56px] bg-white border-[1px] border-gdscGrey-300 focus:border-gdscBlue-300 px-5 outline-none rounded text-base mt-5 mb-10 font-light xl:w-[284px] 3xl:w-[376px] relative"
        placeholder="Search your URL ..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <ul
        className="xl:overflow-y-scroll space-y-5 relative h-full"
        onScroll={handleScroll}
      >
        {(search ? searchList : urlList).map((url) => (
          <li
            aria-hidden
            key={url.slug}
            className={`w-full h-[100px] flex flex-col space-y-2 justify-center rounded font-normal xl:w-[284px] 3xl:w-[376px] cursor-pointer ${
              url.id === id
                ? 'bg-[#F1F6FE] border-2 border-gdscBlue-300 p-[18px]'
                : 'bg-white px-5'
            } `}
            onClick={() => {
              navigate(`/urls-v2/${url.slug}`, { state: { id: url.id } });
            }}
          >
            <div className="text-xl font-medium w-54 sm:w-64 overflow-x-hidden truncate ">
              <span>{url.longUrl}</span>
            </div>
            <span className="flex justify-between">
              <span className="text-base text-gdscGrey-700 w-32 truncate  ">
                {url.slug}
              </span>
              <div className="flex space-x-2 xl:hidden">
                <button
                  type="button"
                  aria-label="Copy Button"
                  className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!url.organization || url.organization === 'None') {
                      urlDomain = REACT_APP_SHORTEN_BASE_URL;
                    } else {
                      const domainKey = Object.keys(domains).filter(
                        (key) => key === url.organization,
                      );
                      urlDomain = domains[domainKey[0]].domain;
                    }
                    navigator.clipboard.writeText(`${urlDomain}/${url.slug}`);
                    setIsShowCopyModal(true);
                  }}
                >
                  <CopyIcon />
                </button>
                <button
                  type="button"
                  aria-label="Edit Button"
                  className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrSlug(url.slug);
                    setIsShowEditModal(true);
                  }}
                >
                  <EditIcon />
                </button>
                <button
                  type="button"
                  aria-label="Delete Button"
                  className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrId(url.id);
                    setIsShowDeleteModal(true);
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

MyUrlV2.propTypes = {
  pageName: PropTypes.string,
  //   userId: PropTypes.string.isRequired,
  fetchUrlList: PropTypes.func.isRequired,
  searchUrl: PropTypes.func.isRequired,
  id: PropTypes.string,
};

MyUrlV2.defaultProps = {
  pageName: 'My Urls',
  id: '',
};
