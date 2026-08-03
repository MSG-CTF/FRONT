export default function LoginButton({ onClick, children = "로그인" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={children}
      className="absolute left-login-button-left top-login-button-top w-login-button h-login-button bg-no-repeat p-0 border-0 cursor-pointer bg-[length:100%_100%]"
      style={{ backgroundImage: "url(/assets/login-button.png)" }}
    >
      <span className="sr-only">{children}</span>
    </button>
  );
}
