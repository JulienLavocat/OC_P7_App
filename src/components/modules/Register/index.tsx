import React from "react";
import { Button, Divider, Input } from "react-daisyui";
import { SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../../features/userSlice";
import { AuthService } from "../../../services/authService";

const formDefaults = {
	email: "",
	password: "",
	firstName: "",
	lastName: "",
};

type FormInputProps = {
	field: keyof typeof formDefaults;
	type?: HTMLInputElement["type"];
	min?: number;
	max?: number;
};

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: formDefaults,
	});
	const { t } = useTranslation();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = async (data: typeof formDefaults) => {
		const response = await AuthService.register({
			...data,
			displayName: `${data.firstName} ${data.lastName}`,
		});

		dispatch(setUser(response));
		navigate("/");
	};

	const FormInput = ({ field, type = "text", max, min }: FormInputProps) => (
		<>
			<Input
				placeholder={t("register.fields." + field)}
				className="rounded-lg w-full"
				type={type}
				disabled={isSubmitting}
				minLength={min}
				maxLength={max}
				required={true}
				{...register(field, { required: true })}
			/>
			{errors[field] && (
				<p className="text-error">
					{errors[field]?.type === "required"
						? t("login.required", {
								field: t("register.fields." + field),
						  })
						: errors[field]?.message}
				</p>
			)}
		</>
	);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<h1 className="text-xl font-semibold w-full text-center">
				{t("register.title")}
			</h1>
			<Divider className="mt-2 mb-4" />
			<div className="flex flex-col gap-2 items-center">
				<FormInput field="email" type="email" />
				<FormInput field="password" type="password" min={6} />
				<FormInput field="firstName" min={2} max={32} />
				<FormInput field="lastName" min={2} max={32} />
				<Button
					type="submit"
					className="mt-2 rounded-lg"
					disabled={isSubmitting}
				>
					{t("register.submit")}
				</Button>
				<Link to="/auth/login" className="hover:underline">
					<small>{t("register.register")}</small>
				</Link>
			</div>
		</form>
	);
}
