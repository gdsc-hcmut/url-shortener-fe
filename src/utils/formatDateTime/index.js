const formatDateTime = (time) => `${new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
}).format(time)} ${
  time.getDate() < 9 ? `0${time.getDate()}` : time.getDate()
}/${
  time.getMonth() < 9 ? `0${time.getMonth() + 1}` : `${time.getMonth() + 1}`
}/${time.getFullYear()} ${time.toLocaleTimeString()}`;

export default formatDateTime;
