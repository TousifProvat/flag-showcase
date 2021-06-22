import Middlebar from './Middlebar/Middlebar';
import FlagShowcase from './FlagShowcase/FlagShowcase';

interface propType {
  data: [];
}

export default function Home({ data }: propType) {
  return (
    <>
      <Middlebar />
      <FlagShowcase countries={data} />
    </>
  );
}
