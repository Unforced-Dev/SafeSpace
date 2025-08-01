import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ mobile = false, onNavigate }) => {
  const navItems = [
    { name: 'Emergency Guide', href: '/emergency-guide', urgent: true },
    { name: 'Property Lookup', href: '/property-lookup' },
    { name: 'Report Issue', href: '/report' },
    { name: 'Track Response', href: '/tracker' },
    { name: 'Know Your Rights', href: '/know-your-rights' },
  ];

  const baseClasses = mobile
    ? 'block px-3 py-2 text-base font-medium'
    : 'px-3 py-2 text-sm font-medium';

  return (
    <nav className={mobile ? 'space-y-1' : 'flex space-x-4'}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          onClick={onNavigate}
          className={`
            ${baseClasses}
            ${item.urgent 
              ? 'text-alert-urgent hover:bg-red-50 hover:text-alert-urgent rounded-md' 
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md'
            }
            transition-colors duration-200
          `}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};