// eslint-disable-next-line react/prop-types
export default function Url({ Shortlink, Longlink }) {
  return (
    <ul>
      <li>{Longlink}</li>
      <li>{Shortlink}</li>
    </ul>
  );
}
