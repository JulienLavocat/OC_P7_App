import { DateTime } from "luxon";
import React from "react";
import { PostModel } from "../../../models/post";
import Post from "../Post";

const posts: PostModel[] = [
	{
		postId: "1",
		content: "Hello there",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: true,
		hasLiked: true,
	},
	{
		postId: "2",
		content: "General Kenobi",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().minus({ seconds: 30 }).toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: false,
		hasLiked: true,
	},
	{
		postId: "3",
		content: "You are a bold one",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().minus({ minutes: 34 }).toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: false,
		hasLiked: true,
	},
	{
		postId: "4",
		content:
			"This a very long text that took a not-so very long time to write. It could have taken wayyyyy less time if I had used a lorem ipsum but where is the fun in that ?",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().minus({ hours: 2 }).toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: false,
		hasLiked: true,
	},
	{
		postId: "5",
		content: "Hello there",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().minus({ days: 2 }).toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: false,
		hasLiked: true,
	},
	{
		postId: "6",
		content: "Hello there",
		userName: "julienlavocat",
		userImage:
			"https://avatars.dicebear.com/api/initials/julienlavocat.svg",
		createdAt: DateTime.utc().minus({ year: 2 }).toJSDate(),
		dislikes: 0,
		likes: 0,
		hasDisliked: false,
		hasLiked: true,
	},
	// {
	// 	content: "Hello there",
	// 	userName: "julienlavocat",
	// 	createdAt: new Date(),
	// },
];

export default function Feed() {
	return (
		<div className="flex flex-col mt-4 gap-2">
			{posts.map((e) => (
				<Post {...e} key={e.postId} />
			))}
		</div>
	);
}
