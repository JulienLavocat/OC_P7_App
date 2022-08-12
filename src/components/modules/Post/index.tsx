import { Avatar, Button } from "react-daisyui";
import { FaEllipsisH, FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { PostModel } from "../../../models/post";
import formatDate from "../../../utils/formatDate";
import TooltipButton from "../../elements/TooltipButton";

export default function Post({
	content,
	createdAt,
	userName,
	userImage,
	likes,
	hasLiked,
	image,
}: PostModel) {
	const onLike = () => {};

	return (
		<div className="bg-white rounded-lg shadow p-3">
			<div className="flex gap-4">
				<Avatar src={userImage} shape="circle" size="xs" />
				<div className="flex-grow">
					<p>
						<span className="font-semibold">{userName}</span>
						{" · " + formatDate(createdAt)}
					</p>
					<p className="break-words mt-2">{content}</p>
					{image && (
						<img
							src={image}
							className="max-w-full rounded-lg mt-2 shadow object-cover max-h-[680px]"
						/>
					)}
				</div>

				<Button
					className="min-h-0 h-fit w-fit p-1"
					color="ghost"
					shape="circle">
					<FaEllipsisH size={22} className="opacity-70" />
				</Button>
			</div>
			<div className="flex items-center gap-2 justify-end mt-1">
				<TooltipButton
					content={likes}
					icon={
						hasLiked ? (
							<FaThumbsUp className="text-primary" size={16} />
						) : (
							<FaRegThumbsUp size={16} />
						)
					}
					text="post.action.like"
					onClick={onLike}
				/>
			</div>
		</div>
	);
}
