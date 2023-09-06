import TEST from "../assets/52baff9910a74fb097f6a82f45faa764.jpg";
import Test2 from "../assets/IMG_20220813_145148_249.jpg";
import Text3 from "../assets/IMG_20220826_011249_530.jpg";
const Testimonials = () => {
  return (
    <>
      <main className="testimonial-main">
        <section className="testimonial-section">
          <h1>
            The maker off the course you are about to access is Nwanneka Caleb
          </h1>
          <h2>
            He is the top Affiliate marketer in Nigeria, he shared his
            experience how he was scammed in 2018 and how he came across
            Affiliate marketing. Has a top affiliate with a lot of experience he
            created a course sharing all the secrets about affiliating. He has
            gone to many countries and all his students including myself are
            making it big in the business.{" "}
            <span
              style={{
                color: "red",
                fontStyle: "oblique",
              }}
            >
              Below are the testimonials of all those that have used the course
              and what they have gained.
            </span>
          </h2>
        </section>
        <img src={TEST} alt="" />
        <h2
          style={{
            textAlign: "center",
            marginTop: "1em",
            marginBottom: "1em",
          }}
        >
          More testimonies, Evidence dey!!!!!. This is the next big thing,
          <span
            style={{
              color: "red",
            }}
          >
            {" "}
            Reach out to me now to acesss your course.
          </span>
        </h2>
        <div className="testimonial-img">
          <img src={Test2} alt="" />
          <img src={Text3} alt="" />
        </div>
        <h2>
          This are just few testimonies, you can see that caleb nwanneka
          affiliate marketing accelerator programme (AMAP) is the real deal.
        </h2>
        <div className="testimonial-div">
          <h2>So what's is gonna be?</h2>
          <h2>
            Would you message me now to gain access to a beautiful life where
            you're in control of your decisions
          </h2>

          <h2>
            The ball is in your court,it cannot be predetermined by anybody.
          </h2>
        </div>
        <button>
          <a href="https://wa.me/2347065142095">Click me!</a>
        </button>
      </main>
    </>
  );
};

export default Testimonials;
