import { useGoogleLogin } from "@react-oauth/google";

function CostumGoogleAuth() {
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div>
      <button onClick={() => login()}>Sign in with Google 🚀 </button>
    </div>
  );
}

export default CostumGoogleAuth;
