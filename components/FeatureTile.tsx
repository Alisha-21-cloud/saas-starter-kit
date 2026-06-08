// A reusable feature tile component for the Starter Kit card
import React from 'react';

export interface FeatureTileProps {
  icon: React.ElementType;
  title: string;
  description: string;
  iconBg: string;
}

export default function FeatureTile({ icon: Icon, title, description, iconBg }: FeatureTileProps) {
  return (
    <div className="rounded-3xl border border-theme-border bg-theme-bg-tertiary p-4">
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${iconBg}`}>
          <Icon className="h-4 w-4" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-semibold text-theme-text-primary">
            {title}
          </p>
          <p className="text-sm text-theme-text-muted">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
