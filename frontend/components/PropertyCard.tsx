import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';

interface PropertyCardProps {
  status: string;
  country: string;
  company: string;
  address: string;
  totalPrice: number;
  tokenPrice: number;
  expectedIncome: number;
  incomeStartDate: string;
  incomePerToken: number;
  imageUrl?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  status,
  country,
  company,
  address,
  totalPrice,
  tokenPrice,
  expectedIncome,
  incomeStartDate,
  incomePerToken,
  imageUrl,
}) => {
  return (
    <Card className="w-full max-w-sm">
      <div className="relative w-full h-48 bg-gray-200 flex items-center justify-center rounded-t-lg">
        {imageUrl ? (
          <img src={imageUrl} alt={address} className="w-full h-full object-cover rounded-t-lg" />
        ) : (
          <span className="text-gray-500">No Image Available</span>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{address}</CardTitle>
        <div className="text-sm text-gray-500">{status} | {country} | {company}</div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div>
            <div className="font-semibold">Total Price</div>
            <div>${totalPrice.toLocaleString()}</div>
          </div>
          <div>
            <div className="font-semibold">Token Price</div>
            <div>${tokenPrice.toFixed(2)}</div>
          </div>
          <div>
            <div className="font-semibold">Expected Income</div>
            <div>{expectedIncome === 0 ? 'TBA' : `${expectedIncome.toFixed(2)}%`}</div>
            <div className="text-xs text-gray-500">Not including capital appreciation</div>
          </div>
          <div>
            <div className="font-semibold">Income Start Date</div>
            <div>{incomeStartDate}</div>
          </div>
          <div>
            <div className="font-semibold">Income per Token</div>
            <div>{incomePerToken === 0 ? 'TBA' : `$${incomePerToken.toFixed(2)} / year`}</div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-2">
        <Button className="w-full">View Property</Button>
        <Button className="w-full bg-blue-400 hover:bg-blue-600 text-white">Buy Property</Button>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
