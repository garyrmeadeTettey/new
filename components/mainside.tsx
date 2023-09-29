import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from 'next/link';
import { Card } from "@/components/ui/card";
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
// import { Link } from "lucide-react"

export function Mainside({ className, playlists }: SidebarProps) {
    return (
      <div className={cn("pb-12 w-1/4", className)}>
        <div className="space-y-10 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Discover
            </h2>
            <div className="space-y-1">
            <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-400 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 mb-2 rounded-md border-white">
    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Users
      </AccordionTrigger>
    <AccordionContent>
        {/* <Link href="/courses/personalDev/stress">
          <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Electromagnotism</button>
        </Link> */}
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>



    </AccordionContent>
    {/* <AccordionContent>
      <Link href="/courses/personalDev/eq">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Chemistry</button>
      </Link>
    </AccordionContent> */}
    {/* <AccordionContent>
      <Link href="/courses/personalDev/critical">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 p-3 ml-10 border-b-2 border-white">Physics</button>
      </Link>
    </AccordionContent> */}
    {/* <AccordionContent>
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Optics</button>
    </Link>
    </AccordionContent> */}
  </AccordionItem>
</Accordion>


                {/* <Link href="/tasks">
              <Button variant="secondary" className="w-full justify-start text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="10 8 16 12 10 16 10 8" />
                </svg>
                Users
              </Button>
                </Link> */}
                {/* <Link href="/courses">
              <Button variant="ghost" className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Courses
              </Button>
                </Link> */}
                <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">
    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <rect width="7" height="7" x="3" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="3" rx="1" />
                  <rect width="7" height="7" x="14" y="14" rx="1" />
                  <rect width="7" height="7" x="3" y="14" rx="1" />
                </svg>
                Courses
      </AccordionTrigger>
    <AccordionContent>
        {/* <Link href="/courses/personalDev/stress">
          <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Electromagnotism</button>
        </Link> */}
        <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">Science</AccordionTrigger>
    <AccordionContent  className="pr-3">
        <Link href="/courses/personalDev/stress">
          <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 mr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
        </Link>
    </AccordionContent>
    <AccordionContent  className="pr-3">
      <Link href="/courses/personalDev/eq">
        <button className="text-md w-full text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 mr-3 border-b-3 rounded-md border-white">
        Access User Tablesjvuhv,ihvk

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent className="pr-3">
      <Link href="/courses/personalDev/critical">
        <button className="text-md w-full text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 mr-3 border-b-3 rounded-md border-white">
        Access User Tablesjvuhv,ihvk

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent  className="pr-3">
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 mr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
    </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">Technology</AccordionTrigger>
    <AccordionContent>
        <Link href="/courses/personalDev/stress">
          <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
        </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/eq">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/critical">
       <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
    </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">Engineering</AccordionTrigger>
    <AccordionContent>
        <Link href="/courses/personalDev/stress">
          <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
        </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/eq">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/critical">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
    </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className="w-full text-xl text-center hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 border-white">Mathematics</AccordionTrigger>
    <AccordionContent>
        <Link href="/courses/personalDev/stress">
          <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
        </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/eq">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/critical">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
      </Link>
    </AccordionContent>
    <AccordionContent>
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-md text-center hover:bg-gray-300 dark:hover:bg-gray-900 py-3 pl-3 ml-3 pr-3 border-b-3 rounded-md border-white">
        Access User Tables

        </button>
    </Link>
    </AccordionContent>
  </AccordionItem>
</Accordion>
    </AccordionContent>
    {/* <AccordionContent>
      <Link href="/courses/personalDev/eq">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Chemistry</button>
      </Link>
    </AccordionContent> */}
    {/* <AccordionContent>
      <Link href="/courses/personalDev/critical">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 p-3 ml-10 border-b-2 border-white">Physics</button>
      </Link>
    </AccordionContent> */}
    {/* <AccordionContent>
      <Link href="/courses/personalDev/mindful">
        <button className="w-full text-xl hover:bg-gray-300-600 dark:hover:bg-gray-900 py-3 ml-10 border-b-2 border-white">Optics</button>
    </Link>
    </AccordionContent> */}
  </AccordionItem>
</Accordion>

            </div>
          </div>
          {/* <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
              Library
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M21 15V6" />
                  <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M12 12H3" />
                  <path d="M16 6H3" />
                  <path d="M12 18H3" />
                </svg>
                Playlists
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="8" cy="18" r="4" />
                  <path d="M12 18V2l7 4" />
                </svg>
                Songs
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Made for You
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
                Artists
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <path d="m16 6 4 14" />
                  <path d="M12 6v14" />
                  <path d="M8 8v12" />
                  <path d="M4 4v16" />
                </svg>
                Albums
              </Button>
            </div>
          </div> */}
          <div className="py-2">
            {/* <h2 className="relative px-7 text-lg font-semibold tracking-tight">
              Playlists
            </h2>
            <ScrollArea className="h-[300px] px-1">
              <div className="space-y-1 p-2">
                {playlists?.map((playlist, i) => (
                  <Button
                    key={`${playlist}-${i}`}
                    variant="ghost"
                    className="w-full justify-start font-normal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M21 15V6" />
                      <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M12 12H3" />
                      <path d="M16 6H3" />
                      <path d="M12 18H3" />
                    </svg>
                    {playlist}
                  </Button>
                ))}
              </div>
            </ScrollArea> */}
          </div>
        </div>
      </div>
    )
  }