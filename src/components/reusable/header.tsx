interface HeaderProps {
  header: string;
  className?: string;
}

export const Header = ({ header, className }: HeaderProps) => (
  <div className="flex justify-center items-center mb-12">
    <div className="relative inline-flex group">
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#378a84] to-[#2ba6a48d] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <div
        className={`relative items-center text-center flex justify-center px-8 py-4 text-lg font-bold text-skyBlue transition-all duration-200 bg-skyBlue-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${className}`}
      >
        {header}
      </div>
    </div>
  </div>
);
