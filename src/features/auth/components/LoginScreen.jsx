import AuthBackground from "./AuthBackground.jsx";
import AuthCard from "./AuthCard.jsx";
import AuthInput from "./AuthInput.jsx";
import LoginButton from "./LoginButton.jsx";
import Logo from "./Logo.jsx";

export default function LoginScreen({ onLogin }) {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-auth-bg @container">
      <AuthBackground />
      <AuthCard />
      <Logo />
      <AuthInput id="username" type="text" placeholder="USERNAME" variant="username" />
      <AuthInput id="password" type="password" placeholder="PASSWORD" variant="password" />
      <LoginButton onClick={onLogin}>로그인</LoginButton>
    </div>
  );
}
