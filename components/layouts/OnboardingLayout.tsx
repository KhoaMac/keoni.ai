export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col max-w-3xl px-5 md:px-11 2xl:max-w-[48rem] mx-auto mt-[1.8125rem] mb-[3.6875rem]">
      {children}
    </div>
  );
}
