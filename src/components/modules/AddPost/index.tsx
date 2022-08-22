import { useEffect, useState } from "react";
import { Avatar, Button, Textarea } from "react-daisyui";
import { useTranslation } from "react-i18next";
import {
	FaCross,
	FaPaperPlane,
	FaRegFileImage,
	FaTrash,
	FaTrashAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import IconButton from "../../elements/IconButton";
import IconFileInput from "../../elements/IconFileInput";

export default function AddPost() {
	const { t } = useTranslation();
	const image = useSelector((state: RootState) => state.user?.user.image);
	const [textContent, setTextContent] = useState("");
	const [selectedImage, setSelectedImage] = useState<File | null>(null);
	const [selectedImagePreview, setSelectedImagePreview] = useState<
		string | null
	>(null);

	const onImageSelected = (file: File | null) => {
		setSelectedImage(file);

		// Allow file to be previewed in an <img>
		selectedImagePreview && URL.revokeObjectURL(selectedImagePreview);
		setSelectedImagePreview(
			selectedImage ? URL.createObjectURL(selectedImage) : null
		);
	};

	return (
		<div className="flex flex-col bg-base-100 rounded-lg shadow p-2">
			<div className="flex flex-row gap-2">
				<Avatar size="sm" src={image} shape="circle" />
				<Textarea
					className="flex-grow rounded-2xl"
					placeholder={t("addpost.placeholder")}
					onChange={(e) => setTextContent(e.target.value)}
				/>
			</div>
			{selectedImagePreview && (
				<div className="self-center mt-2 relative group">
					<div className="flex items-center justify-center h-full w-full invisible absolute hover:bg-black hover:bg-opacity-40 group-hover:visible">
						<IconButton
							icon={
								<FaTrashAlt
									className="text-red-500"
									size={24}
									onClick={() => setSelectedImage(null)}
								/>
							}
						/>
					</div>
					<img
						src={selectedImagePreview}
						className="max-h-64 w-min -z-10"
					/>
				</div>
			)}
			<div className="flex justify-between items-center mt-2 ml-2">
				<IconFileInput onChange={onImageSelected} />
				<Button
					color="primary"
					className="rounded-lg gap-2"
					size="sm"
					disabled={!selectedImage && textContent.length < 1}>
					{t("addpost.send")}
					<FaPaperPlane />
				</Button>
			</div>
		</div>
	);
}
