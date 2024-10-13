'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { usePropertyStore } from '@/store/propertyStore';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function CreateOfferPage() {
  const router = useRouter();
  const addProperty = usePropertyStore((state) => state.addProperty);
  const [offerDetails, setOfferDetails] = useState({
    propertyAddress: '',
    offerPrice: '',
    tokenQuantity: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOfferDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitting offer:', offerDetails);

    const newProperty = {
      status: 'Available',
      country: 'TBA',
      company: 'TBA',
      address: offerDetails.propertyAddress,
      totalPrice: parseFloat(offerDetails.offerPrice),
      tokenPrice: parseFloat(offerDetails.offerPrice) / parseFloat(offerDetails.tokenQuantity),
      expectedIncome: 0,
      incomeStartDate: 'TBA',
      incomePerToken: 0,
      // Nous n'incluons pas imageUrl ici
    };

    console.log('New property:', newProperty);
    addProperty(newProperty);
    console.log('Property added to store');

    toast.success('Offer submitted successfully!');

    setTimeout(() => {
      console.log('Redirecting to marketplace');
      router.push('/route1');
    }, 2000);
  };

  return (
    <div className="container mx-auto p-4">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Create an Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="propertyAddress">Property Address</Label>
              <Input
                id="propertyAddress"
                name="propertyAddress"
                value={offerDetails.propertyAddress}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="offerPrice">Offer Price ($)</Label>
              <Input
                id="offerPrice"
                name="offerPrice"
                type="number"
                value={offerDetails.offerPrice}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <Label htmlFor="tokenQuantity">Token Quantity</Label>
              <Input
                id="tokenQuantity"
                name="tokenQuantity"
                type="number"
                value={offerDetails.tokenQuantity}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" className="w-full">Submit Offer</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
