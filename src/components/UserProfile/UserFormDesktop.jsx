import { yupResolver } from '@hookform/resolvers/yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, useStore } from 'react-redux';
import * as yup from 'yup';

import { UPLOAD_IMG } from 'action-types';
import { editProfile } from 'actions/user';
import EditIcon from 'assets/icons/edit.svg';
import storage from 'config/firebase-storage';
import domains from 'constant/domain';
import { AVATAR_INFO } from 'constant/notification';

const schema = yup
  .object({
    name: yup.string(),
  })
  .required();

export default function UserFormDesktop() {
  const dispatch = useDispatch();
  const store = useStore();
  const { user } = useSelector((state) => state.auth);
  const { uploadAva } = useSelector((state) => state.user);
  const [field, setField] = useState({
    name: false,
    email: false,
    dob: false,
    notification: false,
  });
  const [emailError, setEmailError] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [newEmail, setNewEmail] = useState(localStorage.getItem('userEmail'));
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(localStorage.getItem('userBirthday')),
  );
  const handleEmail = (e) => setNewEmail(e.target.value);
  const { email } = user;
  const {
    register, handleSubmit, getValues, setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const editUserProfile = async (data, e) => {
    e.preventDefault();
    const { name } = data;
    await dispatch(editProfile(name, newEmail, email, dateOfBirth, uploadAva));
    const reduxState = store.getState();
    if (reduxState.auth.error.email === 'Email taken') {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 2000);
    } else {
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', newEmail);
      localStorage.setItem('userBirthday', dateOfBirth);
      localStorage.setItem('avatar', uploadAva);
    }
  };
  useEffect(() => {
    setValue('name', localStorage.getItem('userName'));
    dispatch({
      type: UPLOAD_IMG,
      payload: '',
    });
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file.size >= 1024 * 1024) {
      alert('Image size must be less than 1MB');
    } else if (file) {
      const storageRef = ref(
        storage,
        `${user.email}/profilePicture/${file.name}`,
      );
      uploadBytes(storageRef, file).then(() => {
        getDownloadURL(storageRef).then((url) => {
          dispatch({
            type: UPLOAD_IMG,
            payload: url,
          });
          setField({ ...field, avatar: true, notification: true });
        });
      });
    }
  };
  return (
    <div
      aria-hidden
      className="hidden md:block ml-[60px] mr-[60px] mt-10"
      onClick={() => {
        setField({
          ...field,
          name: false,
          email: false,
          dob: false,
        });
      }}
    >
      <h1 className="text-[32px] font-medium">My Profile</h1>
      <p className="mt-2 text-gdscGrey-700">
        To edit any info, click on the “Edit” icon next to each field.
      </p>
      <div
        aria-hidden
        className="mt-[88px] w-full bg-white rounded-[8px] px-8 pt-10"
        onClick={() => {
          setField({ ...field, name: false });
        }}
      >
        <form
          className="mt-[40px] flex flex-col"
          onSubmit={handleSubmit(editUserProfile)}
        >
          <div className="flex">
            <img
              src={
                uploadAva
                || user.avatar
                || 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
              }
              className="md:w-[100px] md:h-[100px] lg:w-[152px] lg:h-[152px] rounded border border-gdscGrey-200"
              alt="user avatar"
            />
            <div className="ml-8 h-full flex flex-col">
              <label
                htmlFor="image_uploads_desktop"
                className="w-40 h-[52px] mb-7 bg-gdscBlue-200 bg-opacity-20
                hover:bg-opacity-40 transition-all duration-300 ease-out text-gdscBlue-300 rounded cursor-pointer flex justify-center items-center"
              >
                Upload
                <input
                  type="file"
                  id="image_uploads_desktop"
                  className="opacity-0 absolute -z-10"
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={handleImageUpload}
                />
              </label>
              {!field.avatar && <p className="text-xs">{AVATAR_INFO}</p>}
              {field.notification && field.avatar && (
                <p className="text-gdscBlue-300 text-sm">
                  Your image has been uploaded. Click Save to submit your
                  changes
                </p>
              )}
            </div>
          </div>
          <div className="flex md:flex-col input-field-col:flex-row flex-wrap input-field-col:space-x-7 mt-[52px]">
            <div className="flex flex-col">
              <p>Name</p>
              {field.name ? (
                <div>
                  <input
                    className="mt-4 w-[320px] lg:w-[460px] h-[60px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="text"
                    {...register('name')}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {getValues('name')
                    ? getValues('name')
                    : localStorage.getItem('userName')}
                  <button
                    type="button"
                    className="absolute right-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setField({
                        ...field,
                        name: true,
                        notification: true,
                      });
                    }}
                  >
                    <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="md:mt-6 input-field-col:mt-0">Email address</p>
              {field.email ? (
                <div className="flex">
                  <input
                    className="mt-4 w-[320px] lg:w-[460px] h-[60px] bg-white border
                            border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="email"
                    value={newEmail}
                    placeholder={newEmail}
                    onChange={handleEmail}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {newEmail}
                  <button
                    type="button"
                    className="hidden absolute right-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setField({
                        ...field,
                        email: true,
                        notification: true,
                      });
                    }}
                  >
                    <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
                  </button>
                </div>
              )}
              {emailError && (
                <p className="text-gdscRed-300">Email has been taken</p>
              )}
            </div>
          </div>
          <div className="flex md:flex-col input-field-col:flex-row flex-wrap input-field-col:space-x-7 mt-6">
            <div className="flex flex-col">
              <p>Birthday</p>
              {field.dob ? (
                <div
                  aria-hidden
                  className="mt-4 h-[60px] w-[460px] px-5 pt-4 bg-white border
                border-1 border-gdscBlue-300 outline-none rounded"
                  onClick={(e) => e.stopPropagation()}
                >
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <MobileDatePicker
                      value={dateOfBirth}
                      allowSameDateSelection
                      onClick={(e) => e.stopPropagation()}
                      onChange={(newTime) => {
                        setDateOfBirth(newTime);
                      }}
                      onAccept={() => setDatePicker(false)}
                      open={datePicker}
                      minDate={new Date('1900-01-01T00:00')}
                      inputFormat="yyyy/MM/dd"
                      mask="___/__/__ __:__ _M"
                      renderInput={(params) => (
                        <TextField
                          id="standard-basic"
                          variant="standard"
                          {...params}
                          InputProps={{ disableUnderline: true }}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {dateOfBirth.getFullYear()}
                  /
                  {dateOfBirth.getMonth() + 1}
                  /
                  {dateOfBirth.getDate()}
                  <button
                    type="button"
                    className="absolute right-5"
                    onClick={(e) => {
                      e.stopPropagation();
                      setField({
                        ...field,
                        dob: true,
                        notification: true,
                      });
                      setDatePicker(true);
                    }}
                  >
                    <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="md:mt-6 input-field-col:mt-0">Organization</p>
              <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                {localStorage.getItem('organization') === 'None'
                  ? 'None'
                  : domains[localStorage.getItem('organization')]}
              </div>
            </div>
          </div>
          <div className="flex">
            <button
              type="submit"
              className="w-[152px] h-[52px] mb-7 text-white mt-9 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
              onClick={(e) => {
                e.stopPropagation();
                setField({
                  name: false,
                  email: false,
                  dob: false,
                  avatar: false,
                  notification: false,
                });
              }}
            >
              Save
            </button>
            {field.notification && (
              <p className="mt-12 text-gdscBlue-200 ml-4">
                Click on Save Button to submit your changes
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
