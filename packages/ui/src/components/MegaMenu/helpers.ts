/**
 * Marks a `<MegaMenuDropdownToggle>` button so it can be paired with its dropdown.
 */
export const megaMenuDropdownToggleAttr = "data-mega-menu-dropdown-toggle";

/**
 * Marks a `<MegaMenuDropdown>` panel so it can be paired with its toggle.
 */
export const megaMenuDropdownAttr = "data-mega-menu-dropdown";

/**
 * `<MegaMenuDropdownToggle>` and `<MegaMenuDropdown>` are rendered as siblings without a
 * shared wrapper, so the only thing linking a toggle to its dropdown is the order they are
 * declared in: the n-th toggle of a mega menu controls its n-th dropdown.
 *
 * Pairing is restricted to elements carrying the attributes above rather than to
 * `[aria-haspopup="menu"]`/`[role="menu"]`, because a `<MegaMenuDropdown toggle={..}>` also
 * renders those roles and would otherwise shift the indices as it opens and closes.
 */
function findPairedElement(element: HTMLElement | null, fromAttr: string, toAttr: string): HTMLElement | null {
  const megaMenu = element?.closest("nav");

  if (!element || !megaMenu) {
    return null;
  }

  const from = Array.from(megaMenu.querySelectorAll<HTMLElement>(`[${fromAttr}]`));
  const to = Array.from(megaMenu.querySelectorAll<HTMLElement>(`[${toAttr}]`));

  return to[from.indexOf(element)] ?? null;
}

/**
 * Returns the dropdown controlled by the given toggle, or `null` when there is no
 * dropdown declared at the matching position.
 */
export function findPairedDropdown(toggle: HTMLElement | null): HTMLElement | null {
  return findPairedElement(toggle, megaMenuDropdownToggleAttr, megaMenuDropdownAttr);
}

/**
 * Returns the toggle controlling the given dropdown, or `null` when there is no
 * toggle declared at the matching position.
 */
export function findPairedToggle(dropdown: HTMLElement | null): HTMLElement | null {
  return findPairedElement(dropdown, megaMenuDropdownAttr, megaMenuDropdownToggleAttr);
}
