"use client";

import { useEffect, useState } from "react";
import { useCustomWallet } from "@/contexts/CustomWallet";
import { isValidSuiObjectId } from "@mysten/sui/utils";
import { Counter } from "@/components/Counter";
import { CreateCounter } from "@/components/CreateCounter";

export default function HomePage() {
  const { isConnected } = useCustomWallet();
  const [counterId, setCounter] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (isValidSuiObjectId(hash)) {
      setCounter(hash);
    }
  }, []);

  return (
    <main className="flex-grow flex flex-col items-center justify-center px-4">
      <div className="bg-white bg-opacity-30 p-8 rounded-lg shadow-lg backdrop-blur-md">
        {isConnected ? (
          counterId ? (
            <Counter id={counterId} />
          ) : (
            <CreateCounter
              onCreated={(id) => {
                window.location.hash = id;
                setCounter(id);
              }}
            />
          )
        ) : (
          <div className="text-white">Veuillez connecter votre portefeuille pour continuer.</div>
        )}
      </div>
    </main>
  );
}
