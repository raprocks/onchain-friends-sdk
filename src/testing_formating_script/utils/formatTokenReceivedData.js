const formatTokenReceivedData = (data, _recommendedUsers = []) => {
    const recommendedUsers = [..._recommendedUsers];
  
    for (const transfer of data) {
      const { addresses = [] } = transfer || {};
      const existingUserIndex = recommendedUsers.findIndex(
        ({ addresses: recommendedUsersAddresses }) =>
          recommendedUsersAddresses?.some?.((address) =>
            addresses?.includes?.(address)
          )
      );
      const _tokenTransfers = {
        received: true,
      };
      if (existingUserIndex !== -1) {
        const _addresses = recommendedUsers?.[existingUserIndex]?.addresses || [];
        recommendedUsers[existingUserIndex].addresses = [
          ..._addresses,
          ...addresses,
        ]?.filter((address, index, array) => array.indexOf(address) === index);
        recommendedUsers[existingUserIndex].tokenTransfers = {
          ...(recommendedUsers?.[existingUserIndex]?.tokenTransfers ?? {}),
          ..._tokenTransfers,
        };
      } else {
        recommendedUsers.push({
          ...transfer,
          tokenTransfers: {
            ..._tokenTransfers,
          },
        });
      }
    }
  
    return recommendedUsers;
  };
  
  export default formatTokenReceivedData;