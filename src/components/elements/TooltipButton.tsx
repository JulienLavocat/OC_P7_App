import React from "react";
import { Button, Tooltip } from "react-daisyui";
import { useTranslation } from "react-i18next";
import { IconType } from "react-icons";

export default function TooltipButton({
	text,
	content,
	icon,
}: {
	text: string;
	content: string | number;
	icon: JSX.Element;
}) {
	const { t } = useTranslation();

	return (
		<Tooltip message={t(text)}>
			<Button
				color="ghost"
				shape="circle"
				className="gap-1 w-fit items-center"
				size="sm">
				{icon} {content}
			</Button>
		</Tooltip>
	);
}
