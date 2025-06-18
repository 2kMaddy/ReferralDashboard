import Header from "../components/Header";
import ReferralAccountDetails from "../components/ReferralAccountDetails";
import ReferralSection from "../components/ReferralSection";
import DataTable from '../components/DataTable';
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home-page-container">
      <Header />
      <ReferralAccountDetails />
      <ReferralSection />
      <DataTable/>
      <Footer />
    </div>
  );
};

export default Home;
