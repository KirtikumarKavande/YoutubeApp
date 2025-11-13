import { useState } from "react";
import {
  User,
  LogOut,
  SwitchCamera,
  Settings,
  HelpCircle,
  Send,
  Globe,
  Moon,
  Languages,
  DollarSign,
  Youtube,
  Shield,
  Keyboard,
} from "lucide-react";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full overflow-hidden border border-gray-600"
      >
        {/* <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-full object-cover"
        /> */}

        <User className="w-5 h-5 text-white" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-neutral-900 text-gray-200 rounded-xl shadow-lg border border-neutral-700 overflow-hidden z-50">
          {/* Header */}
          <div className="flex items-center gap-3 p-4 border-b border-neutral-700">
            {/* <img
              src="https://via.placeholder.com/50"
              alt="avatar"
              className="w-12 h-12 rounded-full"
            /> */}
            <User className="w-5 h-5 text-white" />

            <div className="flex flex-col">
              <span className="font-semibold text-white">
                Kirtikumar Kavande
              </span>
              <span className="text-sm text-gray-400">@kirtikumarkavande</span>
              <button className="text-blue-400 text-sm hover:underline mt-1">
                View your channel
              </button>
            </div>
          </div>

          {/* Main Options */}
          <div className="py-1">
            <DropdownItem icon={<User size={18} />} label="Google Account" />
            <DropdownItem
              icon={<SwitchCamera size={18} />}
              label="Switch account"
            />
            <DropdownItem icon={<LogOut size={18} />} label="Sign out" />
          </div>

          <hr className="border-neutral-700" />

          <div className="py-1">
            <DropdownItem icon={<Youtube size={18} />} label="YouTube Studio" />
            <DropdownItem
              icon={<DollarSign size={18} />}
              label="Purchases and memberships"
            />
          </div>

          <hr className="border-neutral-700" />

          <div className="py-1">
            <DropdownItem
              icon={<Shield size={18} />}
              label="Your data in YouTube"
            />
            <DropdownItem
              icon={<Moon size={18} />}
              label="Appearance: Device theme"
            />
            <DropdownItem
              icon={<Languages size={18} />}
              label="Language: English"
            />
            <DropdownItem
              icon={<Shield size={18} />}
              label="Restricted Mode: Off"
            />
            <DropdownItem icon={<Globe size={18} />} label="Location: India" />
            <DropdownItem
              icon={<Keyboard size={18} />}
              label="Keyboard shortcuts"
            />
          </div>

          <hr className="border-neutral-700" />

          <div className="py-1">
            <DropdownItem icon={<Settings size={18} />} label="Settings" />
            <DropdownItem icon={<HelpCircle size={18} />} label="Help" />
            <DropdownItem icon={<Send size={18} />} label="Send feedback" />
          </div>
        </div>
      )}
    </div>
  );
};

const DropdownItem = ({ icon, label }) => (
  <button className="w-full flex items-center gap-3 px-4 py-2 hover:bg-neutral-800 transition-colors text-sm text-gray-300">
    {icon}
    <span>{label}</span>
  </button>
);

export default ProfileDropdown;
