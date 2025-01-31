import { twMerge } from "tailwind-merge";

interface IRadioButtonProps {
  selectedIndex: number;
  index: number;
  name: string;
  label?: string;
  handleChange: (n: number) => void;
  className?: string;
}
const RadioButton: React.FC<IRadioButtonProps> = ({
  selectedIndex,
  index,
  name,
  label,
  handleChange,
  className,
}) => {
  return (
    <label
      key={index}
      htmlFor={`${name}-${index}`}
      className={twMerge(
        `group-check-boxes-container relative cursor-pointer md:max-w-[11.25rem] w-full flex items-center gap-2.5 bg-gray-scale-15 border-0.5 ${
          selectedIndex === index ? "border-primary" : "border-gray-scale-20"
        } rounded-lg p-2.5 min-h-[7.8125rem] h-auto`,
        className
      )}
    >
      <input
        type="radio"
        checked={selectedIndex === index}
        name={name}
        id={`${name}-${index}`}
        onChange={() => handleChange(index)}
        className="hidden absolute opacity-0 cursor-pointer"
      />
      <span className="custom-radio-checked"></span>
      <span className="text-body-medium-regular text-gray-scale-60 pl-10">
        {label}
      </span>
    </label>
  );
};

export default RadioButton;
