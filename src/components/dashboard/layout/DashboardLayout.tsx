import { Box, Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";
import ProtectedRoute from "@/ProtectedRoute";
import MobileNav from "./MobileNav";
import SidebarContent from "./SidebarContent";

interface DashboardLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  bgColor?: string;
}

const DashboardLayout = ({
  children,
  showSidebar = true,
  bgColor = "bg.100",
}: DashboardLayoutProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={bgColor} position="relative">
      <SidebarContent
        onClose={() => onClose}
        display={{
          base: "none",
          lg: showSidebar ? "block" : "none",
        }}
      />

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>

      <MobileNav onOpen={onOpen} showSidebar={showSidebar} />

      <Box
        ml={{ base: 0, lg: showSidebar ? 60 : 0 }}
        p="4"
        bg={bgColor}
        pt="20"
      >
        {children}
      </Box>
    </Box>
  );
};

export default ProtectedRoute(DashboardLayout);
