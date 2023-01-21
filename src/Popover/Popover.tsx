import * as RadixPopover from "@radix-ui/react-popover";
import { Cross2Icon } from "@radix-ui/react-icons";
import styles from "./Popover.module.css";
import { ReactElement, ReactNode } from "react";

export function Popover({
  trigger,
  children,
}: {
  trigger: ReactElement;
  children: ReactNode;
}) {
  return (
    <RadixPopover.Root>
      <RadixPopover.Trigger asChild>{trigger}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content className={styles.PopoverContent} sideOffset={5}>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {children}
          </div>
          <RadixPopover.Close
            className={styles.PopoverClose}
            aria-label="Close"
          >
            <Cross2Icon />
          </RadixPopover.Close>
          <RadixPopover.Arrow className={styles.PopoverArrow} />
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
}

// <button className="IconButton" aria-label="Update dimensions">
//   <MixerHorizontalIcon />
// </button>
