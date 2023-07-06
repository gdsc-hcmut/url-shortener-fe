import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Blacklist from 'components/Blacklist';
import formatDateTime from 'utils/formatDateTime';

export default function DomainBlacklist() {
  const [domainList, setDomainList] = useState([]);
  const [domainSearch, setDomainSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');

  useEffect(() => {
    const list = [
      {
        link: 'short1.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short2.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short3.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short4.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short5.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short6.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short7.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short8.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'short9.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortA.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortB.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortC.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortD.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortE.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'shortF.bit',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
    ];
    setDomainList(list);
  }, []);

  const onAdd = (domain) => {
    try {
      const addingDomain = domain.trim();
      if (addingDomain.length <= 0) throw Error('EMPTY LINK');
      domainList.forEach((item) => {
        if (item.link === addingDomain) throw Error('DOMAIN EXISTED');
      });
      const currentTime = new Date();
      const newDomain = {
        link: addingDomain,
        addedAt: formatDateTime(currentTime),
        addedBy: 'Tran Quoc Hieu',
      };
      setDomainList((list) => [...list, newDomain]);
      toast.success('DOMAIN CREATED', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } catch (error) {
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const onDelete = (removedItem) => {
    const newList = domainList.filter((item) => item.link !== removedItem.link);
    setDomainList(newList);
    toast.success('DOMAIN DELETED', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const checkSearch = (it) => it.link.includes(domainSearch) && it.addedAt.includes(dateSearch);

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Domain Blacklist"
        linkList={domainList.filter((item) => checkSearch(item))}
        onAdd={onAdd}
        onDelete={onDelete}
        linkSearch={domainSearch}
        setLinkSearch={setDomainSearch}
        setDateSearch={setDateSearch}
      />
    </div>
  );
}
