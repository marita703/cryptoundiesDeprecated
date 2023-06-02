import React from "react";

import { Button, Col, Row, Text } from "@nextui-org/react";

function WalletComponent() {
  return (
    <Row>
      <Col>
        <Text h4>NFTs in Wallet</Text>
        <Text h5 css={{ color: "#39FF14" }}>
          {" "}
          {user}
        </Text>

        <Row>
          <Button
            size="sm"
            onPress={connectUser}
            css={{ marginRight: "$2", marginBottom: "$2" }}
          >
            Refresh Wallet
          </Button>
          <Button
            size="sm"
            onPress={getWalletNFTs(setNfts, setLoadingState)}
            css={{ marginRight: "$2", marginBottom: "$2" }}
          >
            Refresh NFTs
          </Button>
        </Row>
      </Col>
    </Row>
  );
}

export default WalletComponent;
