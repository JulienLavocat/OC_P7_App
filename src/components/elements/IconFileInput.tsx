import React, { useRef } from "react";
import { Button } from "react-daisyui";
import { FaRegFileImage } from "react-icons/fa";

export default function IconFileInput({
	onChange,
	disabled,
}: {
	onChange: (file: File | null) => void;
	disabled?: boolean;
}) {
	const inputRef = useRef<HTMLInputElement | null>(null);

	const onAddImageClicked = () => {
		inputRef.current?.click();
	};

	return (
		<>
			<Button
				color="ghost"
				shape="circle"
				size="sm"
				type="button"
				disabled={disabled}
				onClick={onAddImageClicked}>
				<FaRegFileImage size={22} />
			</Button>
			<input
				ref={inputRef}
				type="file"
				disabled={disabled}
				style={{ display: "none" }}
				onChange={(e) =>
					onChange((e.target?.files && e.target?.files[0]) || null)
				}
			/>
		</>
	);
}
