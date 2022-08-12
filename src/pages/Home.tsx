import React from "react";
import AddPost from "../components/modules/AddPost";
import Feed from "../components/modules/Feed";
import Navbar from "../components/modules/Navbar";

export default function Home() {
	return (
		<div className="grid grid-rows-[1fr_3.5rem] h-screen max-h-screen bg-base-200">
			<div className="max-h-screen overflow-y-scroll ">
				<div className="p-2 mx-auto md:max-w-4xl">
					<AddPost />
					<Feed />
				</div>
			</div>
			<Navbar />
		</div>
	);
}
