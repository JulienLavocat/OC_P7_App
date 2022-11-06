import React, { FormEvent, useState } from "react";
import { Button, Textarea } from "react-daisyui";
import { useTranslation } from "react-i18next";
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
	const [textContent, setTextContent] = useState(post.content);
	const { t } = useTranslation();

	const submitEditedPost = async (e: FormEvent) => {
		e.preventDefault();

		setIsEditing(true);
		await PostService.update(post.id, { content: textContent });
		setIsEditing(false);
		refreshFeed && refreshFeed();
	};
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
				<div className="w-full mb-8">
					<Textarea
						value={textContent}
						className="w-full rounded-2xl"
						placeholder={t("addpost.placeholder")}
						onChange={(e) => setTextContent(e.target.value)}
					/>
				</div>
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
						{t("editpost.delete")}
					</Button>
					<Button
						color="primary"
						startIcon={<FaPen />}
						variant="outline"
						type="submit"
						className="rounded-lg"
						disabled={buttonsDisabled}
						loading={isEditing}
					>
						{t("editpost.edit")}
					</Button>
				</div>
			</form>
		</div>
	);
}
