import React, { useState } from "react";
import { Button } from "react-daisyui";
import { FaPen, FaTrash } from "react-icons/fa";
import { Post } from "../../../api";
import { PostService } from "../../../services/postService";

export interface EditPostProps {
	post: Post;
	refreshFeed?: () => unknown;
}

export default function EditPost({ post, refreshFeed }: EditPostProps) {
	const [isDeleting, setIsDeleting] = useState(false);
	const [isEditing, setIsEditing] = useState(false);

	const submitEditedPost = () => {};
	const removePost = async () => {
		setIsDeleting(true);
		await PostService.delete(post.id);
		setIsDeleting(false);
		refreshFeed && refreshFeed();
	};

	const buttonsDisabled = isDeleting || isEditing;

	return (
		<div>
			<form onSubmit={submitEditedPost}>
				<div></div>
				<div className="flex justify-between">
					<Button
						color="error"
						startIcon={<FaTrash />}
						variant="outline"
						type="button"
						className="rounded-lg"
						disabled={buttonsDisabled}
						onClick={removePost}
						loading={isDeleting}
					>
						Delete post
					</Button>
					<Button
						color="primary"
						startIcon={<FaPen />}
						variant="outline"
						type="button"
						className="rounded-lg"
						disabled={buttonsDisabled}
						onClick={removePost}
						loading={isEditing}
					>
						Edit post
					</Button>
				</div>
			</form>
		</div>
	);
}
