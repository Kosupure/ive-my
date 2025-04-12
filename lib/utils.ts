import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format } from 'date-fns'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getOrdinalSuffix(day: number) {
  if (day > 3 && day < 21) return 'th'; // Special case for numbers 11-13
  const lastDigit = day % 10;
  if (lastDigit === 1) return 'st';
  if (lastDigit === 2) return 'nd';
  if (lastDigit === 3) return 'rd';
  return 'th';
}

export function formatDateWithSuffix(date: Date) {
  const day = format(date, 'd');
  const month = format(date, 'MMM');
  const year = format(date, 'y');
  const suffix = getOrdinalSuffix(parseInt(day));
  return `${day}${suffix} ${month} ${year}`;
}

export function formatTime(date: Date) {
  const time = format(date, 'hh:mm a');
  return time;
}