import { FormEvent, useState } from "react";
import { Avatar, Button, Textarea } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaTrashAlt } from "react-icons/fa";
import { useAppSelector } from "../../../hooks/useAppDispatch";
import { PostService } from "../../../services/postService";
import IconButton from "../../elements/IconButton";
import IconFileInput from "../../elements/IconFileInput";

export default function AddPost({ onAdd }: { onAdd: () => void }) {
	const { t } = useTranslation();
	const image = useAppSelector((state) => state.user?.user.image);
	const [textContent, setTextContent] = useState("");
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [selectedImagePreview, setSelectedImagePreview] = useState<
		string | null
	>(null);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const onImageSelected = (file: File | null) => {
		setSelectedImage(file);

		// Allow file to be previewed in an <img>
		selectedImagePreview && URL.revokeObjectURL(selectedImagePreview);
		setSelectedImagePreview(file ? URL.createObjectURL(file) : null);
	};

	const onSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			await PostService.createPost(textContent, selectedImage || undefined);
			setTextContent("");
			onImageSelected(null);
			onAdd();
		} catch (error) {
			console.error(error);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<form
			className="flex flex-col bg-base-100 rounded-lg shadow p-2"
			onSubmit={onSubmit}
		>
			<div className="flex flex-row gap-2">
				<Avatar size="sm" src={image} shape="circle" />
				<Textarea
					value={textContent}
					className="flex-grow rounded-2xl"
					placeholder={t("addpost.placeholder")}
					onChange={(e) => setTextContent(e.target.value)}
				/>
			</div>
			{selectedImagePreview && (
				<div className="self-center mt-2 relative group">
					<div className="flex items-center justify-center h-full w-full invisible absolute hover:bg-black hover:bg-opacity-40 group-hover:visible">
						<IconButton
							disabled={isSubmitting}
							icon={
								<FaTrashAlt
									className="text-red-500"
									size={24}
									onClick={() => setSelectedImage(null)}
								/>
							}
						/>
					</div>
					<img src={selectedImagePreview} className="max-h-64 w-min -z-10" />
				</div>
			)}
			<div className="flex justify-between items-center mt-2 ml-2">
				<IconFileInput onChange={onImageSelected} disabled={isSubmitting} />
				<Button
					type="submit"
					color="primary"
					className="rounded-lg gap-2"
					size="sm"
					disabled={isSubmitting || (!selectedImage && textContent.length < 1)}
				>
					{t("addpost.send")}
					<FaPaperPlane />
				</Button>
			</div>
		</form>
	);
}
