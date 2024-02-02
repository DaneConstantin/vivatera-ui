import Hero from '@/components/home/hero';
import Layout from '../components/Layout';
export default function Home() {
  return (
    <Layout>

      <main className="flex min-h-screen flex-col items-center justify-between bg-[#141414]">

        <Hero />

      </main>
    </Layout>
  );
}
