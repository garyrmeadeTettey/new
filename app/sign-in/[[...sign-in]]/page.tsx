import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white dark:bg-gray-950 p-4 rounded-lg shadow-lg">
        <SignIn/>
      </div>
    </div>
  );
}
