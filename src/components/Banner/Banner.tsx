import React, { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';

/**
 * Banner component for displaying important information.
 * @component
 */
const Banner: FC<BannerProps> = ({ children, ...props }) => {
  return (
    <div data-testid="flowbite-banner" role="banner" tabIndex={-1} {...props}>
      {children}
    </div>
  );
};

/**
 * PropTypes for Banner component.
 */
Banner.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * Display name for Banner component.
 */
Banner.displayName = 'Banner';

/**
 * Props for the Banner component.
 */
interface BannerProps {
  children: ReactNode;
}

export default Banner;
