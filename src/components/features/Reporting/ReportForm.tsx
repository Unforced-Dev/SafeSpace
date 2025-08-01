import React, { useState } from 'react';
import { Input, Textarea, Select } from '../../common/Form';
import { Button, Card } from '../../common';

interface ReportFormData {
  propertyAddress: string;
  issueType: string;
  description: string;
  dateOccurred: string;
  landlordNotified: boolean;
  dateNotified: string;
  anonymous: boolean;
  contactEmail?: string;
}

export const ReportForm: React.FC = () => {
  const [formData, setFormData] = useState<ReportFormData>({
    propertyAddress: '',
    issueType: '',
    description: '',
    dateOccurred: '',
    landlordNotified: false,
    dateNotified: '',
    anonymous: true,
    contactEmail: '',
  });

  const [photos, setPhotos] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const issueTypes = [
    { value: 'mold', label: 'Mold/Moisture' },
    { value: 'heating', label: 'Heating/Cooling' },
    { value: 'plumbing', label: 'Plumbing/Water' },
    { value: 'electrical', label: 'Electrical' },
    { value: 'structural', label: 'Structural Damage' },
    { value: 'pests', label: 'Pest Infestation' },
    { value: 'carbon-monoxide', label: 'Carbon Monoxide/Gas' },
    { value: 'other', label: 'Other Health/Safety Issue' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In real app, would submit to API
    console.log('Submitting report:', formData, photos);
    setSubmitted(true);
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newPhotos = Array.from(e.target.files);
      setPhotos([...photos, ...newPhotos]);
    }
  };

  if (submitted) {
    return (
      <Card className="text-center py-12">
        <div className="space-y-4">
          <div className="mx-auto h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Report Submitted Successfully</h2>
          <p className="text-gray-600">
            Your report has been submitted {formData.anonymous ? 'anonymously' : ''} and will be reviewed.
          </p>
          <p className="text-sm text-gray-500">
            Reference ID: #{Date.now().toString().slice(-8)}
          </p>
          <Button onClick={() => {
            setSubmitted(false);
            setFormData({
              propertyAddress: '',
              issueType: '',
              description: '',
              dateOccurred: '',
              landlordNotified: false,
              dateNotified: '',
              anonymous: true,
              contactEmail: '',
            });
            setPhotos([]);
          }}>
            Submit Another Report
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
        <Input
          label="Property Address"
          type="text"
          required
          value={formData.propertyAddress}
          onChange={(e) => setFormData({ ...formData, propertyAddress: e.target.value })}
          placeholder="1234 Pearl St, Boulder, CO 80302"
        />
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Issue Details</h3>
        <div className="space-y-4">
          <Select
            label="Type of Issue"
            required
            options={issueTypes}
            value={formData.issueType}
            onChange={(e) => setFormData({ ...formData, issueType: e.target.value })}
          />

          <Textarea
            label="Description"
            required
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please describe the health/safety issue in detail..."
            rows={6}
          />

          <Input
            label="When did this issue occur/start?"
            type="date"
            required
            value={formData.dateOccurred}
            onChange={(e) => setFormData({ ...formData, dateOccurred: e.target.value })}
          />

          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="landlord-notified"
                checked={formData.landlordNotified}
                onChange={(e) => setFormData({ ...formData, landlordNotified: e.target.checked })}
                className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="landlord-notified" className="text-sm text-gray-700">
                I have already notified my landlord about this issue
              </label>
            </div>

            {formData.landlordNotified && (
              <Input
                label="Date landlord was notified"
                type="date"
                value={formData.dateNotified}
                onChange={(e) => setFormData({ ...formData, dateNotified: e.target.value })}
              />
            )}
          </div>
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo Evidence</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="mb-2 text-sm text-gray-500">
                  <span className="font-semibold">Click to upload</span> or drag and drop
                </p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB each</p>
              </div>
              <input
                type="file"
                className="hidden"
                multiple
                accept="image/*"
                onChange={handlePhotoChange}
              />
            </label>
          </div>

          {photos.length > 0 && (
            <div className="grid grid-cols-2 gap-2">
              {photos.map((photo, index) => (
                <div key={index} className="relative">
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Evidence ${index + 1}`}
                    className="w-full h-32 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                    className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Submission Options</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="anonymous"
              checked={formData.anonymous}
              onChange={(e) => setFormData({ ...formData, anonymous: e.target.checked })}
              className="h-4 w-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
            />
            <label htmlFor="anonymous" className="text-sm text-gray-700">
              Submit this report anonymously
            </label>
          </div>

          {!formData.anonymous && (
            <Input
              label="Contact Email"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              placeholder="your@email.com"
              helperText="We'll only use this to follow up on your report"
            />
          )}
        </div>
      </Card>

      <div className="flex justify-end gap-3">
        <Button type="button" variant="ghost">
          Save Draft
        </Button>
        <Button type="submit">
          Submit Report
        </Button>
      </div>
    </form>
  );
};