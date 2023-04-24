import { InjectedConnector } from "@web3-react/injected-connector";
import { talismanChains } from "./talismanChains";
import { TalismanConnector } from "./TalismanConnector";

export const injected = new InjectedConnector({
  supportedChainIds: [
    1,
    3,
    4,
    5,
    10,
    42,
    31337,
    42161,
    11155111
  ]
})

export const talisman = new TalismanConnector({
  supportedChainIds: [...talismanChains.map((c) => c.id)],
});
