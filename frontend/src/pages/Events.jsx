import React from "react";

const events = [
	{
		id: 1,
		name: "Annual Meetup",
		date: "2024-12-01",
		location: "New York",
		description:
			"Join us for our annual meetup to connect, network, and learn from industry experts. Don’t miss the keynotes and fun activities!",
		image: "https://www.corpnet.com/wp-content/uploads/2018/12/annual-meeting-1-800x533-1.jpg",
	},
	{
		id: 2,
		name: "Webinar: Career Growth",
		date: "2024-11-25",
		location: "Online",
		description:
			"Discover strategies for accelerating your career growth in a fast-changing world. Free registration!",
		image: "https://elearningindustry.com/wp-content/uploads/2015/10/top-7-webinar-tips-successful-webinar-host.jpg",
	},
	{
		id: 3,
		name: "Hackathon 2024",
		date: "2024-12-15",
		location: "San Francisco",
		description:
			"Showcase your skills and collaborate with other tech enthusiasts in our weekend hackathon.",
		image: "https://engineersplanet.com/wp-content/uploads/2024/08/hackathon-doodle-hand-drawing-team-programmers-web-developers-managers-graphic-designers-deve_88138-1348.jpg",
	},
];

const Events = () => {
	return (
		<section className="bg-gray-100 py-16 mt-16">
			<div className="container mx-auto">
				<h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
					🎉 Upcoming Events
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{events.map((event) => (
						<div
							key={event.id}
							className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2 hover:shadow-2xl"
						>
							<img
								src={event.image}
								alt={event.name}
								className="w-full h-72 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-2xl font-semibold text-gray-800 mb-2">
									{event.name}
								</h3>
								<p className="text-gray-600 mb-4">
									📅 <strong>Date:</strong>{" "}
									{new Date(event.date).toDateString()}
								</p>
								<p className="text-gray-600 mb-4">
									📍 <strong>Location:</strong>{" "}
									{event.location}
								</p>
								<p className="text-gray-700 mb-4">
									{event.description}
								</p>
								<button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
									Learn More
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Events;
