import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
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
import Snackbar from 'components/Snackbar';
import fakeGetUrlsList from 'services/getUrlsList';

import Chart from './Chart';
import CreatedOn from './general/CreatedOn';
import ExpireTime from './general/ExpireTime';
import TodayClick from './general/TodayClick';
import TotalClick from './general/TotalClick';
import QR from './QR';
import SocialMedia from './SocialMedia';

export default function Detail({ slug }) {
  const urlDetail = _.find(fakeGetUrlsList, { slug: `/${slug}` });
  const dispatch = useDispatch();

  const { showSnackbar } = useSelector((state) => state.notification);
  const { DeleteUrlModal, CopySuccessModal, EditUrlModal } = useSelector(
    (state) => state.showModal,
  );

  useEffect(() => {
    if (CopySuccessModal) {
      setTimeout(() => {
        dispatch(toggleSuccessModalClose());
      }, 3000);
    }
  }, [CopySuccessModal]);

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
          <ExpireTime expireTime={urlDetail.expireTime.toString()} />
          <CreatedOn createOn={urlDetail.createOn.toString()} />
          <TodayClick todayClick={_.last(urlDetail.click)} />
          <TotalClick
            totalClick={Object.values(urlDetail.total).reduce(
              (sum, el) => sum + el,
            )}
          />
        </div>
        <div className="flex flex-col 3xl:flex-row border-x-lime-400:flex-row mb-6 3xl:mb-0">
          <SocialMedia data={urlDetail.total} />
          <QR />
        </div>
        <Chart data={urlDetail.click} />
      </div>
    </div>
  );
}

Detail.propTypes = {
  slug: PropTypes.string,
};

Detail.defaultProps = {
  slug: null,
};
