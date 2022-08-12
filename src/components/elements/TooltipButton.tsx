import React from "react";
import { Button, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";

export default function TooltipButton({
	text,
	content,
	icon,
	onClick,
}: {
	text: string;
	content: string | number;
	icon: JSX.Element;
	onClick?: () => void;
}) {
	const { t } = useTranslation();

	return (
		<Tooltip message={t(text)}>
			<Button
				color="ghost"
				shape="circle"
				className="gap-1 w-fit items-center p-1"
				size="sm"
				onClick={onClick}>
				{icon} {content}
			</Button>
		</Tooltip>
	);
}
