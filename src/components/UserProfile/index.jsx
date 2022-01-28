import React from 'react';

import AddPhoto from 'assets/icons/add_a_photo.svg';

import UserForm from './UserForm';

export default function UserProfile() {
  return (
    <form className="flex flex-col justify-center items-center">
      <div className="flex justify-items-start w-[376px]">
        <h1 className="text-[32px] font-medium">My Profile</h1>
      </div>
      <div className="relative w-[148px] h-[148px] bg-gdscGrey-200 rounded-[8px] mt-8">
        <div className="absolute top-[132px] left-[56px] w-9 h-9 rounded-[9999px] bg-gdscGrey-200 flex justify-center items-center">
          <img className="w-5 h-5" src={AddPhoto} alt="Add avatar icon" />
        </div>
      </div>
      <UserForm />
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
