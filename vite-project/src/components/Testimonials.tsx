import TEST from "../assets/52baff9910a74fb097f6a82f45faa764.jpg";
import Test2 from "../assets/IMG_20220813_145148_249.jpg";
import Text3 from "../assets/IMG_20220826_011249_530.jpg";
const Testimonials = () => {
  return (
    <>
      <main className="testimonial-main">
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
            <span
              style={{
                color: "red",
              }}
            >
              The ball is in your court,it cannot be predetermined by anybody.
            </span>
            Don't worry i have a lot of bonuses for you when you get the
            programme.
          </h2>
          <h2>Click the Button below now to get access to your course</h2>
        </div>
        <button>
          <a href="https://aff.stakecut.com/611264/7231729">Get Started!</a>
        </button>
        <h1
          style={{
            color: "red",
            fontWeight: "500",
          }}
        >
          If you have any questions contact me on whatsapp by clicking the link
          below
        </h1>
        <a href="https://wa.me/2347065142095">contact me on whatsapp</a>
      </main>
    </>
  );
};

export default Testimonials;
