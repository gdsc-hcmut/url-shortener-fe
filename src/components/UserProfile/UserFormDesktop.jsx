import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';

import { editProfile } from 'actions/user';
import EditIcon from 'assets/icons/edit.svg';

export default function UserFormDesktop() {
  const dispatch = useDispatch();
  const store = useStore();
  const avatar = new FormData();
  const { user } = useSelector((state) => state.auth);
  const [field, setField] = useState({
    name: false,
    email: false,
    dob: false,
    notification: false,
  });
  const [emailError, setEmailError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [name, setName] = useState(localStorage.getItem('userName'));
  const [datePicker, setDatePicker] = useState(false);
  const [newEmail, setNewEmail] = useState(localStorage.getItem('userEmail'));
  const [dateOfBirth, setDateOfBirth] = useState(
    new Date(localStorage.getItem('userBirthday')),
  );
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setNewEmail(e.target.value);
  const { email } = user;
  const editUserProfile = async (e) => {
    e.preventDefault();
    await dispatch(editProfile(name, newEmail, email, dateOfBirth));
    const reduxState = store.getState();
    if (reduxState.auth.error.email === 'Email taken') {
      setEmailError(true);
      setTimeout(() => setEmailError(false), 2000);
    } else {
      localStorage.setItem('userName', name);
      localStorage.setItem('userEmail', newEmail);
      localStorage.setItem('userBirthday', dateOfBirth);
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
        className="mt-[88px] w-full bg-white rounded-[8px] pl-8 pt-10"
        onClick={() => {
          setField({ ...field, name: false });
        }}
      >
        <form className="mt-[40px] flex flex-col" onSubmit={editUserProfile}>
          <div className="flex">
            {selectedImage ? (
              <div>
                <img
                  alt="user avatar"
                  className="md:w-[100px] md:h-[100px] lg:w-[152px] lg:h-[152px] rounded"
                  src={URL.createObjectURL(selectedImage)}
                />
                <button type="button" onClick={() => setSelectedImage(null)}>
                  Remove
                </button>
              </div>
            ) : (
              <div className="md:w-[100px] md:h-[100px] lg:w-[152px] lg:h-[152px] bg-gdscGrey-200 rounded" />
            )}
            <div className="flex flex-col self-end ml-8">
              <button
                type="button"
                className="w-[160px] h-[52px] mb-7 bg-gdscBlue-200 bg-opacity-20 overflow-hidden
              hover:bg-opacity-40 transition-all duration-300 ease-out text-gdscBlue-300 rounded"
              >
                <label htmlFor="input-avatar" className="cursor-pointer">
                  Browse
                  <input
                    type="file"
                    id="input-avatar"
                    onChange={(event) => {
                      setSelectedImage(event.target.files[0]);
                      avatar.append(
                        'user-avatar',
                        event.target.files[0],
                        event.target.files[0].name,
                      );
                    }}
                    hidden
                  />
                </label>
              </button>
              <p className="text-xs">
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                files are .jpg & .png
              </p>
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
                    value={name}
                    placeholder={name}
                    onChange={handleName}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {name}
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
                    className="absolute right-5"
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
          </div>
          <p className="mt-6">Birthday</p>
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
                  setField({ ...field, dob: true, notification: true });
                  setDatePicker(true);
                }}
              >
                <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
              </button>
            </div>
          )}
          <div className="flex">
            <button
              type="submit"
              className="w-[152px] h-[52px] mb-7 text-white mt-9 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
              onClick={(e) => {
                e.stopPropagation();
                setField({
                  ...field,
                  name: false,
                  email: false,
                  dob: false,
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
