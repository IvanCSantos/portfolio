interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="cursor-pointer" onClick={onClick}>
      {children}
    </button>
  );
};
