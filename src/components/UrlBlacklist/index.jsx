import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Blacklist from 'components/Blacklist';
// import DeleteLinkSnackbar from 'components/SnackbarV2/DeleteLinkSnackbar';
// import SuccessSnackbar from 'components/SnackbarV2/SuccessSnackbar';
// import WarnSnackbar from 'components/SnackbarV2/WarnSnackbar';
import formatDateTime from 'utils/formatDateTime';

export default function UrlBlacklist() {
  const [urlList, setUrlList] = useState([]);
  // const [showDeleteSnackbar, setShowDeleteSnackbar] = useState(false);
  // const [showAddSnackbar, setShowAddSnackbar] = useState(false);
  // const [addStatus, setAddStatus] = useState('');
  const [urlSearch, setUrlSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');

  // let TIMER_DELETE;
  // let TIMER_ADD;
  // const handleDeleteTimeout = () => {
  //   TIMER_DELETE = setTimeout(() => {
  //     setShowDeleteSnackbar(false);
  //   }, 3000);
  // };

  // useEffect(() => {
  //   if (showDeleteSnackbar) {
  //     handleDeleteTimeout();
  //   }
  //   return () => {
  //     clearTimeout(TIMER_DELETE);
  //   };
  // }, [showDeleteSnackbar, TIMER_DELETE]);

  // const handleAddTimeout = () => {
  //   TIMER_ADD = setTimeout(() => {
  //     setShowAddSnackbar(false);
  //   }, 3000);
  // };

  // useEffect(() => {
  //   if (showAddSnackbar) {
  //     handleAddTimeout();
  //   }
  //   return () => {
  //     clearTimeout(TIMER_ADD);
  //   };
  // }, [showAddSnackbar, TIMER_ADD]);

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
    setUrlList(list);
  }, []);

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
      toast.success('DOMAIN CREATED', {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
      // setAddStatus('SUCCESS');
      // setShowAddSnackbar(true);
    } catch (error) {
      // setAddStatus(error.message);
      // setShowAddSnackbar(true);
      toast.error(error.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  const onDelete = (removedItem) => {
    const newList = urlList.filter((item) => item.link !== removedItem.link);
    setUrlList(newList);
    // setShowDeleteSnackbar(true);
    toast.success('DOMAIN DELETED', {
      position: toast.POSITION.BOTTOM_RIGHT,
    });
  };

  const checkSearch = (item) => item.link.includes(urlSearch) && item.addedAt.includes(dateSearch);

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Url Blacklist"
        linkList={urlList.filter((item) => checkSearch(item))}
        onAdd={onAdd}
        onDelete={onDelete}
        // linkSearch={urlSearch}
        setLinkSearch={setUrlSearch}
        setDateSearch={setDateSearch}
      />
      {/* {showDeleteSnackbar && (
        <DeleteLinkSnackbar setShowSnackbar={setShowDeleteSnackbar} />
      )}
      {showAddSnackbar
        && (addStatus === 'SUCCESS' ? (
          <SuccessSnackbar setShowSnackbar={setShowAddSnackbar} text="ADDED" />
        ) : (
          <WarnSnackbar setShowSnackbar={setShowAddSnackbar} text={addStatus} />
        ))} */}
    </div>
  );
}
