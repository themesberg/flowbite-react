import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Datepicker } from './Datepicker';
import { getFormattedDate } from './helpers';
import userEvent from '@testing-library/user-event';

describe('Components / Datepicker', () => {
  it("should display today's date by default", () => {
    const todaysDateInDefaultLanguage = getFormattedDate('en', new Date());

    render(<Datepicker />);

    expect(screen.getByDisplayValue(todaysDateInDefaultLanguage)).toBeInTheDocument();
  });

  it('should update date when a different day is clicked', async () => {
    const todaysDayOfMonth = new Date().getDate();
    const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

    render(<Datepicker />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getAllByText(anotherDay)[0]);

    expect((screen.getByRole('textbox') as HTMLInputElement).value?.includes(`${anotherDay}`)).toBeTruthy();
  });

  it("should reset to today's date when Clear button is clicked", async () => {
    const todaysDateInDefaultLanguage = getFormattedDate('en', new Date());
    const todaysDayOfMonth = new Date().getDate();
    const anotherDay = todaysDayOfMonth === 1 ? 2 : 1;

    render(<Datepicker />);

    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getAllByText(anotherDay)[0]);
    await userEvent.click(screen.getByRole('textbox'));
    await userEvent.click(screen.getByText('Clear'));

    expect(screen.getByDisplayValue(todaysDateInDefaultLanguage)).toBeInTheDocument();
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
