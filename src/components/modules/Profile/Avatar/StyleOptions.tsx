import React from "react";
import StyleOptionPicker from "./StyleOptionPicker";

export default function StyleOptions({
	styleOptions,
	optionsFilter,
	onChange,
	className,
}: {
	className?: string;
	styleOptions: Record<string, any>;
	optionsFilter: (e: string, i: number) => void;
	onChange: (name: string, option: string) => void;
}) {
	return (
		<div className={`w-full flex flex-col items-center ${className}`}>
			{Object.keys(styleOptions)
				.filter(optionsFilter)
				.map((optionName, i) => (
					<StyleOptionPicker
						key={optionName + i}
						name={optionName}
						options={styleOptions[optionName]}
						onPick={(e) => onChange(optionName, e)}
					/>
				))}
		</div>
	);
}
