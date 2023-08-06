type TitleProps = {
  title: string;
  subtitle: string;
};

function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="flex flex-col gap-2 justify-center items-center text-center">
      <h1 className="sm:text-6xl text-4xl font-bold text-yellow-500">{title}</h1>
      <p className="sm:text-xl text-md font-semibold text-yellow-500">{subtitle}</p>
    </div>
  );
}

export default Title;
