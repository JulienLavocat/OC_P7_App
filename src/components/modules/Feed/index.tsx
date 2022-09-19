import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Post } from "../../../api";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { PostService } from "../../../services/postService";
import PostComponent from "../Post";

export type FeedHandle = { refreshFeed: () => void };

const Feed = forwardRef<FeedHandle>(({}, ref) => {
	const user = useAppSelector((state) => state.user?.user);
	const [feed, setFeed] = useState<Post[]>([]);

	const onEdit = () => {};

	const refreshFeed = () => {
		PostService.getFeed().then(setFeed);
	};

	useEffect(() => {
		refreshFeed();
		return () => {};
	}, []);

	useImperativeHandle(ref, () => ({
		refreshFeed() {
			refreshFeed();
		},
	}));

	return (
		<div className="flex flex-col mt-4 gap-2">
			{feed.map((e) => (
				<PostComponent
					{...e}
					key={e.id}
					onEdit={onEdit}
					hasManagementPermission={
						user?.role === "admin" || user?.id === e.userId
					}
				/>
			))}
		</div>
	);
});

export default Feed;
