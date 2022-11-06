import React from "react";
import { Post } from "../../../api";

export interface EditPostProps {
	post: Post;
}

export default function EditPost({ post }: EditPostProps) {
	return <div>EditPost</div>;
}
