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
  WalletAdvanced,
  WalletDropdown,
  WalletDropdownDisconnect,
} from "@coinbase/onchainkit/wallet";

const Header = () => {
  return (
    <header className="h-16 w-full flex items-center relative justify-end px-5 space-x-10 bg-gray-800 dark:bg-gray-700">
      <div className="flex flex-shrink-0 items-center space-x-4 text-white">
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
        <div className="h-10 w-10 rounded-full cursor-pointer bg-gray-200 border-2 border-blue-400"></div>
      </div>
    </header>
  );
};

export default Header;
