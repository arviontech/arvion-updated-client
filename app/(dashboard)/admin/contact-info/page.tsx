'use client';

import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Save, Edit, Plus } from 'lucide-react';
import { 
  ContactInfo, 
  getContactInfo, 
  createContactInfo, 
  updateContactInfo 
} from '@/services/contactInfo/ContactInfoService';

export default function ContactInfoPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState<Omit<ContactInfo, '_id'>>({
    email: '',
    phone: '',
    address: ''
  });

  // Fetch contact info
  const fetchContactInfo = async () => {
    try {
      const data = await getContactInfo();
      if (data) {
        setContactInfo(data);
        setFormData({
          email: data.email,
          phone: data.phone,
          address: data.address
        });
      }
    } catch (error) {
      console.error('Failed to fetch contact info:', error);
    } finally {
      setLoading(false);
    }
  };

  // Save contact info
  const handleSave = async () => {
    setSaving(true);
    try {
      let result;
      if (contactInfo?._id) {
        result = await updateContactInfo(contactInfo._id, formData);
      } else {
        result = await createContactInfo(formData);
      }
      
      setContactInfo(result);
      setIsEditing(false);
      alert('Contact info saved successfully!');
    } catch (error: any) {
      console.error('Failed to save contact info:', error);
      alert(error.message || 'Failed to save contact info');
    } finally {
      setSaving(false);
    }
  };

  useEffect(() => {
    fetchContactInfo();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contact Information</h1>
          <p className="text-gray-600">Manage your company contact details</p>
        </div>
        
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {contactInfo ? <Edit className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {contactInfo ? 'Edit' : 'Add'} Contact Info
          </button>
        ) : (
          <div className="flex gap-2">
            <button
              onClick={() => {
                setIsEditing(false);
                if (contactInfo) {
                  setFormData({
                    email: contactInfo.email,
                    phone: contactInfo.phone,
                    address: contactInfo.address
                  });
                }
              }}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              <Save className="w-4 h-4" />
              {saving ? 'Saving...' : 'Save'}
            </button>
          </div>
        )}
      </div>

      {/* Contact Info Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        {!isEditing ? (
          // Display Mode
          <div className="space-y-6">
            {contactInfo ? (
              <>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-600" />
                  <div>
                    <label className="text-sm font-medium text-gray-500">Email</label>
                    <p className="text-gray-900">{contactInfo.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-green-600" />
                  <div>
                    <label className="text-sm font-medium text-gray-500">Phone</label>
                    <p className="text-gray-900">{contactInfo.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-1" />
                  <div>
                    <label className="text-sm font-medium text-gray-500">Address</label>
                    <p className="text-gray-900">{contactInfo.address}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Phone className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">No contact information found</p>
                <p className="text-sm text-gray-400">Click "Add Contact Info" to get started</p>
              </div>
            )}
          </div>
        ) : (
          // Edit Mode
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="info@arviontech.com"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+1 (234) 567-890"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <textarea
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123 Tech Street, Silicon Valley, CA 94025, United States"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
