import LoginCard from "@/components/login";
import loginBg from "@/assets/login-bg.jpg";

export default function Login() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={loginBg} className="absolute inset-0 object-cover -z-30 w-full h-full" />
      <div className="absolute h-full w-full bg-gradient-to-t from-card via-primary/20 to-card -z-10 inset-0"></div>
      <LoginCard />
    </div>
  );
}
