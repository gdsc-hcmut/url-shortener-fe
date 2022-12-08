import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as yup from 'yup';

import { SHOW_GOOGLE_LOADING_ANIMATION, SHOW_URL_MODAL } from 'action-types';
import urlAction from 'actions/url';
import loadingIcon from 'assets/icons/loading.svg';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

const schema = yup
  .object({
    longUrlDesktop: yup.string().url('Invalid Url!'),
    longUrlMobile: yup.string().url('Invalid Url!'),
  })
  .required();

export default function InputUrlField() {
  const [disable, setDisable] = useState('');
  const [disableMobile, setDisableMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const { error: urlError } = useSelector((state) => state.url);

  const dispatch = useDispatch();
  const store = useStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    clearErrors,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const handleClickDesktop = async (data, e) => {
    e.preventDefault();
    const { longUrlDesktop } = data;
    if (longUrlDesktop) {
      dispatch({
        type: SHOW_GOOGLE_LOADING_ANIMATION,
        payload: true,
      });
      setLoading(true);
      try {
        await dispatch(urlAction.shortenUrl(longUrlDesktop));
        const reduxState = store.getState();
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        dispatch({
          type: SHOW_URL_MODAL,
          payload: true,
        });
        setLoading(reduxState.url.loading);
      } catch (err) {
        const reduxState = store.getState();
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        setLoading(reduxState.url.loading);
      }
    }
  };
  const handleClickMobile = async (data, e) => {
    e.preventDefault();
    const { longUrlMobile } = data;
    if (longUrlMobile) {
      dispatch({
        type: SHOW_GOOGLE_LOADING_ANIMATION,
        payload: true,
      });
      setLoading(true);
      try {
        await dispatch(urlAction.shortenUrl(longUrlMobile));
        const reduxState = store.getState();
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        dispatch({
          type: SHOW_URL_MODAL,
          payload: true,
        });
        setLoading(reduxState.url.loading);
      } catch (err) {
        const reduxState = store.getState();
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        setLoading(reduxState.url.loading);
      }
    }
  };
  useEffect(() => {
    reset();
  }, []);
  if (errors.longUrlDesktop && errors.longUrlDesktop.message) {
    setTimeout(() => clearErrors('longUrlDesktop'), 3000);
  }
  if (errors.longUrlMobile && errors.longUrlMobile.message) {
    setTimeout(() => clearErrors('longUrlMobile'), 3000);
  }
  return (
    <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 rounded-[8px]">
      <form
        className="relative hidden md:block bg-white md:w-[740px] md:h-[100px] rounded-[8px] border shadow-lg border-gdscGrey-200"
        onSubmit={handleSubmit(handleClickDesktop)}
      >
        <div className="w-[260px] h-12 absolute left-8 top-6 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <div>
            <input
              {...register('longUrlDesktop')}
              onChange={(e) => setDisable(e.target.value)}
              className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none"
              placeholder="Input the URL you want to shorten"
            />
            {urlError && (
              <p className="text-gdscRed-300">
                {urlError.message}
              </p>
            )}
          </div>
        </div>
        <ReactLogo className="absolute top-12 left-[292px]" />
        {!loading ? (
          <button
            type="submit"
            className={`absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 ${
              !disable && 'cursor-not-allowed'
            } `}
          >
            Shorten
          </button>
        ) : (
          <button
            type="button"
            className="absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300"
            disabled
          >
            <img
              src={loadingIcon}
              className="inline mr-3 w-6 h-6 animate-spin"
              alt="Loading indicator"
            />
          </button>
        )}
      </form>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[72px] flex items-center pl-6 space-x-5 border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          {...register('longUrlMobile')}
          onChange={(e) => setDisableMobile(e.target.value)}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[32px]"
          placeholder="Input the URL you want to shorten"
        />
      </div>
      {errors.longUrlMobile && (
        <p className="text-gdscRed-300 md:hidden">
          {errors.longUrlMobile.message}
        </p>
      )}
      {urlError && (
        <p className="text-gdscRed-300 md:hidden">
          {urlError.message}
        </p>
      )}
      {!loading ? (
        <button
          type="button"
          className={`text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover transition-all duration-300 ease-out ${
            !disableMobile && 'cursor-not-allowed'
          } `}
          onClick={handleSubmit(handleClickMobile)}
        >
          Shorten
        </button>
      ) : (
        <button
          type="button"
          className="text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover"
          disabled
        >
          <img
            src={loadingIcon}
            className="inline mr-3 w-6 h-6 animate-spin"
            alt="Loading indicator"
          />
        </button>
      )}
    </div>
  );
}
