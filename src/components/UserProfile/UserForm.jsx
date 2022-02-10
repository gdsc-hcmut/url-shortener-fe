import React, { useState } from 'react';

import ClearIcon from 'assets/icons/clear.svg';
import DoneIcon from 'assets/icons/done.svg';
import EditIcon from 'assets/icons/edit.svg';

export default function UserForm() {
  const [field, setField] = useState({ name: false, email: false, dob: false });
  const [content, setContent] = useState({
    name: 'Jerome',
    email: 'example@gmail.com',
    dob: '01/01/2020',
  });
  return (
    <div>
      <div className="flex flex-col align-end mb-6 mt-[52px]">
        <p className="pb-3">Name</p>
        {field.name ? (
          <div className="flex">
            <input
              className="w-[376px] md:w-[420px] h-[64px] bg-white border
                      border-1 border-gdscBlue-300  px-5 outline-none rounded"
              type="text"
              placeholder={content.name}
              onChange={(e) => setContent({ ...content, name: e.target.value })}
            />
            <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
              <button
                type="button"
                onClick={() => setField({ ...field, name: false })}
              >
                <img className="w-6 h-6" src={DoneIcon} alt="Save new info" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setField({ ...field, name: false });
                  setContent({ ...content, name: 'Jerome' });
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
          <div className="relative w-[376px] md:w-[420px] h-[64px] flex  px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
                        border-1 border-gdscBlue-300  px-5 outline-none rounded"
              type="email"
              placeholder={content.email}
              onChange={(e) => setContent({ ...content, email: e.target.value })}
            />
            <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
              <button
                type="button"
                onClick={() => setField({ ...field, email: false })}
              >
                <img className="w-6 h-6" src={DoneIcon} alt="Save new info" />
              </button>
              <button
                type="button"
                onClick={() => {
                  setField({ ...field, email: false });
                  setContent({ ...content, email: 'example@gmail.com' });
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
          <div className="relative w-[376px] md:w-[420px] h-[64px] flex  px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
                          border-1 border-gdscBlue-300  px-5 outline-none rounded"
              type="email"
              placeholder={content.dob}
              onChange={(e) => setContent({ ...content, dob: e.target.value })}
            />
            <div className="flex flex-col space-y-1 mr-[-24px] mt-1">
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
                  setContent({ ...content, dob: '01/01/2020' });
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
          <div className="relative w-[376px] md:w-[420px] h-[64px] flex  px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
  );
}
