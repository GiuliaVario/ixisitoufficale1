// components/ui/Container.tsx
type Props = React.HTMLAttributes<HTMLDivElement>;

export default function Container({ className = "", ...props }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-6 ${className}`}
      {...props}
    />
  );
}