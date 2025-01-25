import React, { useState } from "react";
import {
  Avatar,
  Name,
  Identity,
  Address,
  EthBalance,
} from "@coinbase/onchainkit/identity";
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";
import { Settings, ChevronDown } from "lucide-react";

const Header = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);
  const toggleWallet = () => setIsWalletOpen(!isWalletOpen);

  const SettingsMenu = () => (
    <div
      className="absolute right-0 z-20 mt-2 w-56 origin-top-right divide-y 
      divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 
      focus:outline-none transition-all duration-300 ease-in-out"
      role="menu"
      aria-orientation="vertical"
    >
      {[
        { group1: ["Edit", "Duplicate"] },
        { group2: ["Archive", "Move"] },
        { group3: ["Share", "Add to favorites"] },
        { group4: ["Delete"] },
      ].map((group, groupIndex) => (
        <div key={groupIndex} className="py-1" role="none">
          {Object.values(group)[0].map((item: boolean | React.Key | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined, index: any) => (
            <a
              key={index}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 
              hover:bg-gray-100 hover:text-gray-900 transition-colors"
              role="menuitem"
            >
              {item}
            </a>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <header
      className="h-16 w-full flex items-center justify-end px-5 space-x-4 
      bg-gray-800 dark:bg-gray-700 relative"
    >
      <div className="flex items-center space-x-4 text-white">
        <div className="relative">
          <Settings
            onClick={toggleSettings}
            className="h-6 w-6 text-slate-300 hover:text-slate-400 cursor-pointer dur"
          />
          {isSettingsOpen && <SettingsMenu />}
        </div>

        <div className="flex flex-col items-end">
          <Wallet>
            <ConnectWallet>
              <Avatar className="h-6 w-6" />
              <Name />
            </ConnectWallet>
            <WalletDropdown>
              <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                <Avatar />
                <Name />
                <Address />
                <EthBalance />
              </Identity>
              <WalletDropdownDisconnect />
            </WalletDropdown>
          </Wallet>
        </div>
      </div>
    </header>
  );
};

export default Header;
