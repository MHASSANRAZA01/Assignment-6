import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        {" "}
        <br />
        <div className="whitelogo">
          <img src="/images/logowhite.png" alt="LOGO" />
        </div>
        <div className="info">
          <h1>
            <b>Information</b>
          </h1>
          <br />
          <h1>Main</h1>
          <br />
          <h1>Gellery</h1>
          <br />
          <h1>Projects</h1>
          <br />
          <h1>Certification</h1>
          <br />
          <h1>Contacts</h1>
          <br />
        </div>
        <div className="con">
          <h1>
            <b>Contacts</b>
          </h1>
          <div className="k">
            <div>
              {" "}
              <img className="mt-5" src="/images/vector.png" alt="" />{" "}
            </div>
            <div>
              <h1 className="ml-5 mt-5">
                {" "}
                1234 Sample Street <br />
                Austin Texas 78704
              </h1>
            </div>
          </div>
          <div></div>

          <div className="flex mt-16">
            <div>
              <img src="/images/Group.png" alt="Phone" />
            </div>
            <div>
              <h1 className="ml-5">512.333.2222</h1>
            </div>
          </div>

          <div className="flex mt-16">
            <div>
              <img src="/images/loc.png" alt="Email" />
            </div>
            <div>
              <h1 className="ml-5 ">sampleemail@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="mt-14 ml-40">
          <h1>
            <b>Social Media</b>
          </h1>
          <div className="flex gap-10 mt-5">
            <img src="/images/facebook.png" alt=" Facebook" />
            <img src="/images/twitter.png" alt=" Twitter" />
            <img src="/images/Linked.png" alt=" Linkedin" />
            <img src="/images/pini.png" alt=" pini" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
