import React, { useState } from 'react';
import { Button, Card } from '../../common';

interface DecisionNode {
  id: string;
  question: string;
  description?: string;
  options?: {
    label: string;
    nextId: string | null;
    urgency?: '24hr' | '72hr' | 'standard';
  }[];
  result?: {
    urgency: '24hr' | '72hr' | 'standard';
    title: string;
    description: string;
    steps: string[];
    legalNotice?: string;
  };
}

const decisionTree: Record<string, DecisionNode> = {
  start: {
    id: 'start',
    question: 'What type of health/safety issue are you experiencing?',
    options: [
      { label: 'No heat in winter', nextId: 'no-heat' },
      { label: 'Water/plumbing issues', nextId: 'water-issues' },
      { label: 'Mold or moisture', nextId: 'mold' },
      { label: 'Carbon monoxide/gas leak', nextId: null, urgency: '24hr' },
      { label: 'Electrical hazards', nextId: 'electrical' },
      { label: 'Structural damage', nextId: 'structural' },
      { label: 'Pest infestation', nextId: 'pests' },
      { label: 'Other health/safety issue', nextId: 'other' },
    ],
  },
  'no-heat': {
    id: 'no-heat',
    question: 'Is the outside temperature below 40°F?',
    options: [
      { label: 'Yes', nextId: 'heat-emergency', urgency: '24hr' },
      { label: 'No', nextId: 'heat-standard', urgency: '72hr' },
    ],
  },
  'heat-emergency': {
    id: 'heat-emergency',
    question: '',
    result: {
      urgency: '24hr',
      title: '24-Hour Emergency: No Heat in Winter',
      description: 'Lack of heat when temperatures are below 40°F is a 24-hour emergency under Boulder law.',
      steps: [
        'Document the temperature (take photos of thermometer)',
        'Notify your landlord immediately in writing',
        'Keep all communication records',
        'If not fixed within 24 hours, you may have the right to repair and deduct or withhold rent',
        'Contact Boulder County Health Department if landlord does not respond',
      ],
      legalNotice: 'Per Colorado Revised Statutes § 38-12-505, lack of heat in winter is considered an emergency habitability issue requiring response within 24 hours.',
    },
  },
  'water-issues': {
    id: 'water-issues',
    question: 'What type of water issue?',
    options: [
      { label: 'No running water', nextId: 'water-emergency', urgency: '24hr' },
      { label: 'No hot water', nextId: 'hot-water' },
      { label: 'Sewage backup', nextId: 'sewage-emergency', urgency: '24hr' },
      { label: 'Minor leak', nextId: 'water-standard', urgency: 'standard' },
    ],
  },
  'water-emergency': {
    id: 'water-emergency',
    question: '',
    result: {
      urgency: '24hr',
      title: '24-Hour Emergency: No Running Water',
      description: 'Complete lack of running water is a 24-hour emergency requiring immediate landlord action.',
      steps: [
        'Document the issue with photos/videos',
        'Notify landlord immediately in writing',
        'Request immediate repair',
        'Keep records of all communications',
        'Contact health department if not resolved in 24 hours',
      ],
    },
  },
  'mold': {
    id: 'mold',
    question: 'How extensive is the mold?',
    description: 'Mold coverage is measured in square feet of affected area',
    options: [
      { label: 'More than 10 square feet', nextId: 'mold-extensive', urgency: '72hr' },
      { label: 'Less than 10 square feet', nextId: 'mold-minor', urgency: 'standard' },
      { label: 'Black mold (any amount)', nextId: 'mold-black', urgency: '72hr' },
    ],
  },
  'mold-extensive': {
    id: 'mold-extensive',
    question: '',
    result: {
      urgency: '72hr',
      title: '72-Hour Response Required: Extensive Mold',
      description: 'Mold coverage over 10 square feet requires response within 72 hours under Boulder regulations.',
      steps: [
        'Take photos of all affected areas',
        'Measure and document the size of mold areas',
        'Send written notice to landlord with photos',
        'Request professional mold remediation',
        'Keep windows open and avoid the area if possible',
        'Document any health symptoms',
      ],
      legalNotice: 'Boulder County regulations require landlords to address mold issues over 10 sq ft within 72 hours of notification.',
    },
  },
};

export const DecisionTree: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState('start');
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = decisionTree[currentNodeId];

  const handleOptionClick = (nextId: string | null, urgency?: string) => {
    if (nextId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(nextId);
    } else if (urgency === '24hr') {
      // Handle immediate emergency
      setHistory([...history, currentNodeId]);
      setCurrentNodeId('immediate-emergency');
    }
  };

  const handleBack = () => {
    if (history.length > 0) {
      const previousNodeId = history[history.length - 1];
      setHistory(history.slice(0, -1));
      setCurrentNodeId(previousNodeId);
    }
  };

  const reset = () => {
    setCurrentNodeId('start');
    setHistory([]);
  };

  if (currentNode?.result) {
    const { result } = currentNode;
    const urgencyColors = {
      '24hr': 'bg-red-50 border-red-200 text-red-900',
      '72hr': 'bg-orange-50 border-orange-200 text-orange-900',
      'standard': 'bg-blue-50 border-blue-200 text-blue-900',
    };

    return (
      <div className="space-y-6">
        <Card className={`border-2 ${urgencyColors[result.urgency]}`}>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium
                ${result.urgency === '24hr' ? 'bg-red-100 text-red-800' : ''}
                ${result.urgency === '72hr' ? 'bg-orange-100 text-orange-800' : ''}
                ${result.urgency === 'standard' ? 'bg-blue-100 text-blue-800' : ''}
              `}>
                {result.urgency === '24hr' && '24-Hour Emergency'}
                {result.urgency === '72hr' && '72-Hour Response Required'}
                {result.urgency === 'standard' && 'Standard Timeline'}
              </span>
            </div>

            <h2 className="text-2xl font-bold">{result.title}</h2>
            <p className="text-lg">{result.description}</p>

            <div className="space-y-2">
              <h3 className="font-semibold">Steps to Take:</h3>
              <ol className="list-decimal list-inside space-y-1">
                {result.steps.map((step, index) => (
                  <li key={index} className="text-sm">{step}</li>
                ))}
              </ol>
            </div>

            {result.legalNotice && (
              <div className="rounded-md bg-gray-100 p-3">
                <p className="text-sm font-medium text-gray-700">Legal Notice:</p>
                <p className="text-sm text-gray-600">{result.legalNotice}</p>
              </div>
            )}
          </div>
        </Card>

        <div className="flex gap-3">
          <Button onClick={handleBack} variant="secondary">
            Back
          </Button>
          <Button onClick={reset}>
            Start Over
          </Button>
          <Button variant="primary">
            Generate Legal Notice
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">{currentNode.question}</h2>
          {currentNode.description && (
            <p className="text-gray-600">{currentNode.description}</p>
          )}
          
          <div className="space-y-2">
            {currentNode.options?.map((option) => (
              <button
                key={option.label}
                onClick={() => handleOptionClick(option.nextId, option.urgency)}
                className={`w-full text-left rounded-lg border p-4 transition-colors hover:bg-gray-50
                  ${option.urgency === '24hr' ? 'border-red-300 hover:bg-red-50' : 'border-gray-300'}
                `}
              >
                <span className="font-medium">{option.label}</span>
                {option.urgency === '24hr' && (
                  <span className="ml-2 text-sm text-red-600">(24hr Emergency)</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </Card>

      {history.length > 0 && (
        <Button onClick={handleBack} variant="ghost">
          ← Back to previous question
        </Button>
      )}
    </div>
  );
};