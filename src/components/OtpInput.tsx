import ReactOtpInput, { type OTPInputProps } from "react-otp-input";

export type OtpInputProps = Omit<OTPInputProps, "renderInput">;

export const OtpInput: React.FC<OtpInputProps> = (props) => {
  return (
    <ReactOtpInput
      {...props}
      renderSeparator={<span className="w-[12px]"></span>}
      containerStyle={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      renderInput={(props) => (
        <input
          {...props}
          className="h-[48px] w-[46px] rounded-md border-[1px] border-solid border-stroke px-[18px] py-2 text-[24px]"
        />
      )}
    />
  );
};
