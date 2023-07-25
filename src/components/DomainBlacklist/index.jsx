import React, { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Blacklist from 'components/Blacklist';
import UrlAPI from 'services/url.service';

export default function DomainBlacklist() {
  const [keyword, setKeyWord] = useState('');
  const [date, setDate] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [totalResult, setTotalResult] = useState(0);
  const [domainList, setDomainList] = useState([]);
  const [forceRender, setForceRender] = useState(false);
  const [apiLoading, setApiLoading] = useState(false);

  const searchLink = async () => {
    try {
      setApiLoading(true);
      const response = await UrlAPI.searchDomain(date, keyword, currentPage);
      const { list, totalPage, total } = response.data.payload;
      setDomainList(list);
      setMaxPage(totalPage);
      setTotalResult(total);
      setApiLoading(false);
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  };

  const onAdd = useCallback(async (newDomain) => {
    try {
      setApiLoading(true);
      const response = await UrlAPI.addDomain(newDomain);
      toast.success(response.data.message);
      setForceRender((prev) => !prev);
      setApiLoading(false);
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  }, []);

  const onDelete = useCallback(async (domain) => {
    try {
      setApiLoading(true);
      const { _id } = domain;
      const response = await UrlAPI.deleteDomain(_id);
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
      const searchDomainAndSetState = async () => {
        setApiLoading(true);
        await searchLink();
        setApiLoading(false);
      };
      searchDomainAndSetState();
    } catch (error) {
      toast.error(error.message);
      setApiLoading(false);
    }
  }, [date, keyword, currentPage, forceRender]);

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Domain Blacklist"
        linkList={domainList}
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
