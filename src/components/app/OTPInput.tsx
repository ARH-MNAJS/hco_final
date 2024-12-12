import React, { useRef } from "react";

type OTPInputProps = {
  value: string[]; // Array of strings to represent OTP values
  valueLength: number; // Number of OTP input fields
  onChange: (value: string, index: number) => void; // Callback for input change
};

const OTPInput: React.FC<OTPInputProps> = ({ value, valueLength, onChange }) => {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const { value } = e.target;

    if (!isNaN(Number(value)) && value.length <= 1) {
      onChange(value, idx);
      if (value && idx < valueLength - 1) {
        inputs.current[idx + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !value[idx] && idx > 0) {
      inputs.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="flex gap-2">
      {Array.from({ length: valueLength }, (_, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          value={value[i] || ""}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          className="w-12 h-12 text-center border-2 border-black rounded focus:outline-none"
          type="text"
          maxLength={1}
        />
      ))}
    </div>
  );
};

export default OTPInput;
