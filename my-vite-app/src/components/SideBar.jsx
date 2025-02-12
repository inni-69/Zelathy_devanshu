import { useState } from "react";
import { Menu, ConfigProvider } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const items = [
  {
    label: "Availability",
    key: "availability",
    icon: <ClockCircleOutlined />,
  },
];

const TopNavBar = () => {
  const [current, setCurrent] = useState("availability");

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemSelectedBg: "#404040",
            darkItemBg: "#1f1f1f",
          },
        },
      }}
    >
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"  // Switched to horizontal mode
        theme="dark"
        items={items}
        style={{
          height: "60px",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#1f1f1f", // Dark theme background
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Soft shadow
        }}
      />
    </ConfigProvider>
  );
};

export default TopNavBar;
