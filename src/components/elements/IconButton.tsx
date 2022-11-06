import React from "react";
import { Button } from "react-daisyui";

export default function IconButton({
	className,
	icon,
	disabled,
	onClick,
}: {
	className?: string;
	icon: JSX.Element;
	disabled?: boolean;
	onClick?: () => void;
}) {
	return (
		<Button
			color="ghost"
			shape="circle"
			className={"gap-1 w-fit items-center p-1 " + className}
			size="sm"
			disabled={disabled}
			onClick={onClick}
		>
			{icon}
		</Button>
	);
}
