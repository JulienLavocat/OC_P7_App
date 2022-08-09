import React from "react";
import AddPost from "../components/modules/AddPost";
import Feed from "../components/modules/Feed";

export default function Home() {
	return (
		<div className="h-screen w-screen p-2 bg-base-200 max-w-[100vw] overflow-x-hidden">
			<div className="mx-auto md:max-w-4xl">
				<AddPost />
				<Feed />
			</div>
		</div>
	);
}
