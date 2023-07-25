import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Blacklist from 'components/Blacklist';
import UrlAPI from 'services/url.service';

export default function UrlBlacklist() {
  const [keyword, setKeyWord] = useState('');
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [urlList, setUrlList] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);

  const searchLink = async () => {
    try {
      setApiLoading(true);
      const response = await UrlAPI.searchUrlBySlug(date, keyword, currentPage);
      const { list, totalPage, total } = response.data.payload;
      setUrlList(list);
      setMaxPage(totalPage);
      setTotalResult(total);
      setApiLoading(false);
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  };

  const onAdd = useCallback(async (slug) => {
    try {
      setApiLoading(true);
      const response = await UrlAPI.addUrlBySlug(slug);
      toast.success(response.data.message);
      setForceRender((prev) => !prev);
      setApiLoading(false);
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  }, []);

  const onDelete = useCallback(async (slug) => {
    try {
      setApiLoading(true);
      const { _id } = slug;
      const response = await UrlAPI.deleteUrlBlacklist(_id);
      toast.success(response.data.message);
      setForceRender((prev) => !prev);
      setApiLoading(false);
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  }, []);

  useEffect(() => {
    try {
      const searchUrlAndSetState = async () => {
        setApiLoading(true);
        await searchLink();
        setApiLoading(false);
      };
      searchUrlAndSetState();
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  }, [date, keyword, currentPage, forceRender]);

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Url Blacklist"
        linkList={urlList}
        onAdd={onAdd}
        onDelete={onDelete}
        linkSearch={keyword}
        setLinkSearch={setKeyWord}
        setDateSearch={setDate}
        totalResult={totalResult}
        maxPage={maxPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        fetchLoading={apiLoading}
      />
    </div>
  );
}
