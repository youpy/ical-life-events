export class Event {
  private _years: number;
  private _months: number;
  private _days: number;
  private _month: number | null;
  private _day: number | null;
  private _full: boolean;
  private _title: string;

  constructor(
    years: number,
    months: number,
    days: number,
    month: number | null,
    day: number | null,
    full: boolean,
    title: string
  ) {
    this._years = years;
    this._months = months;
    this._days = days;
    this._month = month;
    this._day = day;
    this._full = full;
    this._title = title;
  }

  summary(name: string): string {
    return [name, this._title].join(" ");
  }

  get years(): number {
    return this._years;
  }

  get months(): number {
    return this._months;
  }

  get days(): number {
    return this._days;
  }

  get month(): number | null {
    return this._month;
  }

  get day(): number | null {
    return this._day;
  }

  get full(): boolean {
    return this._full;
  }
}