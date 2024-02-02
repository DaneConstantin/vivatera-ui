import Hero from '@/components/home/hero';
import Layout from '../components/Layout';
import Services from '@/components/home/services';
export default function Home() {
  return (
    <Layout>

      <main className="flex min-h-screen flex-col items-center bg-[#141414]">

        <Hero />
        <Services />
      </main>
    </Layout>
  );
}
