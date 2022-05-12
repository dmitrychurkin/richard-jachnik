import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="Richard Jachnik personal website" />
        <meta name="keywords" content="Richard Jachnik" />
        <title>Richard Jachnik</title>
        <link href="/bootstrap.min.css" rel="stylesheet" />
        <link href="/magnific-popup.min.css" rel="stylesheet" />
        <link href="/owl.carousel.min.css" rel="stylesheet" />
        <link href="/owl.theme.default.min.css" rel="stylesheet" />
        <link href="/theme.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css" />
        <link href="/all.css" rel="stylesheet" />
        <script type="text/javascript" charset="UTF-8" src="/common.js" />
        <script type="text/javascript" charset="UTF-8" src="/util.js" />
        <script type="text/javascript" charset="UTF-8" src="/map.js" />
        <script type="text/javascript" charset="UTF-8" src="/marker.js" />
        <script type="text/javascript" charset="UTF-8" src="/onion.js" />
        <script type="text/javascript" charset="UTF-8" src="/controls.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div class="icon-menu-wrapper">
        <div class="icon-menu icon-lg">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link active" href="#home">
                <i class="bi bi-house-door"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">
                <i class="bi bi-person"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio">
                <i class="bi bi-briefcase"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                <i class="bi bi-person-square"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#clients">
                <i class="bi bi-people"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blog">
                <i class="bi bi-pencil"></i>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                <i class="bi bi-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="scrolltotop">
        <a href="#home"><i class="bi bi-arrow-up"></i></a>
      </div>


      <div class="main-wrapper">
        <div id="home" class="section-fullscreen text-center">
          <div class="container">
            <div class="scroll-text">
              <h1 class="display-1 fw-bold text-dark-01">Call me Mr. Richard</h1>
            </div>
            <div class="middle-box">
              <div class="hero-avatar">
                <img src="/Richard Jachnik.jpg" alt="" data-rjs="2" />
                <h1 class="display-3 fw-bold fancy-text mt-4">Hello, I'm Mr. Richard</h1>
              </div>
            </div>

            <div class="bottom-box pb-4 pb-lg-5">
              <a class="button-text" href="#about">scroll down</a>
            </div>

          </div>

        </div>
        <div id="contact" class="section-sm pt-0">
          <div class="container">
            {/* <div class="row gy-5">
						<div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
							<h1 class="fw-bold">Get In Touch</h1>
						</div>
						<div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<div class="contact-form">
								<form method="post" id="contactform" class="style-2">
									<div class="row gx-4 gy-0">
										<div class="col-12 col-sm-6">
											<input type="text" id="name" name="name" placeholder="Name" required="" />
										</div>
										<div class="col-12 col-sm-6">
											<input type="email" id="email" name="email" placeholder="E-Mail" required="" />
										</div>
									</div>
									<input type="text" id="subject" name="subject" placeholder="Subject" required="" />
									<textarea name="message" id="message" placeholder="Message"></textarea>
									<button class="button-fancy" type="submit">Send Message</button>
								</form>
								<div class="submit-result">
									<span id="success">Thank you! Your Message has been sent.</span>
									<span id="error">Something went wrong, Please try again!</span>
								</div>
							</div>
						</div>
					</div> */}
            <div class="row g-4 g-lg-5 text-lg-center mt-5 icon-3xl">
              <div class="col-6 col-sm-6 col-lg-3">
                <i class="bi bi-telephone text-dark"></i>
                <h5 class="fw-medium mt-2 mb-0">Phone</h5>
                <p>+44 7442 634551</p>
              </div>
              <div class="col-6 col-sm-6 col-lg-3">
                <i class="bi bi-envelope text-dark"></i>
                <h5 class="fw-medium mt-2 mb-0">Email</h5>
                <p>rpjmud@gmail.com</p>
              </div>
              <div class="col-6 col-sm-6 col-lg-3">
                <i class="bi bi-whatsapp text-dark"></i>
                <h5 class="fw-medium mt-2 mb-0">Whatsapp</h5>
                <p>+44 7442 634551</p>
              </div>
              <div class="col-6 col-sm-6 col-lg-3">
                <i class="bi bi-geo-alt text-dark"></i>
                <h5 class="fw-medium mt-2 mb-0">Address</h5>
                <p>2 Heathfield Park, Newtonhill AB39 3RZ</p>
              </div>
            </div>
          </div>
        </div>
        <div class="section-sm bg-black">
          <div class="container text-center">
            <ul class="list-inline-sm mb-3">
              <li>
                <a class="button-circle button-circle-sm button-circle-white-2" href="https://odno.flatheme.net/#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>
              <li>
                <a class="button-circle button-circle-sm button-circle-white-2" href="https://odno.flatheme.net/#">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a class="button-circle button-circle-sm button-circle-white-2" href="https://odno.flatheme.net/#">
                  <i class="bi bi-pinterest"></i>
                </a>
              </li>
              <li>
                <a class="button-circle button-circle-sm button-circle-white-2" href="https://odno.flatheme.net/#">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>
            </ul>
            <p>© 2022 DC, All Rights Reserved.</p>
          </div>
        </div>
      </div>
      <script src="/js" />
      <script src="/jquery.min.js" />
      <script src="/plugins.js" />
      <script src="/functions.min.js" /><div class="preloader"><div><svg class="loader-circular" viewBox="25 25 50 50"><circle class="loader-path" cx="50" cy="50" r="20"></circle></svg></div></div>
      <script src="/cookie-consent.min.js" />
    </>
  )
}
