
import Image from 'next/image';

export default function Home() {
  return (
    <div>
  <h1>This is home</h1>
  <Image src={'/Image/shop.jpg'} alt="sample image" width={600} height={400}/>
  </div>
  );
}
