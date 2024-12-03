import React from "react";

const About = () => {
	return (
		<section className="bg-white py-16 mt-16">
			<div className="container mx-auto p-6 text-lg">
				<h2 className="text-4xl font-bold text-center mb-6 text-gray-700">
					About Us
				</h2>
				<p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
					Welcome to{" "}
					<span className="font-bold text-blue-600">
						AlumniConnect
					</span>{" "}
					— a dedicated platform crafted for the proud alumni of{" "}
					<span className="font-semibold">Techno Main Salt Lake</span>
					. Established in 2001, our college has been a beacon of
					academic excellence, producing industry leaders, innovators,
					and changemakers. AlumniConnect serves as a bridge to
					reconnect with your roots, nurture lifelong relationships,
					and explore unparalleled opportunities for growth and
					collaboration.
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					<div className="bg-white shadow-md p-4 rounded-lg text-center hover:scale-105">
						<h3 className="text-xl font-bold mb-2 text-blue-500">
							Reunite
						</h3>
						<p className="text-gray-500">
							Rekindle old friendships and reconnect with
							batchmates through our intuitive networking tools.
						</p>
					</div>
					<div className="bg-white shadow-md p-4 rounded-lg text-center hover:scale-105">
						<h3 className="text-xl font-bold mb-2 text-blue-500">
							Celebrate
						</h3>
						<p className="text-gray-500">
							Celebrate the achievements of our alumni community
							with featured success stories and milestone events.
						</p>
					</div>
					<div className="bg-white shadow-md p-4 rounded-lg text-center hover:scale-105">
						<h3 className="text-xl font-bold mb-2 text-blue-500">
							Grow
						</h3>
						<p className="text-gray-500">
							Leverage our mentorship programs, industry insights,
							and exclusive career resources to achieve greater
							heights.
						</p>
					</div>
				</div>
				<p className="text-gray-600 text-center mt-8 max-w-3xl mx-auto">
					As part of the Techno Main Salt Lake legacy, our alumni have
					excelled across industries worldwide. Whether you are
					reconnecting after years or looking to contribute to our
					community, AlumniConnect is here to inspire, empower, and
					unite.
				</p>
				<div className="mt-8 flex justify-center">
					<a
						href="/join"
						className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700"
					>
						Join AlumniConnect Today
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
