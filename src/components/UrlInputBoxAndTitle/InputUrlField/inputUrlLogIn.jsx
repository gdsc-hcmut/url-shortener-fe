import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useStore, useSelector } from 'react-redux';
import * as yup from 'yup';

import { SHOW_GOOGLE_LOADING_ANIMATION, SHOW_URL_MODAL } from 'action-types';
import urlAction from 'actions/url';
import EditIcon from 'assets/icons/edit.svg';
import loadingIcon from 'assets/icons/loading.svg';
import { ReactComponent as ReactLogo } from 'assets/image/web.svg';

const schema = yup
  .object({
    longUrlDesktop: yup.string().url('Invalid Url!'),
    slugDesktop: yup.string().matches(/^[-a-zA-Z0-9]*$/i, 'Invalid Slug!'),
    longUrlMobile: yup.string().url('Invalid Url!'),
    slugMobile: yup.string().matches(/^[-a-zA-Z0-9]*$/i, 'Invalid Slug!'),
  })
  .required();

export default function InputUrlLogIn() {
  const [disable, setDisable] = useState('');
  const [disableMobile, setDisableMobile] = useState('');
  const [loading, setLoading] = useState(false);
  const [slugErr, setSlugErr] = useState(false);
  const { user } = useSelector((state) => state.auth);
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
    const { longUrlDesktop, slugDesktop } = data;
    if (longUrlDesktop) {
      dispatch({
        type: SHOW_GOOGLE_LOADING_ANIMATION,
        payload: true,
      });
      setLoading(true);
      await dispatch(
        urlAction.shortenUrlWithSlug(longUrlDesktop, slugDesktop, user),
      );
      const reduxState = store.getState();
      if (reduxState.urlWithSlug.slugTaken === true) {
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        setLoading(reduxState.urlWithSlug.loading);
        setSlugErr(true);
        setTimeout(() => setSlugErr(false), 3000);
      } else {
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        dispatch({
          type: SHOW_URL_MODAL,
          payload: true,
        });
        setLoading(reduxState.urlWithSlug.loading);
      }
    }
  };
  const handleClickMobile = async (data, e) => {
    e.preventDefault();
    const { longUrlMobile, slugMobile } = data;
    if (longUrlMobile) {
      dispatch({
        type: SHOW_GOOGLE_LOADING_ANIMATION,
        payload: true,
      });
      setLoading(true);
      await dispatch(
        urlAction.shortenUrlWithSlug(longUrlMobile, slugMobile, user),
      );
      const reduxState = store.getState();
      if (reduxState.urlWithSlug.slugTaken === true) {
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        setLoading(reduxState.urlWithSlug.loading);
        setSlugErr(true);
        setTimeout(() => setSlugErr(false), 3000);
      } else {
        dispatch({
          type: SHOW_GOOGLE_LOADING_ANIMATION,
          payload: false,
        });
        dispatch({
          type: SHOW_URL_MODAL,
          payload: true,
        });
        setLoading(reduxState.urlWithSlug.loading);
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
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 rounded-[8px]">
      <form
        className="relative hidden md:block bg-white md:w-[796px] md:h-[104px] rounded-[8px] border shadow-lg border-gdscGrey-200"
        onSubmit={handleSubmit(handleClickDesktop)}
      >
        <div className="w-[260px] h-12 absolute left-8 top-7 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Your URL</strong>
          </p>
          <div>
            <input
              {...register('longUrlDesktop')}
              onChange={(e) => setDisable(e.target.value)}
              className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
              placeholder="Input the URL you want to shorten"
            />
            <p className="text-gdscRed-300">
              {errors.longUrlDesktop && errors.longUrlDesktop.message}
            </p>
          </div>
        </div>
        <ReactLogo className="absolute top-[52px] left-[292px]" />
        <div className="w-px h-16 bg-gdscGrey-200 absolute left-[344px] top-5" />
        <div className="w-[172px] h-12 absolute left-[372px] top-7 flex-col space-y-2">
          <p className="text-base font-medium h-5">
            <strong>Slug</strong>
          </p>
          <div>
            <input
              {...register('slugDesktop')}
              className="text-base font-normal text-gdscGrey-700 h-5 w-[16.25rem] border-b-1 outline-none "
              placeholder="Input your custom slug"
            />
            {errors.slugDesktop && (
              <p className="text-gdscRed-300">{errors.slugDesktop.message}</p>
            )}
            {slugErr && (
              <p className="text-gdscRed-300">Slug already exists!</p>
            )}
          </div>
        </div>
        <img
          className="w-6 h-6 absolute top-12 left-[562px]"
          src={EditIcon}
          alt="Edit icon"
        />
        <div>
          {!loading ? (
            <button
              type="submit"
              className={`absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[64px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 ${
                !disable && 'cursor-not-allowed'
              }`}
            >
              Shorten
            </button>
          ) : (
            <button
              type="button"
              className="absolute inset-y-5 right-5 hidden text-base text-white md:block w-[152px] h-[64px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300"
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
      </form>
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[70px] flex items-center pl-5 space-x-5 rounded-md border shadow-lg border-gdscGrey-200">
        <ReactLogo />
        <input
          {...register('longUrlMobile')}
          onChange={(e) => setDisableMobile(e.target.value)}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[30px]"
          placeholder="Input the URL you want to shorten"
        />
      </div>
      {errors.longUrlMobile && (
        <p className="text-gdscRed-300 md:hidden">
          {errors.longUrlMobile.message}
        </p>
      )}
      <div className="relative md:hidden bg-white rounded-[8px] mr-5 h-[70px] flex items-center pl-5 space-x-5 rounded-md border shadow-lg border-gdscGrey-200">
        <img className="w-6 h-6" src={EditIcon} alt="Edit icon" />
        <input
          {...register('slugMobile')}
          className="text-base font-normal text-gdscGrey-700 h-5 w-full bg-white outline-none pr-[30px]"
          placeholder="Input your custom slug"
        />
      </div>
      {errors.slugMobile && (
        <p className="text-gdscRed-300 md:hidden">
          {errors.slugMobile.message}
        </p>
      )}
      {slugErr && (
        <p className="text-gdscRed-300 md:hidden">Slug already exists!</p>
      )}
      {!loading ? (
        <button
          type="button"
          className={`text-base text-white md:hidden w-[152px] h-[60px] bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover ${
            !disableMobile && 'cursor-not-allowed'
          }`}
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
