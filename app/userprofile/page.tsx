"use client";

import { WebComponentRenderer } from '@/components/WebComponentRenderer';
import { webComponentConfigs } from '@/lib/webComponentConfigs';

export default function UserProfilePage() {
  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">User Profile</h1>
        <p className="text-gray-600 mb-6">
          This page dynamically loads the user profile web component.
        </p>
        <WebComponentRenderer 
          config={webComponentConfigs.userprofile}
          props={{ userId: '12345' }}
        />
      </div>
    </div>
  );
}