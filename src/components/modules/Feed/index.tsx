import { DateTime } from "luxon";
import React, { useEffect, useState } from "react";
import { Post } from "../../../api";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { PostModel } from "../../../models/post";
import { PostService } from "../../../services/postService";
import PostComponent from "../Post";

// const posts: PostModel[] = [
// 	{
// 		postId: "1",
// 		content: "Hello there",
// 		userName: "Obi-Wan Kenobi",
// 		userId: "spacejesus",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/obiwankenobi.svg",
// 		createdAt: DateTime.utc().toJSDate(),
// 		likes: 1,
// 		hasLiked: true,
// 	},
// 	{
// 		postId: "2",
// 		content: "General Kenobi !",
// 		userName: "General Grievous (Qymaen jai Sheelal)",
// 		userId: "ggrievous",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/ggrievous.svg",
// 		createdAt: DateTime.utc().minus({ seconds: 30 }).toJSDate(),
// 		likes: 1,
// 		hasLiked: true,
// 		image: `https://loremflickr.com/514/685/all?cacheBust=${Math.random()}`,
// 	},
// 	{
// 		postId: "3",
// 		content: "You are a bold one",
// 		userName: "General Grievous (Qymaen jai Sheelal)",
// 		userId: "ggrievous",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/ggrievous.svg",
// 		createdAt: DateTime.utc().minus({ minutes: 34 }).toJSDate(),
// 		likes: 1,
// 		hasLiked: true,
// 		image: `https://loremflickr.com/640/360/all?cacheBust=${Math.random()}`,
// 	},
// 	{
// 		postId: "4",
// 		content:
// 			"This a very long text that took a not-so very long time to write. It could have taken wayyyyy less time if I had used a lorem ipsum but where is the fun in that ?",
// 		userName: "Julien Lavocat",
// 		userId: "julienlavocat",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/julienlavocat.svg",
// 		createdAt: DateTime.utc().minus({ hours: 2 }).toJSDate(),
// 		likes: 0,
// 		hasLiked: false,
// 	},
// 	{
// 		postId: "5",
// 		content: "Anybody knows where the fuck Lord Vader went ?!",
// 		userName: "Darth Sidious (Sheev Palpatine)",
// 		userId: "imthesenate",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/imthesenate.svg",
// 		createdAt: DateTime.utc().minus({ days: 2 }).toJSDate(),
// 		likes: 0,
// 		hasLiked: false,
// 		image: `https://loremflickr.com/1280/720/all?cacheBust=${Math.random()}`,
// 	},
// 	{
// 		postId: "6",
// 		content: "Hello there",
// 		userName: "Julien Lavocat",
// 		userId: "julienlavocat",
// 		userImage:
// 			"https://dicebear.julienlavocat.me/api/initials/julienlavocat.svg",
// 		createdAt: DateTime.utc().minus({ year: 2 }).toJSDate(),
// 		likes: 0,
// 		hasLiked: false,
// 		image: `https://loremflickr.com/1920/1080/all?cacheBust=${Math.random()}`,
// 	},
// ];

export default function Feed() {
	const user = useAppSelector((state) => state.user?.user);
	const [feed, setFeed] = useState<Post[]>([]);

	const onEdit = () => {};
	const onLike = (postId: string) => {};

	useEffect(() => {
		PostService.getFeed().then(setFeed);
		return () => {};
	}, []);

	return (
		<div className="flex flex-col mt-4 gap-2">
			{feed.map((e) => (
				<PostComponent
					{...e}
					key={e.id}
					onEdit={onEdit}
					onLike={onLike}
					hasManagementPermission={
						user?.role === "admin" || user?.id === e.userId
					}
				/>
			))}
		</div>
	);
}
