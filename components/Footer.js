import React from "react";

function Footer() {
	return (
		<div className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600'>
			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'>ABOUT</h5>
				<p>How airbnb works</p>
				<p>Newsroom</p>
				<p>Investors</p>
				<p>Airbnb plus</p>
				<p>Airbnb luxe</p>
			</div>
			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'>COMMUNITY</h5>
				<p>Accessibility</p>
				<p>This is not a real site</p>
				<p>It is just a clone</p>
				<p>Referrals accepted</p>
				<p>Ankush</p>
			</div>
			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'>HOST</h5>
				<p>React</p>
				<p>Presents</p>
				<p>Zero to full stack</p>
				<p>What's up</p>
				<p>Join us</p>
			</div>
			<div className='space-y-4 text-xs text-gray-800'>
				<h5 className='font-bold'>SUPPORT</h5>
				<p>Help center</p>
				<p>Trust & safety</p>
				<p>What about you</p>
				<p>Say Hi</p>
				<p>Fun with us</p>
			</div>
		</div>
	);
}

export default Footer;
