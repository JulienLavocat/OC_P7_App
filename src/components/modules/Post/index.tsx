import React from "react";
import { Avatar, Button, Tooltip } from "react-daisyui";
import { PostModel } from "../../../models/post";
import formatDate from "../../../utils/formatDate";
import {
	FaThumbsUp,
	FaThumbsDown,
	FaRegThumbsUp,
	FaRegThumbsDown,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import TooltipButton from "../../elements/TooltipButton";

export default function Post({
	content,
	createdAt,
	userName,
	userImage,
	dislikes,
	likes,
	hasLiked,
	hasDisliked,
}: PostModel) {
	const { t } = useTranslation();

	return (
		<div className="bg-white rounded-lg shadow p-3">
			<div className="flex gap-4">
				<Avatar src={userImage} shape="circle" size="xs" />
				<div>
					<p>
						<span className="font-semibold">{userName}</span> ·{" "}
						{formatDate(createdAt)}
					</p>
					<p className="break-words">{content}</p>
				</div>
			</div>
			<div className="flex items-center gap-2 justify-end mt-1">
				<TooltipButton
					content={likes}
					icon={
						<FaRegThumbsUp
							className={hasLiked ? "text-success" : ""}
							size={16}
						/>
					}
					text="post.action.like"
				/>
				<TooltipButton
					content={dislikes}
					icon={
						<FaRegThumbsDown
							className={hasDisliked ? "text-error" : ""}
							size={16}
						/>
					}
					text="post.action.dislike"
				/>
			</div>
		</div>
	);
}
