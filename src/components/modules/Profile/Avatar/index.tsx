import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Select } from "react-daisyui";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAppSelector } from "../../../../hooks/useAppDispatch";
import StyleOptionPicker from "./StyleOptionPicker";
import StyleOptions from "./StyleOptions";
import styles from "./styles.json";

export default function Avatar() {
	const user = useAppSelector((s) => s.user);
	const [currentAvatar, setCurrentAvatar] = useState("");
	const [currentStyle, setCurrentStyle] = useState(Object.keys(styles)[0]);
	const [selectedOptions, setselectedOptions] = useState({});

	const styleOptions = (styles as Record<string, any>)[currentStyle];

	useEffect(() => {
		const params = Object.entries(selectedOptions).filter(
			(e) => e[1] !== "none"
		);

		setCurrentAvatar(
			`http://dicebear.julienlavocat.me/api/${currentStyle}/.svg?${new URLSearchParams(
				params as string[][]
			).toString()}&accessoiresProbability=${
				params.find((e) => e[0] === "accessoires") ? 100 : 0
			}`
		);
		return () => {};
	}, [selectedOptions, currentStyle]);

	return (
		<div className="grid grid-cols-3 bg-base-100 rounded-lg shadow">
			<StyleOptions
				optionsFilter={(_, i) => i % 2 === 0}
				styleOptions={styleOptions}
				onChange={(name, option) =>
					setselectedOptions((current) => ({
						...current,
						[name]: option,
					}))
				}
			/>
			<div className="flex flex-col h-full justify-around">
				<img className="w-full" src={currentAvatar || user?.image} />
				<Select
					defaultValue={currentStyle}
					children={Object.keys(styles).map((e) => (
						<option value={e}>{e}</option>
					))}
					onChange={(e) => {
						setCurrentStyle(e as string);
						setselectedOptions({});
					}}
				/>
			</div>
			<StyleOptions
				optionsFilter={(_, i) => i % 2 !== 0}
				styleOptions={styleOptions}
				onChange={(name, option) =>
					setselectedOptions((current) => ({
						...current,
						[name]: option,
					}))
				}
			/>
		</div>
	);
}
