const POSITION_CLASSES = {
  username: "left-username-left top-username-top",
  password: "left-password-left top-password-top",
};

export default function AuthInput({ id, type, placeholder, variant }) {
  return (
    <input
      id={id}
      name={id}
      type={type}
      placeholder={placeholder}
      autoComplete={variant === "password" ? "current-password" : "username"}
      className={`absolute ${POSITION_CLASSES[variant]} w-auth-input h-auth-input bg-transparent border-0 outline-none font-auth-label text-auth-label text-auth-text placeholder-auth-text/60 uppercase`}
    />
  );
}
