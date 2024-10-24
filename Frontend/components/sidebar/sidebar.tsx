import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { AcmeIcon } from "../icons/acme-icon";
import { ThemeSwitch } from "../theme-switch";

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[202] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <div className="flex items-center gap-3">
            <AcmeIcon />
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-medium m-0 text-default-900 -mb-4 whitespace-nowrap">
                BitBiltz
              </h3>
              <span className="text-xs font-medium text-default-500">
                Polo Alto, CA
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={pathname === "/admin"}
              href="/admin/"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/admin/accounts"}
                title="Accounts"
                href="/admin/accounts"
                icon={<AccountsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/admin/payments"}
                title="Payments"
                href="/admin/payments"
                icon={<PaymentsIcon />}
              />

              <SidebarItem
                isActive={pathname === "/admin/customers"}
                title="Customers"
                href="/admin/customers"
                icon={<CustomersIcon />}
              />
              <SidebarItem
                isActive={pathname === "/admin/products"}
                title="Products"
                href="/admin/products"
                icon={<ProductsIcon />}
              />
              <SidebarItem
                isActive={pathname === "/admin/reports"}
                title="Reports"
                href="/admin/reports"
                icon={<ReportsIcon />}
              />
            </SidebarMenu>
          </div>
          <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <ThemeSwitch />
              </div>
            </Tooltip>
            <Tooltip content={"Profile"} color="primary">
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                size="sm"
              />
            </Tooltip>
          </div>
        </div>
      </div>
    </aside>
  );
};
