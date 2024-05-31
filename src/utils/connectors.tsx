import { InjectedConnector } from "@web3-react/injected-connector";
import { talismanChains } from "./talismanChains";
import { TalismanConnector } from "./TalismanConnector";

export const injected = new InjectedConnector({})

export const talisman = new TalismanConnector({
  supportedChainIds: [...talismanChains.map((c) => c.id)],
});
