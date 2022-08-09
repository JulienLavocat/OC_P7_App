export interface PostModel {
	postId: string;
	userName: string;
	userImage: string;
	createdAt: Date;
	content: string;
	image?: string;
	hasLiked: boolean;
	likes: number;
}
