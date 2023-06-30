import React, { useEffect, useState } from 'react';

import Blacklist from 'components/Blacklist';

export default function UrlBlacklist() {
  const [listUrl, setListUser] = useState([]);
  const [pageArray] = useState([1, 2, 3, 4]);

  useEffect(() => {
    const list = [
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh1',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh2',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh3',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh4',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh5',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh6',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh7',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh8',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdh9',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhA',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhB',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhC',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhD',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhE',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
      {
        link: 'https://longlinkaaaaaaaaaaaa.COM/d213gd621y3hgdhF',
        addedAt: 'Friday 30/06/2023 9:06:06 AM',
        addedBy: 'Tran Quoc Hieu',
      },
    ];
    setListUser(list);
  }, []);

  const formatDateTime = (time) => `${new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
  }).format(time)} ${time.getDate()}/${
    time.getMonth() < 9 ? `0${time.getMonth() + 1}` : time.getMonth()
  }/${time.getFullYear()} ${time.toLocaleTimeString()}`;

  const handleAdd = (addingURL) => {
    try {
      if (addingURL.length <= 0) throw Error('Please Enter the link');
      listUrl.forEach((item) => {
        if (item.link === addingURL) throw Error(`This link has been added at ${item.addedAt}`);
      });
      const current = new Date();
      const newUrl = {
        link: addingURL,
        addedAt: formatDateTime(current),
        addedBy: 'Tran Quoc Hieu',
      };
      setListUser((list) => [...list, newUrl]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (removedItem) => {
    const newList = listUrl.filter((item) => item.link !== removedItem.link);
    setListUser(newList);
  };

  return (
    <Blacklist
      title="Url Blacklist"
      listUser={listUrl}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      pageList={pageArray}
    />
  );
}
