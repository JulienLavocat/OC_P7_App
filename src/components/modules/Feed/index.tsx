import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Modal } from "react-daisyui";
import { Post } from "../../../api";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { PostService } from "../../../services/postService";
import EditPost from "../EditPost";
import PostComponent from "../Post";

export type FeedHandle = { refreshFeed: () => void };

const Feed = forwardRef<FeedHandle>(({}, ref) => {
	const user = useAppSelector((state) => state.user?.user);
	const [feed, setFeed] = useState<Post[]>([]);
	const [editPost, setEditPost] = useState<Post | null>(null);

	const onEdit = (post: Post) => {
		setEditPost(post);
	};

	const refreshFeed = () => {
		PostService.getFeed().then(setFeed);
	};

	useEffect(() => {
		refreshFeed();
		return () => {};
	}, []);

	// Allows to trigger a refresh when adding a Post (AddPost component)
	useImperativeHandle(ref, () => ({
		refreshFeed() {
			refreshFeed();
		},
	}));

	return (
		<>
			<div className="flex flex-col mt-4 gap-2">
				{feed.map((e) => (
					<PostComponent
						post={e}
						key={e.id}
						onEdit={onEdit}
						hasManagementPermission={
							user?.role === "admin" || user?.id === e.userId
						}
					/>
				))}
			</div>
			<Modal open={!!editPost} onClickBackdrop={() => setEditPost(null)}>
				{editPost && (
					<EditPost
						post={editPost}
						refreshFeed={() => {
							refreshFeed();
							setEditPost(null);
						}}
					/>
				)}
			</Modal>
		</>
	);
});

export default Feed;
