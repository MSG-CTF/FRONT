import LoginScreen from "../components/LoginScreen.jsx";

export default function LoginPage() {
  const handleLogin = () => {
    // TODO: features/auth/api.js의 login()과 연결 — 요청/응답 필드가
    // 아직 정해지지 않아 우선 자리만 잡아둠 (Claude.md 참고)
    console.log("login click");
  };

  return <LoginScreen onLogin={handleLogin} />;
}
