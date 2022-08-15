import React from "react";
import { Button, Divider, Input } from "react-daisyui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const formDefaults = {
	email: "",
	password: "",
	username: "",
	firstname: "",
	lastname: "",
};

export default function Register() {
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
				{t("register.title")}
			</h1>
			<Divider className="mt-2 mb-4" />
			<div className="flex flex-col gap-2">
				<Input
					placeholder={t("register.fields.email")}
					className="rounded-lg"
					type="email"
					{...register("email", { required: true })}
				/>
				{errors.email && getError("email")}
				<Input
					type="password"
					placeholder={t("register.fields.password")}
					className="rounded-lg"
					{...register("password", { required: true })}
				/>
				{errors.password && <span>{getError("password")}</span>}
				<Input
					placeholder={t("register.fields.username")}
					className="rounded-lg"
					{...register("username", { required: true })}
				/>
				{errors.username && <span>{getError("username")}</span>}
				<Input
					placeholder={t("register.fields.firstname")}
					className="rounded-lg"
					{...register("firstname", { required: true })}
				/>
				{errors.firstname && <span>{getError("firstname")}</span>}
				<Input
					placeholder={t("register.fields.lastname")}
					className="rounded-lg"
					{...register("lastname", { required: true })}
				/>
				{errors.lastname && <span>{getError("lastname")}</span>}
				<Button type="submit" className="mt-2 rounded-lg">
					{t("register.submit")}
				</Button>
				<Link to="/auth/login" className="w-full text-center">
					<small>{t("register.register")}</small>
				</Link>
			</div>
		</form>
	);
}
