import { t } from "i18next";
import { DateTime, Duration } from "luxon";

export default function formatDate(date: Date) {
	const luxonDate = DateTime.fromJSDate(date);

	const diff = luxonDate
		.diffNow(["seconds", "minutes", "hours", "days", "years"])
		.negate() // Negate the result in order to have more readable conditions when selecting the format
		.toObject();

	if (diff.years && diff.years > 1)
		return `${luxonDate.toFormat("d MMM, yyyy")}`;

	if (diff.days && diff.days > 1) return `${luxonDate.toFormat("d MMM")}`;

	if (diff.hours && diff.hours < 24) return `${Math.abs(diff.hours)}h`;

	if (diff.minutes && diff.minutes < 60) return `${Math.abs(diff.minutes)}min`;

	if (diff.seconds && diff.seconds > 10)
		return `${Math.round(Math.abs(diff.seconds))}s`;

	if (diff.seconds && diff.seconds < 10) return t("post.date.now");
}
