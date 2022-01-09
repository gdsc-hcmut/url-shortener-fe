import Url from 'components/Url';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl text-blue-600 underline">My URL</h1>
      <Url />
    </div>
  );
}
