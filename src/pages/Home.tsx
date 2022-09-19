import React, { useRef } from "react";
import AddPost from "../components/modules/AddPost";
import Feed from "../components/modules/Feed";

export default function Home() {
	const feedRef = useRef<React.ElementRef<typeof Feed>>(null);

	return (
		<div className="max-h-screen overflow-y-scroll ">
			<div className="p-2 mx-auto md:max-w-4xl">
				<AddPost onAdd={() => feedRef.current?.refreshFeed()} />
				<Feed ref={feedRef} />
			</div>
		</div>
	);
}
