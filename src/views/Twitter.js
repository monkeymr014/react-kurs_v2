import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/moleculs/Card/Card';

const data = [
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
  {
    title: 'aaaa',
    date: '3 days',
    avarat: null,
    link: null,
    content: 'testdjbfgkdjbfkjdbfkdb dfkgb dkfgb k skdfjhgnb ',
    avatar: 'https://pbs.twimg.com/profile_images/1571874118110257155/uUF8WNF2_400x400.jpg',
  },
];

const Twitter = () => (
  <UserPageTemplate pageType="twitter">
    {data.map((item) => (
      <Card
        cardType="twitter"
        title={item.title}
        date={item.date}
        avatar={item.avatar}
        link={item.link}
        content={item.content}
        key={item.title}
      />
    ))}{' '}
  </UserPageTemplate>
);

export default Twitter;
