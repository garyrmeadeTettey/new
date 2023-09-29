import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { LogIn } from 'lucide-react';
import { auth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'BetterMan | Welcome',
  description: 'Quiz yourself on anything!',
};

export default async function Home() {
  const { userId } = await auth();
  const isAuth = !!userId;
  
  return (
    <div className="flex items-center justify-center h-screen"> {/* Center the content */}
      <Card className="w-[300px] text-center">
        <CardHeader>
          <CardTitle className="text-center py-4">Welcome to Better-Man 🔥!</CardTitle>
          <CardDescription>
            Empower Your Learning - Welcome to Better-Man 🔥! Your AI-driven ally for academic excellence. Harness the power of knowledge, resilience, and cutting-edge technology on your educational journey.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isAuth ? (
            <Link href="/dash">
              <Button> {/* Style the button */}
                Go to Dashboard page
              </Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button> {/* Style the button */}
                Get Started! <LogIn className="w-4 h-4 ml-2 inline" /> {/* Add spacing and style */}
              </Button>
            </Link>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
