import Default from 'layouts/Default';
import Map from 'components/Map';
import Scroller from 'components/Scroller';
import Socials from 'components/Socials';

export default function Home() {
  return (
    <Default>
      <div className="main-wrapper">
        <div className="section-fullscreen text-center">
          <div className="container">
            <div className="scroll-text">
              <h1 className="display-1 fw-bold text-dark-01">Call me Mr. Richard</h1>
            </div>
            <div className="middle-box">
              <div className="hero-avatar">
                <img src="/Richard Jachnik.jpg" alt="" data-rjs="2" />
                <h1 className="display-3 fw-bold fancy-text mt-4">Hello, I'm Mr. Richard</h1>
              </div>
            </div>

            <div className="bottom-box pb-4 pb-lg-5">
              <Scroller
                className='button-text'
                targetId='contact'
              >
                scroll down
              </Scroller>
            </div>
          </div>
        </div>
        <div id="contact" className="section-sm pt-0">
          <div className="container">
            {/* <div className="row gy-5">
						<div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
							<h1 className="fw-bold">Get In Touch</h1>
						</div>
						<div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<div className="contact-form">
								<form method="post" id="contactform" className="style-2">
									<div className="row gx-4 gy-0">
										<div className="col-12 col-sm-6">
											<input type="text" id="name" name="name" placeholder="Name" required="" />
										</div>
										<div className="col-12 col-sm-6">
											<input type="email" id="email" name="email" placeholder="E-Mail" required="" />
										</div>
									</div>
									<input type="text" id="subject" name="subject" placeholder="Subject" required="" />
									<textarea name="message" id="message" placeholder="Message"></textarea>
									<button className="button-fancy" type="submit">Send Message</button>
								</form>
								<div className="submit-result">
									<span id="success">Thank you! Your Message has been sent.</span>
									<span id="error">Something went wrong, Please try again!</span>
								</div>
							</div>
						</div>
					</div> */}
            <div className="row g-4 g-lg-5 text-lg-center mt-5 icon-3xl">
              <div className="col-6 col-sm-6 col-lg-3">
                <i className="bi bi-telephone text-dark"></i>
                <h5 className="fw-medium mt-2 mb-0">Phone</h5>
                <a href='tel:+44 7442 634551'><p>+44 7442 634551</p></a>
              </div>
              <div className="col-6 col-sm-6 col-lg-3">
                <i className="bi bi-envelope text-dark"></i>
                <h5 className="fw-medium mt-2 mb-0">Email</h5>
                <a href='mailto:rpjmud@gmail.com'><p>rpjmud@gmail.com</p></a>
              </div>
              <div className="col-6 col-sm-6 col-lg-3">
                <i className="bi bi-whatsapp text-dark"></i>
                <h5 className="fw-medium mt-2 mb-0">Whatsapp</h5>
                <a href='https://wa.me/447442634551'><p>+44 7442 634551</p></a>
              </div>
              <div className="col-6 col-sm-6 col-lg-3">
                <i className="bi bi-geo-alt text-dark"></i>
                <h5 className="fw-medium mt-2 mb-0">Address</h5>
                <p>2 Heathfield Park, Newtonhill AB39 3RZ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid p-0">
          <Map />
        </div>
        <div className="section-sm bg-black">
          <div className="container text-center">
            <Socials
              className='list-inline-sm mb-3'
              classes={{ link: 'button-circle button-circle-sm button-circle-white-2' }}
              links={[
                { id: 'facebook', href: 'https://www.facebook.com/richard.jachnik' },
                { id: 'twitter', href: 'https://twitter.com/barbatalus' },
                { id: 'linkedin', href: 'https://www.linkedin.com/in/richard-jachnik-8b605b6' }
              ]}
            />
            <p>© 2022, All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </Default>
  )
};
