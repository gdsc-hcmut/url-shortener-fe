import { CircularProgress } from '@mui/material';
import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  SHOW_COPY_SUCCESS_MODAL,
  SHOW_DELETE_URL_MODAL,
  SHOW_EDIT_URL_MODAL,
} from 'action-types';
import {
  toggleSuccessModalOpen,
  toggleSuccessModalClose,
} from 'actions/notification';
import { ReactComponent as CopyIcon } from 'assets/icons/copy_icon.svg';
import { ReactComponent as DeleteIcon } from 'assets/icons/delete_icon.svg';
import { ReactComponent as EditIcon } from 'assets/icons/edit_icon.svg';
import DeleteModal from 'components/DeleteModal';
import EditSlugModal from 'components/EditSludModal';
import ModalSucess from 'components/ModalSuccess';
import { PLATFORMS } from 'constant/common';
import UrlAPI from 'services/url.service';

import Chart from './Chart';
import CreatedOn from './general/CreatedOn';
import ExpireTime from './general/ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';
import QR from './QR';
import SocialMedia from './SocialMedia';

export default function Detail({ id }) {
  const dispatch = useDispatch();
  const [urlDetail, setUrlDetail] = useState({});
  const [isDeleted, setIsDeleted] = useState(false);
  const { DeleteUrlModal, CopySuccessModal, EditUrlModal } = useSelector(
    (state) => state.showModal,
  );

  useEffect(() => {
    setIsDeleted(false);
    const getUrlDetail = async () => {
      const { data } = await UrlAPI.getUrlById(id);
      setUrlDetail(data);
    };
    getUrlDetail().catch(() => {
      setIsDeleted(true);
    });
  }, [id, EditUrlModal, DeleteUrlModal]);

  useEffect(() => {
    if (CopySuccessModal) {
      setTimeout(() => {
        dispatch(toggleSuccessModalClose());
      }, 3000);
    }
  }, [CopySuccessModal]);

  if (isDeleted) {
    return (
      <div className="font-normal 3xl:w-[1032px] md:w-[504px] w-full sm:w-[376px] text-[32px] mb-4 ">
        This url doesn&apos;t exist
      </div>
    );
  }
  if (_.isEmpty(urlDetail)) {
    return (
      <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:p-0 py-5 pr-5 relative">
        <div className="w-full flex justify-center items-center">
          <CircularProgress color="inherit" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-opacity-0 max-w-full h-full overflow-scroll md:no-scrollbar md:p-0 py-5 pr-5 relative">
      <div className="modal absolute z-50">
        <EditSlugModal
          slug={urlDetail.slug}
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
          id={id}
          text="The shortened link and all relevant data will be removed."
          onClose={() => dispatch({
            type: SHOW_DELETE_URL_MODAL,
            payload: false,
          })}
          show={DeleteUrlModal}
        />
      </div>
      <h1 className="font-normal 3xl:w-[1032px] md:w-[504px] w-full sm:w-[376px] text-[32px] mb-4 ">
        {urlDetail.longUrl}
      </h1>
      <div className="mb-[60px] flex">
        <h1 className="inline font-normal w-[216px] h-8 leading-8 text-xl mr-8 overflow-x-auto">
          {urlDetail.slug}
        </h1>
        <div className="flex space-x-2">
          <button
            type="button"
            aria-label="Copy Button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
            onClick={() => dispatch(toggleSuccessModalOpen(urlDetail.slug))}
          >
            <CopyIcon />
          </button>
          <button
            type="button"
            aria-label="Edit Button"
            className="w-8 h-8 bg-[#1967D2] bg-opacity-10 active:bg-opacity-20 flex justify-center items-center rounded"
            onClick={() => {
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
            onClick={() => dispatch({
              type: SHOW_DELETE_URL_MODAL,
              payload: true,
            })}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="inline-flex flex-wrap gap-6 mb-6 ">
          <ExpireTime expireTime={urlDetail.expireTime} id={id} />
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
        <div className="flex flex-col 3xl:flex-row border-x-lime-400:flex-row mb-6 3xl:mb-0">
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
              Zalo: urlDetail.totalClicks.filter(
                (click) => click.origin === 'Zalo',
              ).length,
              Others: urlDetail.totalClicks.filter(
                (click) => !PLATFORMS.includes(click.origin),
              ).length,
            }}
          />
          <QR shortenedUrl={urlDetail.longUrl} slug={urlDetail.slug} />
        </div>
        <Chart data={urlDetail.totalClicks} />
      </div>
    </div>
  );
}

Detail.propTypes = {
  id: PropTypes.string,
};

Detail.defaultProps = {
  id: null,
};
