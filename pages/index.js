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

		<script src="/js" />
		<script src="/jquery.min.js" />
		<script src="/plugins.js" />
		<script src="/functions.min.js" /><div class="preloader"><div><svg class="loader-circular" viewBox="25 25 50 50"><circle class="loader-path" cx="50" cy="50" r="20"></circle></svg></div></div>
		<script src="/cookie-consent.min.js" />
    </div>
  </>
  )
}
