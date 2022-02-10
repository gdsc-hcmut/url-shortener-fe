import React, { useState } from 'react';

import AddPhoto from 'assets/icons/add_a_photo.svg';
import ClearIcon from 'assets/icons/clear.svg';
import DoneIcon from 'assets/icons/done.svg';
import EditIcon from 'assets/icons/edit.svg';

export default function UserFormMobile() {
  const [field, setField] = useState({ name: false, email: false, dob: false });
  const [content, setContent] = useState({
    name: 'Jerome',
    email: 'example@gmail.com',
    dob: '01/01/2020',
  });
  return (
    <form className="md:hidden flex flex-col justify-center items-center">
      <div className="flex justify-items-start w-[376px]">
        <h1 className="text-[32px] font-medium">My Profile</h1>
      </div>
      <div className="relative w-[148px] h-[148px] bg-gdscGrey-200 rounded-[8px] mt-8">
        <div className="absolute top-[132px] left-[56px] w-9 h-9 rounded-[9999px] bg-gdscGrey-200 flex justify-center items-center">
          <img className="w-5 h-5" src={AddPhoto} alt="Add avatar icon" />
        </div>
      </div>
      <div>
        <div className="flex flex-col align-end mb-6 mt-[52px]">
          <p className="pb-3">Name</p>
          {field.name ? (
            <div className="flex">
              <input
                className="w-[376px] md:w-[420px] h-[64px] bg-white border
                      border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="text"
                placeholder={content.name}
                onChange={(e) => setContent({ ...content, name: e.target.value })}
              />
              <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
                <button
                  type="button"
                  onClick={() => setField({ ...field, name: false })}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={DoneIcon}
                    alt="Save new info"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setField({ ...field, name: false });
                    setContent({ ...content, name: 'Jerome' });
                  }}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={ClearIcon}
                    alt="Return to old info"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {content.name}
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
        <div className="flex flex-col align-end mb-6">
          <p className="pb-3">Email address</p>
          {field.email ? (
            <div className="flex">
              <input
                className="w-[376px] md:w-[420px] h-[64px] bg-white border
                        border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="email"
                placeholder={content.email}
                onChange={(e) => setContent({ ...content, email: e.target.value })}
              />
              <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
                <button
                  type="button"
                  onClick={() => setField({ ...field, email: false })}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={DoneIcon}
                    alt="Save new info"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setField({ ...field, email: false });
                    setContent({ ...content, email: 'example@gmail.com' });
                  }}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={ClearIcon}
                    alt="Return to old info"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {content.email}
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
        <div className="flex flex-col align-end mb-8">
          <p className="pb-3">Birthday</p>
          {field.dob ? (
            <div className="flex">
              <input
                className="w-[376px] md:w-[420px] h-[64px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="date"
                placeholder={content.dob}
                onChange={(e) => setContent({ ...content, dob: e.target.value })}
              />
              <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
                <button
                  type="button"
                  onClick={() => setField({ ...field, dob: false })}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={DoneIcon}
                    alt="Save new info"
                  />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setField({ ...field, dob: false });
                    setContent({ ...content, dob: '01/01/2020' });
                  }}
                >
                  <img
                    className="w-6 h-6 ml-[-2px]"
                    src={ClearIcon}
                    alt="Return to old info"
                  />
                </button>
              </div>
            </div>
          ) : (
            <div className="relative w-[376px] md:w-[420px] h-[64px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
              {content.dob}
              <button
                type="button"
                className="absolute right-5"
                onClick={() => setField({ ...field, dob: true })}
              >
                <img className="w-6 h-6" src={EditIcon} alt="Edit info" />
              </button>
            </div>
          )}
        </div>
      </div>
      <button
        className="font-normal text-white w-[152px] md:w-[420px] h-[60px]
                  bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
                  transition-all duration-300 ease-out md:mb-7"
        type="submit"
      >
        Save
      </button>
    </form>
  );
}
