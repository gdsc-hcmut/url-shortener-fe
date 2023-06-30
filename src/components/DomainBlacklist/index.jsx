import React, { useEffect, useState } from 'react';

import Blacklist from 'components/Blacklist';

export default function DomainBlacklist() {
  const [listDomain, setListDomain] = useState([]);
  const [pageArray] = useState([1, 2, 3, 4]);

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
    setListDomain(list);
  }, []);

  const formatDateTime = (time) => `${new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(time)} ${time.getDate()}/${
    time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth()
  }/${time.getFullYear()} ${time.toLocaleTimeString()}`;

  const handleAdd = (addingDomain) => {
    try {
      if (addingDomain.length <= 0) throw Error('Please Enter the link');
      listDomain.forEach((item) => {
        if (item.link === addingDomain) throw Error(`This link has been added at ${item.addedAt}`);
      });
      const current = new Date();
      const newUrl = {
        link: addingDomain,
        addedAt: formatDateTime(current),
        addedBy: 'Tran Quoc Hieu',
      };
      setListDomain((list) => [...list, newUrl]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (removedItem) => {
    const newList = listDomain.filter((item) => item.link !== removedItem.link);
    setListDomain(newList);
  };

  return (
    <Blacklist
      title="Domain Blacklist"
      listUser={listDomain}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      pageList={pageArray}
    />
  );
}
