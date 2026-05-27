"use client";

interface AdSlotProps {
  className?: string;
  id: string;
}

export function AdSlot({ className = "", id }: AdSlotProps) {
  return (
    <div
      id={id}
      className={`ad-slot border border-dashed border-border rounded-lg bg-muted/30 flex items-center justify-center text-xs text-muted-foreground ${className}`}
      style={{ minHeight: 90 }}
    >
      <span className="px-4 py-2 text-center">
        Advertisement
        <br />
        <span className="opacity-50">(Reserved for AdSense)</span>
      </span>
    </div>
  );
}
