import React from "react";
import { Button, Divider, Input } from "react-daisyui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const formDefaults = {
	email: "",
	password: "",
};

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: formDefaults,
	});
	const { t } = useTranslation();

	const onSubmit = () => {};

	const getError = (field: keyof typeof formDefaults) => (
		<p className="text-error">
			{errors[field]?.type === "required"
				? t("login.required", { field })
				: errors[field]?.message}
		</p>
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1 className="text-xl font-semibold w-full text-center">
				{t("login.title")}
			</h1>
			<Divider className="mt-2 mb-4" />
			<div className="flex flex-col gap-2">
				<Input
					placeholder={t("login.fields.email")}
					className="rounded-lg"
					type="email"
					{...register("email", { required: true })}
				/>
				{errors.email && getError("email")}
				<Input
					type="password"
					placeholder={t("login.fields.password")}
					className="rounded-lg"
					{...register("password", { required: true })}
				/>
				{errors.password && <span>{getError("password")}</span>}
				<Button type="submit" className="mt-2 rounded-lg">
					{t("login.submit")}
				</Button>
				<Link to="/auth/register" className="w-full text-center">
					<small>{t("login.register")}</small>
				</Link>
			</div>
		</form>
	);
}
