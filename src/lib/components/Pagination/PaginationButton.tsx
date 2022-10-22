import classNames from 'classnames';
import { useTheme } from '../Flowbite/ThemeContext';
import { PaginationButtonProps } from './Pagination.types';

const PaginationButton = ({ active, onClick, children, className }: PaginationButtonProps) => {
  const theme = useTheme().theme.pagination;
  return (
    <button
      className={classNames(
        {
          [theme.pages.selector.active]: active,
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
