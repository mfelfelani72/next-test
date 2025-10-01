// src/app/[lang]/(auth)/login/page.tsx
import { getDictionary } from "@/dictionaries";
import LoginPageClient from "../../../components/UiLogin";

interface Props {
  params: { lang?: string } | Promise<{ lang?: string }>;
}

export default async function LoginPage({ params }: Props) {
  const resolvedParams = await params;
  const { lang = "en" } = resolvedParams ?? {};

  const dict = await getDictionary(lang);

  return <LoginPageClient dict={dict} lang={lang} />;
}
