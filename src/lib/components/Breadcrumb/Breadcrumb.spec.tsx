import { render } from '@testing-library/react';
import { HiHome } from 'react-icons/hi';
import Breadcrumb from '.';

describe('Breadcrumb', () => {
  describe('given an aria-label', () => {
    it('should override default aria-label', () => {
      const { getByRole } = render(<BreadcrumbTest />);

      const breadcrumb = getByRole('navigation');
      expect(breadcrumb).toHaveAccessibleName('test label');
    });
  });
});

const BreadcrumbTest = (): JSX.Element => (
  <Breadcrumb aria-label="test label">
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item icon={HiHome}>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);
