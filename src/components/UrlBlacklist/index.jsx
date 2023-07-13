import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Blacklist from 'components/Blacklist';
import formatDateTime from 'utils/formatDateTime';

export default function UrlBlacklist() {
  const [urlList, setUrlList] = useState([]);
  const [urlShowList, setUrlShowList] = useState([]);
  const [urlSearch, setUrlSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');

  const getResultOnPage = (page) => {
    // call API here to get new page
    console.log(page);
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
    setUrlList(list);
  };

  const checkSearch = (item) => item.link.includes(urlSearch) && item.addedAt.includes(dateSearch);

  useEffect(() => {
    getResultOnPage(1);
  }, []);

  useEffect(() => {
    // call API here
    const showList = urlList.filter((item) => checkSearch(item));
    setUrlShowList(showList);
  }, [urlSearch, dateSearch, urlList]);

  const onAdd = (url) => {
    try {
      const addingUrl = url.trim();
      if (addingUrl.length <= 0) throw Error('EMPTY LINK');
      urlList.forEach((item) => {
        if (item.link === addingUrl) throw Error('URL EXISTED');
      });
      const currentTime = new Date();
      const newUrl = {
        link: addingUrl,
        addedAt: formatDateTime(currentTime),
        addedBy: 'Tran Quoc Hieu',
      };
      setUrlList((list) => [...list, newUrl]);
      toast.success('URL CREATED');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onDelete = (removedItem) => {
    const newList = urlList.filter((item) => item.link !== removedItem.link);
    setUrlList(newList);
    toast.success('DOMAIN DELETED');
  };

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Url Blacklist"
        linkList={urlShowList}
        onAdd={onAdd}
        onDelete={onDelete}
        setLinkSearch={setUrlSearch}
        setDateSearch={setDateSearch}
        totalResult={urlShowList.length}
        getResultOnPage={getResultOnPage}
      />
    </div>
  );
}
