import { ArrowDownRight } from 'lucide-react';
import { Badge } from './ui/badge';
import React from 'react';

const Approach1: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="grid grid-cols-3 gap-12">
        {/* Step 1 */}
        <div className="relative flex flex-col items-center">
            
          <div className="w-48 h-48  mb-24 flex flex-col justify-center items-center">
            <Badge variant="outline">
              
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h3 className="text-md text-center font-semibold mb-2">Collaborative Partnership</h3>
            <p className="text-gray-600 text-center px-4">We co-create strategies with clients and local actors to ensure relevance and ownership.</p>
          </div>
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center">
          <div className="w-48 h-48 flex flex-col justify-center items-center">
            <h3 className="text-md text-center font-semibold mb-2">Evidence-based & Contextualized</h3>
            <p className="text-gray-600 text-center px-4">Our solutions combine rigorous analysis with deep regional understanding of the Horn of Africa.</p>
          </div>
          {/* Arrow pointing right */}
          <div className="absolute top-1/2 -right-8 transform -translate-y-1/2">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center">
          <div className="w-48 h-48 flex flex-col justify-center items-center">
            <h3 className="text-md text-center font-semibold mb-2">Data-driven Decision Making</h3>
            <p className="text-gray-600 text-center px-4">We leverage data analytics to drive informed decisions and optimize outcomes.</p>
          </div>
          {/* No arrow for the last step */}
        </div>
      </div>
    </div>
  );
};

export default Approach1;
