type TitleProps = {
  title: string;
  subtitle: string;
};

function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <h1 className="text-6xl font-bold text-yellow-500">{title}</h1>
      <p className="text-xl font-semibold text-yellow-500">{subtitle}</p>
    </div>
  );
}

export default Title;
