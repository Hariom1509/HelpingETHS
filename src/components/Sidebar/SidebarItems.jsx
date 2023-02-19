import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ItemsList,
  ItemContainer,
  ItemWrapper,
  ItemName,
} from "./SidebarStyles";

import { dummyData } from "..";

const SidebarItems = ({ displaySidebar }) => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div style = {{backgroundColor: '#fac671', color: "white",}}>
    <ItemsList>
      {dummyData.map((itemData, index) => (
        <ItemContainer
          key={index}
          onClick={() => setActiveItem(itemData.id)}
          className={itemData.id === activeItem ? "active" : ""}
        >
          <Link to={itemData.path}>
            <ItemWrapper>
              {itemData.icon}
              <ItemName displaySidebar={displaySidebar}>
                {itemData.name}
              </ItemName>
            </ItemWrapper>
          </Link>
        </ItemContainer>
      ))}
      <br></br>
    </ItemsList>
    <br></br>
    <br></br>
    <div style = {{backgroundColor: '#fac671', color: "#1b1624",}}>
        <p>
          Connected to MetaMask Id:
        </p>
        <p style={{fontSize:10,}}>0x595f4030575aCCd032dAD62B9838911917a5D5fd</p>
        <p style={{fontSize:12,}}>Current Balance: 0.4295 GoerliEth</p>
    </div>
    </div>
  );
};

export default SidebarItems;