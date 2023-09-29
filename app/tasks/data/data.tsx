import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
  
  export const labels = [
    {
      value: "Technology",
      label: "Bug",
    },
    {
      value: "Mathematics",
      label: "Feature",
    },
    {
      value: "Science",
      label: "Documentation",
    },
  ]
  
  export const statuses = [
    {
      value: "Science",
      label: "Science",
      icon: CircleIcon,
    },
    {
      value: "Technology",
      label: "Technology",
      icon: StopwatchIcon,
    },
    {
      value: "Engineering",
      label: "Engineering",
      icon: QuestionMarkCircledIcon,
    },
    {
      value: "Mathematics",
      label: "Mathematics",
      icon: CheckCircledIcon,
    },
    {
      value: "Personal Development",
      label: "Personal Development",
      icon: CrossCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]