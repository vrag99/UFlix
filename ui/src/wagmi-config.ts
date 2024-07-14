import { http, createConfig } from 'wagmi'

import {
  type Chain
} from 'viem'

export const ubitTestnet
  = {
    id: 44433,
    name: 'Ubit Testnet',
    nativeCurrency: {
      name: 'USC', 
      symbol: 'USC', 
      decimals: 18
    },
    rpcUrls: {
      default: {
        http: ['https://testnet-rpc.ubitscan.io']
      },
    },
    blockExplorers: {
      default: {
        name: 'UbitScan', 
        url: 'https://testnet.ubitscan.io'
      },
    },
  } as const satisfies Chain

export const config = createConfig({
  chains: [ubitTestnet],
  transports: {
    [ubitTestnet.id]: http(),
  },
});