import Image from "next/image";
import Link from "next/link";
import image from "/public/images/PROJECTS.png";
import bilding from "/public/images/bilding.png";

export default function Home() {
  return (
    <div>
      <div className="man">
        <div>
          <h1 className="pro">PROJECT</h1>
          <h1 className="lor">
            <b>Lorum</b>
          </h1>
          <div>
            <div className="arrow-container">
              <img className="aro" src="/images/aro.png" alt="Left Arrow" />
              <img className="aro1" src="/images/aro1.png" alt="Right Arrow" />
            </div>
            <div className="number">
              <img src="/images/number.png" alt="Number" />
            </div>
          </div>
        </div>
        <div className="bilding">
          <Image
            src={"/images/bilding.png"}
            alt="image"
            width={600}
            height={300}
          />
        </div>
      </div>
      <div className="view">
        <img src="/images/view.png" alt="VIEW" />
      </div>
      <div className="about">
        <div>
          <img className="ml-10 mt-10" src="/images/rec.png" alt="" />
          <img className="mt-10 ml-10" src="/images/rect.png" alt="" />
        </div>
        <div>
          <img className="ml-10 mt-10" src="/images/rectangle.png" alt="" />
        </div>
        <div className="mt-10 ml-10">
          <h1 className="abo">About</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and <br />
            typesetting industry. Lorem Ipsum has been the <br />
            industry's standard dummy text ever since the 1500s,
            <br />
            when an unknown printer took a galley of type and <br />
            scrambled it to make a type specimen book. It has <br />
            survived not only five centuries, but also the leap into <br />
            electronic typesetting, remaining essentially unchanged.
          </p>{" "}
          <br />
          <button className="button">READ MORE</button>
        </div>
      </div>
      <div>
        {" "}
        <br />
        <h1 className="mann"> Main Focus/Mission Statement</h1>
      </div>
      <div className="one1">
        <div>
          <h1 className="one">1</h1>
        </div>{" "}
        <br />
        <div className="p">
          {" "}
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit. <br />
            Sed efficitur, lectus et <br />
            facilisis placerat.
          </p>
          <br />
        </div>
        <div className="ml-40">
          <h1 className="one">2</h1>
        </div>{" "}
        <br />
        <div className="p">
          {" "}
          <p>
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit. <br />
            Sed efficitur, lectus et facilisis placerat,
            <br />
            magna mauris porttitor tortor,
            <br />a auctor est felis ut nisl.
          </p>
          <br />
        </div>
      </div>
      <div className="our">
        <h1 className="o">Our Projects</h1>
        <br />
        <div className="lll">
          <img src="/images/sec.png" alt="image" />
          <img className="ml-10" src="/images/image15.png" alt="image" />
        </div>
        <div className="lll">
          <img className="mt-10" src="/images/image16.png" alt="image" />
          <img className="mt-10 ml-8" src="/images/image17.png" alt="image" />
          <img className="mt-10 ml-7" src="/images/image18.png" alt="image" />
        </div>
        <button className="ALL">ALL PROJECTS</button>
      </div>{" "}
      <br />
      <div className="us">
        <div className="a">
          <h1 className="u">Contact Us</h1>
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                defaultValue={""}
              />
            </div>{" "}
            <br />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div>
          <img className="phone" src="/images/image12.png" alt=" images" />
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
