import { FC } from 'react';
import { ListGroup, ListGroupItem } from '../components/ListGroup';
import { CodeExample, DemoPage } from './DemoPage';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

const ListGroupPage: FC = () => {
  const defaultItems: ListGroupItem[] = [
    {
      title: 'Profile',
    },
    {
      title: 'Settings',
    },
    {
      title: 'Messages',
    },
    {
      title: 'Download',
    },
  ];

  const itemsWithLinks: ListGroupItem[] = [
    {
      title: 'Profile',
      link: '#/list-group',
      active: true,
    },
    {
      title: 'Settings',
      link: '#/list-group',
    },
    {
      title: 'Messages',
      link: '#/list-group',
    },
    {
      title: 'Download',
      link: '#/list-group',
    },
  ];

  const itemsWithIcons: ListGroupItem[] = [
    {
      title: 'Profile',
      icon: HiUserCircle,
      onClick: () => alert('profile'),
    },
    {
      title: 'Settings',
      icon: HiOutlineAdjustments,
    },
    {
      title: 'Messages',
      icon: HiInbox,
    },
    {
      title: 'Download',
      icon: HiCloudDownload,
    },
  ];

  const examples: CodeExample[] = [
    {
      title: 'Default list',
      code: <ListGroup items={defaultItems} />,
    },
    {
      title: 'List group with links',
      code: <ListGroup items={itemsWithLinks} />,
    },
    {
      title: 'List group with buttons',
      code: <ListGroup items={itemsWithLinks} />,
    },
    {
      title: 'List group with icons',
      code: <ListGroup items={itemsWithIcons} />,
      codeStringifierOptions: {
        functionValue: (fn) => (fn.name === 'onClick' ? fn : fn.name),
      },
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ListGroupPage;
