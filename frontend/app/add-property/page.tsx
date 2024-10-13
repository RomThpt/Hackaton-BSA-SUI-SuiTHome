'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function AddProperty() {
  const [property, setProperty] = useState({
    status: '',
    country: '',
    company: '',
    address: '',
    totalPrice: 0,
    tokenPrice: 0,
    expectedIncome: 0,
    incomeStartDate: '',
    incomePerToken: 0,
    imageUrl: '', // Ajout du champ pour l'URL de l'image
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProperty(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous enverriez les données à votre API
    console.log(property);
    // Réinitialiser le formulaire ou rediriger l'utilisateur
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(property).map(([key, value]) => (
          <div key={key}>
            <Label htmlFor={key}>{key}</Label>
            <Input
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              type={key === 'imageUrl' ? 'url' : typeof value === 'number' ? 'number' : 'text'}
            />
          </div>
        ))}
        <Button type="submit">Add Property</Button>
      </form>
    </div>
  );
}
