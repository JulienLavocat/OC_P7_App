export interface PostModel {
	postId: string;
	userName: string;
	userImage: string;
	createdAt: Date;
	content: string;
	image?: string;
	hasLiked: boolean;
	hasDisliked: boolean;
	likes: number;
	dislikes: number;
}
