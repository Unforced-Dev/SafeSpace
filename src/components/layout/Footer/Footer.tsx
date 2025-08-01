import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Emergency Contacts</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:911" className="text-sm text-gray-600 hover:text-gray-900">
                  911 - Emergency
                </a>
              </li>
              <li>
                <a href="tel:3034413460" className="text-sm text-gray-600 hover:text-gray-900">
                  Boulder County Health - (303) 441-3460
                </a>
              </li>
              <li>
                <a href="tel:3034427060" className="text-sm text-gray-600 hover:text-gray-900">
                  EPRAS Mediation - (303) 442-7060
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Resources</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Boulder Tenant Rights
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  Legal Aid Foundation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-gray-900">
                  2024 Health Laws
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900">About SafeSpace</h3>
            <p className="mt-4 text-sm text-gray-600">
              Empowering Boulder County renters with health and safety law guidance and transparent landlord accountability.
            </p>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-center text-xs text-gray-500">
            © 2024 SafeSpace Boulder. All rights reserved. | 
            <a href="#" className="ml-1 hover:text-gray-700">Privacy Policy</a> | 
            <a href="#" className="ml-1 hover:text-gray-700">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};