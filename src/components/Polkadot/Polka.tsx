import dynamic from "next/dynamic";

const PolkdadotFunctions = dynamic(() => import('./PolkdadotFunctions'), {
    ssr: false,
  });


const Polkdadot = () => {

        return (
            <PolkdadotFunctions />
        )
   
}

export default Polkdadot;