import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute mt-4 left-1/2 -translate-x-1/2 ">
      <SignUp 
      appearance={{
        elements: {
          formButtonPrimary:
            "bg-slate-500 hover:bg-slate-400 text-sm normal-case",
        },
      }}
      />
    </div>
  );
}