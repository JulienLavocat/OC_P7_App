import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function StyleOptionPicker({
	name,
	options,
	onPick,
}: {
	name: string;
	options: string[];
	onPick: (option: string) => void;
}) {
	const { t } = useTranslation("translation");
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		onPick(options[currentIndex]);
		return () => {};
	}, [currentIndex]);

	return (
		<div className="flex w-full flex-col border-b p-2">
			<p className="text-center">{t(name)}</p>
			<div className="flex justify-between w-full items-center">
				<div
					className="cursor-pointer hover:bg-neutral rounded-full hover:bg-opacity-30 p-2 select-none"
					onClick={() =>
						setCurrentIndex((c) => (c + 1) % options.length)
					}>
					<FaArrowLeft />
				</div>
				<p>{options[currentIndex]}</p>
				<div
					className="cursor-pointer hover:bg-neutral rounded-full hover:bg-opacity-30 p-1 select-none"
					onClick={() =>
						setCurrentIndex((c) =>
							c <= 0
								? options.length - 1
								: (c - 1) % options.length
						)
					}>
					<FaArrowRight />
				</div>
			</div>
		</div>
	);
}
