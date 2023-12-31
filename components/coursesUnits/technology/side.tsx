'use client'
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useMemo } from "react";
import {
  ArticleIcon,
  CollapsIcon,
  HomeIcon,
  LogoIcon,
  UsersIcon,
  VideosIcon,
} from "../icons";
import { Button } from "@/components/ui/button";

interface MenuItem {
  id: number;
  label: string;
  unitlabel: string;
  link: string;
}

const menuItems: MenuItem[] = [
  { id: 1, label: "UNIT 1", unitlabel: "High School Chemistry", link: "/courses/units/math/algebra" },
  { id: 2, label: "UNIT 2", unitlabel: "High School Physics", link: "/courses/science/Physics" },
  { id: 3, label: "UNIT 3", unitlabel: "Advanced Programme Chemistry", link: "../LearningUnits/posts" },
  { id: 4, label: "UNIT 4", unitlabel: "Advanced Programme Physics", link: "../LearningUnits/tutorial" },
  { id: 5, label: "UNIT 5", unitlabel: "University Foundation Physics", link: "../LearningUnits/tutorial" },
  { id: 6, label: "UNIT 6", unitlabel: "UNiversity Fondation Chemistry", link: "../LearningUnits/tutorial" },
];

const SideTech: React.FC = () => {
  
  const [toggleCollapse, setToggleCollapse] = useState(false);
  const [isCollapsible, setIsCollapsible] = useState(false);

  const router = useRouter();

  const activeMenu = useMemo(
    () => menuItems.find((menu) => menu.link === router.pathname),
    [router.pathname]
  );

  const wrapperClasses = classNames(
    "h-screen px-4 pt-8 pb-4 bg-light flex justify-between flex-col",
    {
      "w-80": !toggleCollapse,
      "w-20": toggleCollapse,
    }
  );

  const collapseIconClasses = classNames(
    "p-4 rounded bg-light-lighter absolute right-0",
    {
      "rotate-180": toggleCollapse,
    }
  );

  const getNavItemClasses = (menu: MenuItem) => {
    
    return classNames(
      "flex items-center cursor-pointer hover:bg-light rounded w-full overflow-hidden whitespace-nowrap",
      {
        "bg-light-lighter": activeMenu && activeMenu.id === menu.id,
      }
    );
  };

  const onMouseOver = () => {
    setIsCollapsible(!isCollapsible);
  };

  const handleSidebarToggle = () => {
    setToggleCollapse(!toggleCollapse);
  };

  return (
    <div
      className={wrapperClasses}
      onMouseEnter={onMouseOver}
      onMouseLeave={onMouseOver}
      style={{ transition: "width 300ms cubic-bezier(0.2, 0, 0, 1) 0s" }}
    >
      <div className="flex flex-col">
        <div className="flex items-center justify-between relative">
          {!toggleCollapse && (
            <div className="flex items-center gap-4">
              <LogoIcon />
              <h1 className="text-xl">
                <span
                  className={classNames("mt-2 font-medium text-text", {
                    hidden: toggleCollapse,
                  })}
                >
                  Science Pathway
                </span>
              </h1>
            </div>
          )}
          {isCollapsible && (
            <Button
              className={collapseIconClasses}
              onClick={handleSidebarToggle}
            >
              <CollapsIcon />
            </Button>
          )}
        </div>

        <div className="flex flex-col items-start mt-10">
          {menuItems.map((menu) => {
            const classes = getNavItemClasses(menu);
            return (
              // eslint-disable-next-line react/jsx-key
              <div className={classes} key={menu.id}>
                <Link href={menu.link}
                  className={classNames(
                    "flex py-4 px-3 items-center w-full h-full",
                    "hover:bg-blue-50" // Add this class for blue hover effect
                  )}>
                  
                    {!toggleCollapse && (
                      <span
                        className={classNames(
                          "text-md font-medium text-text-light"
                        )}
                      >
                        {menu.label}<br></br>
                        <b>{menu.unitlabel}</b><br></br>
                      </span>
                    )}
                
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <br></br>
      <div className={`${toggleCollapse ? '' : 'border border-blue'} shadow-md p-1`}>
        <div className={`${getNavItemClasses({} as MenuItem)} px-3 py-4 relative`}>
          <br />
          <div style={{ width: "2.5rem" }}>
            <ArticleIcon />
          </div>
          {!toggleCollapse && (
            <Link href="/dashboard">
            <span className="text-md font-bold text-text-light" style={{ color: "black" }}>
              COURSE ASSESSMENT <br />
              <p className="text-blue-500 text-base">
                START QUIZ <span className="ml-2">&#10148;</span>
              </p>
            </span></Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideTech;
