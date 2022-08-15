import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Container from './Content/Container';
import { FaApple } from 'react-icons/fa'
function App () {
  return (
    <main>
      <Header />
      <section>
        {/** Starter ------------------------------------------------------ */}
        <Container
          img={"https://www.apple.com/v/home/aq/images/heroes/back-to-school-2022/hero_bts__bcuslanw39xe_large.jpg"}
          textBtn={"Show More"}
          linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
          title={"Get supercharged for college."}
          subtitle={`Save on Mac or iPad. Plus get a gift card up to $150.`}
        />
        <Container
          img={"https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_mediumtall.jpg"}
          textBtn={"Lear More"}
          linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
          secTextBtn={"Buy now"}
          secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
          title={"iPhohe 13"}
          subtitle={`Your new superpower`}
        />
        {/** Blocks Row ------------------------------------------------------ */}
        <div className='row'>
            <Container
            img={"https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Buy now"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"iPhohe 13"}
            subtitle={`Oh. So. Pro`}
          />
          <Container
            bgBlack='bg_black'
            img={"https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Buy now"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"MacBook Pro 13"}
            subtitle={`Charged By superpower`}
          />
        </div>
        <div className='row'>
          <Container
            img={"https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Buy"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"Wtach"}
            logo={<FaApple />}
            subtitle={`It is Our largest display yet.`}
          />
          <Container
            bgBlack='bg_black cl_reserve'
            img={"https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Buy"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"iPad air"}
            subtitle={`Light. Bright. Full of might.`}
          />
        </div>
        <div className='row'>
          <Container
            img={"https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Apply now"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"Card"}
            subtitle={`Get up to 3% Daily Cash back with every purchase.`}
          />
          <Container
            clReserve="cl_reserve"
            img={"https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large_2x.jpg"}
            textBtn={"Lear More"}
            linkBtn={"https://www.apple.com/us-hed/shop/back-to-school"}
            secTextBtn={"Buy"}
            secLinkBtn={"https://www.apple.com/macbook-air-m2/"}
            title={"AirPods"}
            subtitle={`with Special Audio`}
          />
        </div>
        {/** Slider ------------------------------------------------------ */}
        <div className="row">
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default App;