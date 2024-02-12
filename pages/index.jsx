import Hero from '@/components/home/hero';
import Layout from '../components/Layout';
import Services from '@/components/home/services';
import SectionHeader from '@/components/SectionHeader';
import PropertiesList from '../components/PropertiesSlider';


export default function Home() {
  return (
    <Layout>

      <main className="flex min-h-screen flex-col items-center bg-[#141414]">

        <Hero />
        <Services />
        <section className="container">
          <SectionHeader title="Featured Properties" description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information." />
          <PropertiesList />
        </section>
      </main>
    </Layout>
  );
}
