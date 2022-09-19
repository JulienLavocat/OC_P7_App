import { useState } from "react";
import { Avatar, Button } from "react-daisyui";
import { FaEllipsisH, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Post as PostModel } from "../../../api";
import { PostService } from "../../../services/postService";
import formatDate from "../../../utils/formatDate";
import TooltipButton from "../../elements/TooltipButton";

export type PostProps = PostModel & {
	hasManagementPermission: boolean;
	onEdit: () => void;
	userName: string;
	userImage: string;
	hasLiked: boolean;
};

export default function Post({
	content,
	createdAt,
	userName,
	userImage,
	userDisplayId,
	likes,
	hasLiked,
	image,
	id,
	onEdit,
	hasManagementPermission,
}: PostProps) {
	const [isLiked, setIsLiked] = useState(hasLiked);
	const [likesCount, setLikesCount] = useState(likes);

	const like = () => {
		setIsLiked(true);
		setLikesCount(likes + 1);
		PostService.like(id);
	};

	const dislike = () => {
		setIsLiked(false);
		setLikesCount(likesCount - 1);
		PostService.dislike(id);
	};

	const onClick = () => {
		(isLiked ? dislike : like)();
	};

	return (
		<div className="bg-white rounded-lg shadow p-3">
			<div className="flex gap-4">
				<Avatar src={userImage} shape="circle" size="xs" />
				<div className="flex-grow">
					<p>
						<span className="font-semibold">{userName}</span>
						{` @${userDisplayId} · ${formatDate(
							new Date(createdAt)
						)}`}
					</p>
					<p className="break-words mt-2">{content}</p>
					{image && (
						<img
							src={`http://localhost:3000/${image}`}
							className="max-w-full rounded-lg mt-2 shadow object-cover max-h-[680px]"
						/>
					)}
				</div>

				{hasManagementPermission && (
					<Button
						className="min-h-0 h-fit w-fit p-1"
						color="ghost"
						shape="circle"
						onClick={onEdit}>
						<FaEllipsisH size={22} className="opacity-70" />
					</Button>
				)}
			</div>
			<div className="flex items-center gap-2 justify-end mt-1">
				<TooltipButton
					content={likesCount}
					icon={
						isLiked ? (
							<FaThumbsUp className="text-primary" size={16} />
						) : (
							<FaRegThumbsUp size={16} />
						)
					}
					text="post.action.like"
					onClick={onClick}
				/>
			</div>
		</div>
	);
}
