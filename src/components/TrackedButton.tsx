'use client';

import { useAnalytics } from '@/hooks/useAnalytics';

interface TrackedButtonProps {
  buttonId: string;
  locale?: string;
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function TrackedButton({ 
  buttonId, 
  locale, 
  className, 
  children, 
  onClick 
}: TrackedButtonProps) {
  const { logButtonClick } = useAnalytics();

  const handleClick = () => {
    logButtonClick(buttonId, locale);
    if (onClick) onClick();
  };

  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}