import React, { useState } from 'react';

import ClearIcon from 'assets/icons/clear.svg';
import DoneIcon from 'assets/icons/done.svg';
import EditIcon from 'assets/icons/edit.svg';

export default function UserFormDesktop() {
  const [field, setField] = useState({ name: false, email: false, dob: false });
  const [content, setContent] = useState({
    name: 'Jerome',
    email: 'example@gmail.com',
    dob: '01/01/2020',
  });
  return (
    <div className="hidden md:block ml-[420px] mr-[60px]">
      <h1 className="text-[32px] font-medium">My Profile</h1>
      <p className="mt-2 text-gdscGrey-700">
        To edit any info, click on the “Edit” icon next to each field.
      </p>
      <div className="mt-[88px] w-full h-[640px] bg-white rounded-[8px] pl-8 pt-10">
        <form className="mt-[40px] flex flex-col">
          <div className="flex">
            <div className="w-[152px] h-[152px] bg-gdscGrey-200 rounded" />
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
          <div className="flex">
            <div className="flex flex-col">
              <p className="mt-[52px]">Name</p>
              {field.name ? (
                <div className="flex">
                  <input
                    className="mt-4 w-[460px] h-[60px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="text"
                    placeholder={content.name}
                    onChange={(e) => setContent({ ...content, name: e.target.value })}
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
                <div className="relative mt-4 w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
            <div className="flex flex-col ml-7">
              <p className="mt-[52px]">Email address</p>
              {field.email ? (
                <div className="flex">
                  <input
                    className="mt-4 w-[460px] h-[60px] bg-white border
                            border-1 border-gdscBlue-300 px-5 outline-none rounded"
                    type="email"
                    placeholder={content.email}
                    onChange={(e) => setContent({ ...content, email: e.target.value })}
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
                <div className="relative mt-4 w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
          </div>
          <p className="mt-6">Birthday</p>
          {field.dob ? (
            <div className="flex">
              <input
                className="mt-4 w-[460px] h-[60px] bg-white border
                          border-1 border-gdscBlue-300 px-5 outline-none rounded"
                type="date"
                placeholder={content.dob}
                onChange={(e) => setContent({ ...content, dob: e.target.value })}
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
            <div className="relative mt-4 w-[460px] h-[60px] flex px-5 pt-5 outline-none rounded bg-gdscGrey-100 text-input-text">
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
          <button
            type="submit"
            className="w-[152px] h-[52px] text-white mt-9 bg-gdscBlue-300 rounded hover:bg-shorten-btn-hover
          transition-all duration-300 ease-out"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
