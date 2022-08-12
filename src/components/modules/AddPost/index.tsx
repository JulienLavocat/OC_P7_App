import { useState } from "react";
import { Avatar, Button, Textarea } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { FaPaperPlane, FaRegFileImage } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

export default function AddPost() {
	const { t } = useTranslation();
	const user = useSelector((state: RootState) => state.user);
	const [textContent, setTextContent] = useState("");
	return (
		<div className="flex flex-col bg-base-100 rounded-lg shadow p-2">
			<div className="flex flex-row gap-2">
				<Avatar size="sm" src={user?.image} shape="circle" />
				<Textarea
					className="flex-grow rounded-2xl"
					placeholder={t("addpost.placeholder")}
					onChange={(e) => setTextContent(e.target.value)}
				/>
			</div>
			<div className="flex justify-between items-center mt-2 ml-2">
				<Button color="ghost" shape="circle" size="sm">
					<FaRegFileImage size={22} />
				</Button>
				<Button
					color="primary"
					className="rounded-lg gap-2"
					size="sm"
					disabled={textContent.length < 1}>
					{t("addpost.send")}
					<FaPaperPlane />
				</Button>
			</div>
		</div>
	);
}
