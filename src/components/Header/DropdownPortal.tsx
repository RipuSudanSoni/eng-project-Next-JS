'use client';

import { createPortal } from 'react-dom';

interface Props {
  anchorRect: DOMRect | null;
  onClose: () => void;
  isMobile: boolean;
  children: React.ReactNode;
}

export default function DropdownPortal({
  anchorRect,
  onClose,
  isMobile,
  children,
}: Props) {
  if (!anchorRect) return null;

  return createPortal(
    <>
      {/* Backdrop ONLY for mobile */}
      {isMobile && (
        <div
          className="dropdown-backdrop"
          onClick={onClose}
        />
      )}

      <div
        className="portal-dropdown"
        style={{
          top: anchorRect.bottom + window.scrollY,
          left: anchorRect.left + window.scrollX,
        }}
      >
        {children}
      </div>
    </>,
    document.body
  );
}