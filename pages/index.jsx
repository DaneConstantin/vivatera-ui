import Hero from '@/components/home/hero';
import Layout from '../components/Layout';
import Services from '@/components/home/services';
import SectionHeader from '@/components/SectionHeader';
import PropertiesSlider from '../components/home/slider/PropertiesSlider';
import FAQSlider from '@/components/home/faq/FAQ';
import CTA from '@/components/CTA';


export default function Home() {
  return (
    <Layout>

      <main className="flex min-h-screen flex-col items-center bg-[#141414]">

        <Hero />
        <Services />
        <section className="container">
          <SectionHeader title="Featured Properties" description="Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein. Click &quot;View Details&quot; for more information." buttonTitle="View All Properties" />
          <PropertiesSlider />
          <SectionHeader title="Frequently Asked Questions" description="Find answers to common questions about VivaTerra&apos;s services, property listings, and the real estate process. We&apos;re here to provide clarity and assist you every step of the way." buttonTitle="View All FAQ&apos;s" />
          <FAQSlider />
        </section>
        <CTA />
      </main>
    </Layout>
  );
}
