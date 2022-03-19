import { yupResolver } from '@hookform/resolvers/yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import { uploadBytes, ref, getDownloadURL } from 'firebase/storage';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch, useStore } from 'react-redux';
import * as yup from 'yup';

import { UPLOAD_IMG } from 'action-types';
import { editProfile } from 'actions/user';
import AddPhoto from 'assets/icons/add_a_photo.svg';
import EditIcon from 'assets/icons/edit.svg';
import storage from 'config/firebase-storage';

const schema = yup
  .object({
    name: yup.string(),
  })
  .required();

export default function UserFormMobile() {
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
  }, []);

  const handleImageUpload = (e) => {
    console.log('BLEEE MOBILE');
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
    <form
      aria-hidden
      className="md:hidden flex flex-col justify-center items-center"
      onSubmit={handleSubmit(editUserProfile)}
      onClick={() => {
        setField({
          ...field,
          name: false,
          email: false,
          dob: false,
        });
      }}
    >
      <div className="flex justify-items-start w-[376px]">
        <h1 className="text-[32px] font-medium">My Profile</h1>
      </div>
      <div className="relative w-[148px] h-[148px] bg-gdscGrey-200 rounded-[8px] mt-8">
        <img
          src={
            uploadAva
            || 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg'
          }
          className="w-[148px] h-[148px] rounded-[8px] border border-gdscGrey-200"
          alt="user avatar"
        />
        <div className="absolute top-[132px] left-[56px] w-9 h-9 rounded-[9999px] bg-gdscGrey-200 flex justify-center items-center">
          <label htmlFor="image_uploads_mobile">
            <img className="w-5 h-5" src={AddPhoto} alt="Add avatar icon" />
            <input
              type="file"
              id="image_uploads_mobile"
              className="opacity-0 absolute -z-10"
              accept="image/png, image/jpeg, image/jpg"
              onChange={handleImageUpload}
            />
          </label>
        </div>
      </div>
      <div>
        {field.notification && field.avatar && (
          <p className="text-gdscBlue-300 text-sm mt-[52px]">
            Your image has been uploaded. Click Save to submit your changes
          </p>
        )}
        <div className="flex flex-col align-end mb-6 mt-[52px]">
          <p className="pb-3">Name</p>
          {field.name ? (
            <div>
              <input
                className="w-[376px] md:w-[420px] h-[64px] bg-white border
                      border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="text"
                {...register('name')}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : (
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {getValues('name')
                ? getValues('name')
                : localStorage.getItem('userName')}
              <button
                type="button"
                className="absolute right-5"
                onClick={(e) => {
                  e.stopPropagation();
                  setField({ ...field, name: true, notification: true });
                }}
              >
                <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
              </button>
            </div>
          )}
        </div>
        <div className="flex flex-col align-end mb-6">
          <p className="pb-3">Email address</p>
          {field.email ? (
            <div className="flex">
              <input
                className="w-[376px] md:w-[420px] h-[64px] bg-white border
                        border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="email"
                placeholder={newEmail}
                value={newEmail}
                onChange={handleEmail}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : (
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {newEmail}
              <button
                type="button"
                className="hidden absolute right-5"
                onClick={(e) => {
                  e.stopPropagation();
                  setField({ ...field, email: true, notification: true });
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
        <div className="flex flex-col align-end mb-8">
          <p className="pb-3">Birthday</p>
          {field.dob ? (
            <div
              aria-hidden
              className="h-[60px] w-[376px] px-5 pt-4 bg-white border
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
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
                  setField({ ...field, dob: true, notification: true });
                  setDatePicker(true);
                }}
              >
                <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
              </button>
            </div>
          )}
        </div>
      </div>
      {field.notification && (
        <p className="text-gdscBlue-200 mt-[-12px] mb-2">
          Click on Save Button to submit your changes
        </p>
      )}
      <button
        className="font-normal text-white w-[152px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
        type="submit"
        onClick={(e) => {
          e.stopPropagation();
          setField({
            ...field,
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
    </form>
  );
}
