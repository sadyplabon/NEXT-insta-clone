import { getProviders, signIn } from "next-auth/react";

export default function signin({ providers }) {
  return (
    <>
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex"
          src="/hero.png"
          alt="instagram"
        />
        <div className="">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="">
              <img src="/instagram3.png" alt="instagram" />
              <p>This is a demo app. I can build one for you if you want...</p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
