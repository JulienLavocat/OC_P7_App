import { current } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { Button, Select, Tabs } from "react-daisyui";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useAppSelector } from "../../../../hooks/useAppDispatch";
import StyleOptionPicker from "./StyleOptionPicker";
import StyleOptions from "./StyleOptions";
import styles from "./styles2.json";

export default function Avatar() {
	const user = useAppSelector((s) => s.user?.user);
	const [currentAvatar, setCurrentAvatar] = useState("");
	const [selectedOptions, setselectedOptions] = useState({});
	const [currentCategory, setCurrentCategory] = useState(
		Object.keys(styles)[0]
	);

	useEffect(() => {
		const params = Object.entries<string>(selectedOptions).filter(
			(e) => e[1] !== "none"
		);

		if (params.find((e) => e[0] === "accessories"))
			params.push(["accessoriesChance", "100"]);

		if (params.find((e) => e[0] === "facialHair"))
			params.push(["facialHairChance", "100"]);

		setCurrentAvatar(
			`http://dicebear.julienlavocat.me/api/avataaars/.svg?${new URLSearchParams(
				params
			).toString()}`
		);
		return () => {};
	}, [selectedOptions]);

	const onSave = () => {};

	return (
		<div className="flex flex-row flex-wrap bg-base-100 rounded-lg shadow justify-center">
			<div className="flex flex-col items-center h-96 justify-around">
				<img
					className="w-full max-w-[20rem]"
					src={currentAvatar || user?.image}
				/>
				<Button className="w-min" onClick={onSave} color="primary">
					Sauvegarder
				</Button>
			</div>
			<div className="border-l w-full sm:w-max">
				<Tabs
					value={currentCategory}
					onChange={setCurrentCategory}
					className="border-b h-10 items-center"
				>
					{Object.keys(styles).map((e) => (
						<Tabs.Tab value={e} key={e} className="flex-grow">
							{e}
						</Tabs.Tab>
					))}
				</Tabs>
				<StyleOptions
					optionsFilter={() => true}
					styleOptions={(styles as any)[currentCategory]}
					onChange={(name, option) =>
						setselectedOptions((current) => ({
							...current,
							[name]: option,
						}))
					}
				/>
			</div>
		</div>
	);

	// return (
	// 	<div className="grid grid-cols-3 bg-base-100 rounded-lg shadow">
	// 		<StyleOptions
	// 			optionsFilter={(_, i) => i % 2 === 0}
	// 			styleOptions={styles}
	// 			onChange={(name, option) =>
	// 				setselectedOptions((current) => ({
	// 					...current,
	// 					[name]: option,
	// 				}))
	// 			}
	// 		/>
	// 		<div className="flex flex-col h-full justify-around">
	// 			<img className="w-full" src={currentAvatar || user?.image} />
	// 		</div>
	// 		<StyleOptions
	// 			optionsFilter={(_, i) => i % 2 !== 0}
	// 			styleOptions={styles}
	// 			onChange={(name, option) =>
	// 				setselectedOptions((current) => ({
	// 					...current,
	// 					[name]: option,
	// 				}))
	// 			}
	// 		/>
	// 	</div>
	// );
}
