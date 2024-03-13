import Nav from "./components/Nav";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReviews,
  Subscribe,
  Footer,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      {/* NAV */}
      <Nav />
      {/* HERO */}
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      {/* POPULAR PRODUCTS */}
      <section className="padding">
        <PopularProducts />
      </section>
      {/* SUPER QUALITY */}
      <section className="padding">
        <SuperQuality />
      </section>
      {/* SERVICES */}
      <section className="padding">
        <Services />
      </section>
      {/* SPECIAL OFFER */}
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* CUSTOMER REVIEWS */}
      <section className="padding bg-pale-blue ">
        <CustomerReviews />
      </section>
      {/* SUBSCRIBE */}
      <section className="padding-x p-16 sm:py-32 w-full">
        <Subscribe />
      </section>
      {/* FOOTER */}
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default App;
