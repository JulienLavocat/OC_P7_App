import React from "react";
import { Button } from "react-daisyui";

export default function IconButton({
	className,
	icon,
	onClick,
}: {
	className?: string;
	icon: JSX.Element;
	onClick?: () => void;
}) {
	return (
		<Button
			color="ghost"
			shape="circle"
			className={"gap-1 w-fit items-center p-1 " + className}
			size="sm"
			onClick={onClick}>
			{icon}
		</Button>
	);
}
