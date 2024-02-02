export const getMessage = async (id: string) => {

  // This is the paywall configuration if someone needs to purchase or claim a ticket 
  
  const paywallConfig = {  
    pessimistic: true,
    persistentCheckout: true,
    title: "Unlock Community Membership",
    skipRecipient: true,
    locks: {
      "0xb77030a7e47a5eb942a4748000125e70be598632": {
        name: "Unlock Community",
        network: 137,
      },
    },
    metadataInputs: [{ name: "email", type: "email", required: true }],
  };


  // This is the "what gets shown" in the frame
  // Description is the "ungated" piece
  // Gate is what's checked for current membership
  // Body is what's shown if the gate is passed
  // Checkout URL is where they go if they need to get a membership
  
  return {
    id,
    body: `👏 You're in the secret! 🤫. 

    You can only view this if you own a valid membership NFT from the Unlock community!

    This is a token gated frame!
    `,
    title: `Unlock Community Call — February 7, 2024`,
    description: `You're Invited!`,
    gate: {
      contract: "0xb77030a7e47a5eb942a4748000125e70be598632",
      network: 137,
    },
    checkoutUrl: `https://app.unlock-protocol.com/checkout?paywallConfig=${encodeURIComponent(
      JSON.stringify(paywallConfig)
    )}`,
  };
};
