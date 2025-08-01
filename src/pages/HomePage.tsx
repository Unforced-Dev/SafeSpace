import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card } from '../components/common';

export const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Emergency Health Guide',
      description: 'Get immediate guidance for health emergencies with 24/72-hour response requirements',
      link: '/emergency-guide',
      urgent: true,
    },
    {
      title: 'Property Lookup',
      description: 'Research property health history and read community experiences',
      link: '/property-lookup',
    },
    {
      title: 'Report Health Issues',
      description: 'Submit anonymous health violations with photo evidence',
      link: '/report',
    },
    {
      title: 'Track Landlord Response',
      description: 'Monitor compliance with legal deadlines and document responses',
      link: '/tracker',
    },
    {
      title: 'Know Your Rights',
      description: 'Learn about Boulder County\'s 2024 health and safety laws',
      link: '/know-your-rights',
    },
  ];

  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Protecting Boulder Renters' Health & Safety
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Know your rights, report health violations, and hold landlords accountable with Boulder County's enhanced 2024 health laws.
        </p>
      </section>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Link key={feature.link} to={feature.link}>
            <Card hover className="h-full">
              <h3 className={`text-xl font-semibold ${feature.urgent ? 'text-alert-urgent' : 'text-gray-900'}`}>
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              {feature.urgent && (
                <span className="inline-block mt-3 text-sm font-medium text-alert-urgent">
                  For urgent health issues →
                </span>
              )}
            </Card>
          </Link>
        ))}
      </div>

      <section className="bg-primary-50 rounded-lg p-6 text-center">
        <h2 className="text-2xl font-bold text-primary-900">
          Facing a Health Emergency?
        </h2>
        <p className="mt-2 text-primary-700">
          Some issues require landlord response within 24 hours by law.
        </p>
        <Link to="/emergency-guide">
          <Button variant="danger" size="lg" className="mt-4">
            Get Emergency Guidance Now
          </Button>
        </Link>
      </section>
    </div>
  );
};