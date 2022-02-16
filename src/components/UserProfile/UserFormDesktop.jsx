import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editProfile } from 'actions/user';
import ClearIcon from 'assets/icons/clear.svg';
import DoneIcon from 'assets/icons/done.svg';
import EditIcon from 'assets/icons/edit.svg';

export default function UserFormDesktop() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [field, setField] = useState({ name: false, email: false, dob: false });
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);
  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const editUserProfile = (e) => {
    e.preventDefault();
    dispatch(editProfile(name, email, dateOfBirth));
  };
  return (
    <div className="hidden md:block ml-[60px] mr-[60px] mt-[64px]">
      <h1 className="text-[32px] font-medium">My Profile</h1>
      <p className="mt-2 text-gdscGrey-700">
        To edit any info, click on the “Edit” icon next to each field.
      </p>
      <div className="mt-[88px] w-full bg-white rounded-[8px] pl-8 pt-10">
        <form className="mt-[40px] flex flex-col" onSubmit={editUserProfile}>
          <div className="flex">
            <div className="md:w-[100px] md:h-[100px] lg:w-[152px] lg:h-[152px] bg-gdscGrey-200 rounded" />
            <div className="flex flex-col self-end ml-8">
              <button
                type="button"
                className="w-[160px] h-[52px] mb-7 bg-gdscBlue-200 bg-opacity-20
              hover:bg-opacity-40 transition-all duration-300 ease-out text-gdscBlue-300 rounded"
              >
                Browse
              </button>
              <p className="text-xs">
                Max file size is 1MB, Minimum dimension: 330x300 And Suitable
                files are .jpg & .png
              </p>
            </div>
          </div>
          <div className="flex flex-wrap 2xl:space-x-7 mt-[52px]">
            <div className="flex flex-col">
              <p>Name</p>
              {field.name ? (
                <div className="flex">
                  <input
                    className="mt-4 w-[320px] lg:w-[460px] h-[60px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="text"
                    value={name}
                    placeholder={name}
                    onChange={handleName}
                  />
                  <div className="flex flex-col space-y-2 mr-[-24px] mt-4">
                    <button
                      type="button"
                      onClick={() => setField({ ...field, name: false })}
                    >
                      <img
                        className="w-6 h-6"
                        src={DoneIcon}
                        alt="Save new info"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setField({ ...field, name: false });
                        setName(user.name);
                      }}
                    >
                      <img
                        className="w-6 h-6"
                        src={ClearIcon}
                        alt="Return to old info"
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {name}
                  <button
                    type="button"
                    className="absolute right-5"
                    onClick={() => setField({ ...field, name: true })}
                  >
                    <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
                  </button>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <p className="md:mt-6 2xl:mt-0">Email address</p>
              {field.email ? (
                <div className="flex">
                  <input
                    className="mt-4 w-[320px] lg:w-[460px] h-[60px] bg-white border
                            border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="email"
                    value={email}
                    placeholder={email}
                    onChange={handleEmail}
                  />
                  <div className="flex flex-col space-y-2 mr-[-24px] mt-4">
                    <button
                      type="button"
                      onClick={() => setField({ ...field, email: false })}
                    >
                      <img
                        className="w-6 h-6"
                        src={DoneIcon}
                        alt="Save new info"
                      />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setField({ ...field, email: false });
                        setEmail(user.email);
                      }}
                    >
                      <img
                        className="w-6 h-6"
                        src={ClearIcon}
                        alt="Return to old info"
                      />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
                  {email}
                  <button
                    type="button"
                    className="absolute right-5"
                    onClick={() => setField({ ...field, email: true })}
                  >
                    <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
                  </button>
                </div>
              )}
            </div>
          </div>
          <p className="mt-6">Birthday</p>
          {field.dob ? (
            <div className="flex">
              <input
                className="mt-4 w-[320px] lg:w-[460px] h-[60px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="date"
                value={dateOfBirth}
                placeholder={dateOfBirth}
                onChange={handleDateOfBirth}
              />
              <div className="flex flex-col space-y-2 mr-[-24px] mt-4">
                <button
                  type="button"
                  onClick={() => setField({ ...field, dob: false })}
                >
                  <img className="w-6 h-6" src={DoneIcon} alt="Save new info" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setField({ ...field, dob: false });
                    setDateOfBirth(user.dateOfBirth);
                  }}
                >
                  <img
                    className="w-6 h-6"
                    src={ClearIcon}
                    alt="Return to old info"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative mt-4 w-[320px] lg:w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {dateOfBirth}
              <button
                type="button"
                className="absolute right-5"
                onClick={() => setField({ ...field, dob: true })}
              >
                <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
              </button>
            </div>
          )}
          <button
            type="submit"
            className="w-[152px] h-[52px] mb-7 text-white mt-9 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
