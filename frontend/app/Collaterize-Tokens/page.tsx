'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const tokens = [
  { name: 'SUI', apy: 2.5 },
  { name: 'ETH', apy: 3.2 },
  { name: 'USDC', apy: 1.8 },
];

export default function CollateralizeTokensPage() {
  const [depositAmount, setDepositAmount] = useState('');
  const [borrowAmount, setBorrowAmount] = useState('');
  const [selectedDepositToken, setSelectedDepositToken] = useState(tokens[0].name);
  const [selectedBorrowToken, setSelectedBorrowToken] = useState(tokens[0].name);

  const handleDeposit = () => {
    console.log(`Depositing ${depositAmount} ${selectedDepositToken}`);
  };

  const handleBorrow = () => {
    console.log(`Borrowing ${borrowAmount} ${selectedBorrowToken}`);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Collateralize Tokens</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Deposit</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="depositToken">Token to deposit</Label>
            <Select onValueChange={setSelectedDepositToken} defaultValue={selectedDepositToken}>
              <SelectTrigger>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.name} value={token.name}>
                    {token.name} (APY: {token.apy}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="depositAmount">Amount to deposit</Label>
            <Input
              id="depositAmount"
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(e.target.value)}
              placeholder="Enter amount to deposit"
            />
            <Button onClick={handleDeposit} className="mt-2">Deposit</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Borrow</CardTitle>
          </CardHeader>
          <CardContent>
            <Label htmlFor="borrowToken">Token to borrow</Label>
            <Select onValueChange={setSelectedBorrowToken} defaultValue={selectedBorrowToken}>
              <SelectTrigger>
                <SelectValue placeholder="Select token" />
              </SelectTrigger>
              <SelectContent>
                {tokens.map((token) => (
                  <SelectItem key={token.name} value={token.name}>
                    {token.name} (APY: {token.apy}%)
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Label htmlFor="borrowAmount">Amount to borrow</Label>
            <Input
              id="borrowAmount"
              type="number"
              value={borrowAmount}
              onChange={(e) => setBorrowAmount(e.target.value)}
              placeholder="Enter amount to borrow"
            />
            <Button onClick={handleBorrow} className="mt-2">Borrow</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
