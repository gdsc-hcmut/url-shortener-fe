import React, { useEffect, useState } from 'react';

import Blacklist from 'components/Blacklist';
import DeleteLinkSnackbar from 'components/SnackbarV2/DeleteLinkSnackbar';
import SuccessSnackbar from 'components/SnackbarV2/SuccessSnackbar';
import WarnSnackbar from 'components/SnackbarV2/WarnSnackbar';
import formatDateTime from 'utils/formatDateTime';

export default function DomainBlacklist() {
  const [domainList, setDomainList] = useState([]);
  const [showDeleteSnackbar, setShowDeleteSnackbar] = useState(false);
  const [showAddSnackbar, setShowAddSnackbar] = useState(false);
  const [addStatus, setAddStatus] = useState('');
  const [domainSearch, setDomainSearch] = useState('');
  const [dateSearch, setDateSearch] = useState('');

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
    setDomainList(list);
  }, []);

  const onAdd = (domain) => {
    try {
      const addingDomain = domain.trim();
      if (addingDomain.length <= 0) throw Error('EMPTY LINK');
      domainList.forEach((item) => {
        if (item.link === addingDomain) throw Error('LINK EXISTED');
      });
      const currentTime = new Date();
      const newDomain = {
        link: addingDomain,
        addedAt: formatDateTime(currentTime),
        addedBy: 'Tran Quoc Hieu',
      };
      setDomainList((list) => [...list, newDomain]);
      setAddStatus('SUCCESS');
      setShowAddSnackbar(true);
    } catch (error) {
      setAddStatus(error.message);
      setShowAddSnackbar(true);
    }
  };

  const onDelete = (removedItem) => {
    const newList = domainList.filter((item) => item.link !== removedItem.link);
    setDomainList(newList);
    setShowDeleteSnackbar(true);
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
      {showDeleteSnackbar && (
        <DeleteLinkSnackbar setShowSnackbar={setShowDeleteSnackbar} />
      )}
      {showAddSnackbar
        && (addStatus === 'SUCCESS' ? (
          <SuccessSnackbar setShowSnackbar={setShowAddSnackbar} text="ADDED" />
        ) : (
          <WarnSnackbar setShowSnackbar={setShowAddSnackbar} text={addStatus} />
        ))}
    </div>
  );
}
