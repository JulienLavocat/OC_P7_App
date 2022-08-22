import { Button, Divider, Input } from "react-daisyui";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../../features/userSlice";
import { AuthService } from "../../../services/authService";

const formDefaults = {
	email: "",
	password: "",
};

type FormInputProps = {
	field: keyof typeof formDefaults;
	type?: HTMLInputElement["type"];
	min?: number;
	max?: number;
};

export default function Login() {
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

	const onSubmit = async (values: typeof formDefaults) => {
		const response = await AuthService.login(values);
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
				{t("login.title")}
			</h1>
			<Divider className="mt-2 mb-4" />
			<div className="flex flex-col gap-2 items-center">
				<FormInput field="email" type="email" />
				<FormInput field="password" type="password" min={6} />

				<Button type="submit" className="mt-2 rounded-lg">
					{t("login.submit")}
				</Button>
				<Link to="/auth/register" className="hover:underline">
					<small>{t("login.register")}</small>
				</Link>
			</div>
		</form>
	);
}
