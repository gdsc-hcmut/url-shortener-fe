import React, { useEffect, useState } from 'react';

import Blacklist from 'components/Blacklist';
import AddLinkSnackbar from 'components/SnackbarV2/AddLinkSnackbar';
import DeleteLinkSnackbar from 'components/SnackbarV2/DeleteLinkSnackbar';

export default function DomainBlacklist() {
  const [listDomain, setListDomain] = useState([]);
  const [pageArray] = useState([1, 2, 3, 4]);
  const [showDeleteSnackbar, setShowDeleteSnackbar] = useState(false);
  const [showAddSnackbar, setShowAddSnackbar] = useState(false);
  const [addStatus, setAddStatus] = useState('');

  let TIMER_DELETE;
  let TIMER_ADD;
  const handleDeleteTimeout = () => {
    TIMER_DELETE = setTimeout(() => {
      setShowDeleteSnackbar(false);
    }, 3000);
  };

  useEffect(() => {
    if (showDeleteSnackbar) {
      handleDeleteTimeout();
    }
    return () => {
      clearTimeout(TIMER_DELETE);
    };
  }, [showDeleteSnackbar, TIMER_DELETE]);

  const handleAddTimeout = () => {
    TIMER_ADD = setTimeout(() => {
      setShowAddSnackbar(false);
    }, 3000);
  };

  useEffect(() => {
    if (showAddSnackbar) {
      handleAddTimeout();
    }
    return () => {
      clearTimeout(TIMER_ADD);
    };
  }, [showAddSnackbar, TIMER_ADD]);

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
  }).format(time)} ${
    time.getDate() < 9 ? `0${time.getDate()}` : time.getDate()
  }/${
    time.getMonth() < 9 ? `0${time.getMonth() + 1}` : `${time.getMonth() + 1}`
  }/${time.getFullYear()} ${time.toLocaleTimeString()}`;

  const handleAdd = (addingDomain) => {
    try {
      if (addingDomain.length <= 0) throw Error('EMPTY_INPUT');
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
      setAddStatus('SUCCESS');
      setShowAddSnackbar(true);
    } catch (error) {
      setAddStatus('ERROR');
      setShowAddSnackbar(true);
    }
  };

  const handleDelete = (removedItem) => {
    const newList = listDomain.filter((item) => item.link !== removedItem.link);
    setListDomain(newList);
    setShowDeleteSnackbar(true);
  };

  return (
    <div className="no-scrollbar overflow-scroll">
      <Blacklist
        title="Domain Blacklist"
        listUser={listDomain}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        pageList={pageArray}
      />
      {showDeleteSnackbar && (
        <DeleteLinkSnackbar setShowSnackbar={setShowDeleteSnackbar} />
      )}
      {showAddSnackbar && (
        <AddLinkSnackbar
          setShowSnackbar={setShowAddSnackbar}
          text={addStatus}
        />
      )}
    </div>
  );
}
