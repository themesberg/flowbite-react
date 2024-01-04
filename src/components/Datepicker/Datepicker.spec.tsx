import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Datepicker } from './Datepicker';
import { WeekStart, getFormattedDate } from './helpers';
import userEvent from '@testing-library/user-event';

describe('Components / Datepicker', () => {
  it("should display today's date when default is empty", () => {
    render(<Datepicker />);

    expect(screen.getByDisplayValue('Select date')).toBeInTheDocument();
  });
  it('should display default value on mount when default is set ', async () => {
    const defaultValue = new Date(2022, 11, 25);
    render(<Datepicker defaultValue={defaultValue} />);

    await userEvent.click(screen.getByRole('textbox'));
    expect(screen.getByText('December 2022')).toBeInTheDocument();
  });
  it('should display value as date', async () => {
    const dateValue = new Date(2022, 11, 25);

    render(<Datepicker weekStart={WeekStart.Friday} value={dateValue} />);

    await userEvent.click(screen.getByRole('textbox'));

    expect(screen.getByText('December 2022')).toBeInTheDocument();
  });

  it('should update date when a different day is clicked', async () => {
    const todaysDayOfMonth = new Date().getDate();
    const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

    render(<Datepicker />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getAllByText(anotherDay)[0]);

    expect((screen.getByRole('textbox') as HTMLInputElement).value?.includes(`${anotherDay}`)).toBeTruthy();
  });

  describe('Clear button functionality', () => {
    const testClearButton = async (label?: string) => {
      const todaysDayOfMonth = new Date().getDate();
      const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

      render(<Datepicker label={label ? label : undefined} />);

      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getAllByText(anotherDay)[0]);
      await userEvent.click(screen.getByRole('textbox'));
      await userEvent.click(screen.getByText('Clear'));

      expect(screen.getByDisplayValue(label ? label : 'Select date')).toBeInTheDocument();
      expect(screen.queryByRole('gridcell', { selected: true })).toBeNull();
    };

    it('should reset date to null and show default empty label when Clear button is clicked', async () => {
      await testClearButton();
    });

    it('should reset date to null and show custom empty label when Clear button is clicked', async () => {
      const label = 'Custom empty label';
      await testClearButton(label);
    });
  });

  it("should use today's date when Today button is clicked", async () => {
    const todaysDateInDefaultLanguage = getFormattedDate('en', new Date());
    const todaysDayOfMonth = new Date().getDate();
    const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

    render(<Datepicker />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getAllByText(anotherDay)[0]);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByText('Today'));

    expect(screen.getByDisplayValue(todaysDateInDefaultLanguage)).toBeInTheDocument();
  });

  it('should call `onSelectedDateChange` when a new date is selected', async () => {
    const onSelectedDateChange = vi.fn();
    const todaysDayOfMonth = new Date().getDate();
    const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

    render(<Datepicker onSelectedDateChanged={onSelectedDateChange} />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getAllByText(anotherDay)[0]);

    expect(onSelectedDateChange).toHaveBeenCalledOnce();
  });

  it('should close month overlay when user clicks outside of it', async () => {
    render(<Datepicker />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(document.body);
  });
});
