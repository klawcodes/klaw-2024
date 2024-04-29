import { useTranslations } from "next-intl";
import HomePage from "../../../components/homepage/page";

export default function Home() {
  const t = useTranslations("Index");
  return (
      <HomePage />
  );
}
