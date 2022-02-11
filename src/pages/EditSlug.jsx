import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { register } from 'actions/auth';
import urlAction from 'actions/url';
import Url from 'components/Url';

function EditSlug() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const { shortenedUrl, slug, slugExist } = useSelector((state) => state.url);
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [newSlug, setNewSlug] = useState('');

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleLongUrl = (e) => setLongUrl(e.target.value);
  const handleNewSlug = (e) => setNewSlug(e.target.value);
  const handleClick = () => {
    dispatch(urlAction.shortenUrl(longUrl));
  };
  const handleEditSlug = () => {
    dispatch(urlAction.editSlug(slug, newSlug));
  };
  const handleSignUp = (e) => {
    e.preventDefault();
    dispatch(register(email, password));
  };
  return (
    <div>
      {isAuthenticated ? (
        <div className="flex flex-col">
          <input
            value={longUrl}
            onChange={handleLongUrl}
            className="text-base font-normal text-gdscBlue-300 h-10 w-[200px] bg-gdscGrey-300"
            placeholder="Input Url"
          />
          <button
            type="button"
            onClick={handleClick}
            className="mt-2 inset-y-5 text-base text-white w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 "
          >
            Shorten
          </button>
          <Url shortenedUrl={shortenedUrl} />
          <p>{slug}</p>
          {slugExist ? (
            <p className="text-gdscRed-300">Slug has been taken</p>
          ) : (
            <div />
          )}
          <input
            value={newSlug}
            onChange={handleNewSlug}
            className="text-base font-normal text-gdscBlue-300 h-10 w-[200px] bg-gdscGrey-300"
            placeholder="Edit slug"
          />
          <button
            type="button"
            onClick={handleEditSlug}
            className="mt-2 inset-y-5 text-base text-white w-[152px] h-[60px] bg-gdscBlue-300 rounded-[8px] hover:bg-shorten-btn-hover ease-out duration-300 "
          >
            Edit slug
          </button>
        </div>
      ) : (
        <form
          onSubmit={handleSignUp}
          className="flex flex-col justify-center items-center"
        >
          <input
            className="border border-red-600"
            type="email"
            value={email}
            onChange={handleEmail}
          />
          <input
            className="border border-blue-600"
            type="password"
            value={password}
            onChange={handlePassword}
          />
          <button className="border border-black-600" type="submit">
            Sign Up
          </button>
        </form>
      )}
    </div>
  );
}

export default EditSlug;
