import type { providers, ContractInterface } from 'ethers';
import ethers, { Contract } from 'ethers';
import { useState, useEffect } from 'react';
// import Lock from '../../abi/Lock.json';

// Initialize logger

export type UseContractHook = [
  contract: Contract | undefined,
  loading: boolean,
  error: string | undefined,
];


export const useContract = (
  address: string,
  abi: ContractInterface,
  provider?: providers.JsonRpcProvider,
  withSigner = true
): UseContractHook => {
  const [contract, setContract] = useState<Contract | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    setLoading(true);
    if (!provider) {
      return;
    }
    try {
      setContract(new ethers.Contract(address, abi, provider))
      setLoading(false);
    } catch (error) {
      console.log(error);
      const message = (error as Error).message || 'Unknown contract library error';
      setError(message);
      setLoading(false);
    }
  }, [provider, withSigner]);

  return [contract, loading, error];
};
