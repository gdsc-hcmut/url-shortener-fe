import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import DeleteModal from 'components/DeleteModal';
import EditSlugModal from 'components/EditSludModal';
import ModalSucess from 'components/ModalSuccess';
import { PLATFORMS } from 'constant/common';
import domains from 'constant/domain';

import Chart from './Chart';
import CreatedOn from './CreatedOn';
// import ExpireTime from './ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';
import LongUrlModal from './LongUrlModal';
import QR from './QR';
import SocialMedia from './SocialMedia';

export default function DetailV2({ id, fetchDataUrl }) {
  const [isDeleted, setIsDeleted] = useState(false);
  const [urlDetail, setUrlDetail] = useState({});
  const [shortUrl, setShortUrl] = useState('');

  const [isShowLongUrl, setIsShowLongUrl] = useState(false);
  const [isShowCopyModal, setIsShowCopyModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);

  useEffect(() => {
    setIsDeleted(false);
    const getUrlDetail = async () => {
      const { data } = await fetchDataUrl(id);
      const { organization } = data;
      setUrlDetail(data);
      if (organization === 'None') {
        setShortUrl(data.shortUrl);
      } else {
        const domainKey = Object.keys(domains).filter(
          (key) => key === organization,
        );
        const urlDomain = domains[domainKey[0]].domain;
        setShortUrl(`${urlDomain}/${data.slug}`);
      }
    };
    getUrlDetail().catch(() => {
      setIsDeleted(false);
    });
  }, [id, isShowEditModal, isShowCopyModal]);

  useEffect(() => {
    if (isShowCopyModal) {
      setTimeout(() => {
        setIsShowCopyModal(false);
      }, 3000);
    }
  }, [isShowCopyModal]);

  if (_.isEmpty(urlDetail)) {
    return (
      <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:p-0 py-5 pr-5 relative">
        <div className="w-full flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      </div>
    );
  }

  if (isDeleted) {
    return (
      <div className="font-normal 3xl:w-[1032px] md:w-[504px] w-full sm:w-[376px] text-[32px] mb-4 ">
        Url not found.
      </div>
    );
  }

  return (
    <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:p-0 py-5 pr-5 relative">
      <div className="modal absolute z-50">
        <LongUrlModal
          text={urlDetail.longUrl}
          onClose={() => setIsShowLongUrl(false)}
          show={isShowLongUrl}
        />
        <EditSlugModal
          slug={urlDetail.slug}
          onClose={() => setIsShowEditModal(false)}
          show={isShowEditModal}
        />
        <ModalSucess
          text="Link copied to clipboard."
          onClose={() => setIsShowCopyModal(false)}
          show={isShowCopyModal}
        />
        <DeleteModal
          id={id}
          text="The shortened link and all relevant data will be removed."
          onClose={() => isShowDeleteModal(false)}
          show={isShowDeleteModal}
        />
      </div>
      <div className="flex">
        <h1
          aria-hidden
          className="font-normal w-fit h-9 leading-9 text-[32px] mb-4 break-words cursor-pointer overflow-y-hidden "
          onClick={() => {
            navigator.clipboard.writeText(shortUrl);
            setIsShowCopyModal(true);
          }}
        >
          <p>
            <span className="hidden sm:inline">{shortUrl}</span>
            <span className="inline sm:hidden">{urlDetail.slug}</span>
          </p>
        </h1>
        <div className="ml-2 flex space-x-2">
          <button
            type="button"
            aria-label="Copy Button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
            onClick={() => {
              navigator.clipboard.writeText(shortUrl);
              setIsShowCopyModal(true);
            }}
          >
            <CopyIcon />
          </button>
          <button
            type="button"
            aria-label="Edit Button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
            onClick={() => setIsShowEditModal(true)}
          >
            <EditIcon />
          </button>
          <button
            type="button"
            aria-label="Delete Button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
            onClick={() => setIsShowDeleteModal(true)}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="mb-[60px] flex font-normal ">
        <div
          aria-hidden
          id="longUrl"
          className="inline font-normal w-full md:w-[504px] lg:w-[640px] leading-8  truncate cursor-pointer text-gdscGrey-700 hover:text-black transition-all duration-300"
          onClick={() => setIsShowLongUrl(true)}
        >
          {urlDetail.longUrl}
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="inline-flex flex-wrap gap-6 mb-6 md:gap-4 md:mb-4 3xl:gap-6 3xl:mb-6 ">
          {/* <ExpireTime expireTime={urlDetail.expireTime} id={id} /> */}
          <CreatedOn createOn={urlDetail.createdAt} />
          <CreatedOn createOn={urlDetail.createdAt} />
          <TodayClick
            todayClick={
              urlDetail.totalClicks.filter((click) => {
                const today = new Date();
                const dateClicked = new Date(click.dateClicked);
                return (
                  today.getDate() === dateClicked.getDate()
                  && today.getMonth() === dateClicked.getMonth()
                  && today.getFullYear() === dateClicked.getFullYear()
                );
              }).length
            }
          />
          <TotalClick totalClick={urlDetail.totalClicks.length} />
        </div>
        <div className="flex flex-col lg:flex-row border-x-lime-400:flex-row mb-6 lg:mb-0">
          <SocialMedia
            data={{
              Facebook: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Facebook',
              ).length,
              Messenger: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Messenger',
              ).length,
              Instagram: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Instagram',
              ).length,
              Twitter: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Twitter',
              ).length,
              Linkedin: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Linkedin',
              ).length,
              Youtube: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Youtube',
              ).length,
              Others: urlDetail.totalClicks.filter(
                (click) => !PLATFORMS.includes(click.origin),
              ).length,
            }}
          />
          <QR shortenedUrl={urlDetail.shortUrl} slug={urlDetail.slug} />
        </div>
        <Chart data={urlDetail.totalClicks} />
      </div>
    </div>
  );
}

DetailV2.propTypes = {
  id: PropTypes.string,
  fetchDataUrl: PropTypes.func.isRequired,
};

DetailV2.defaultProps = {
  id: null,
};
