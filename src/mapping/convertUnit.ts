const M_PER_UNIT: any = {
  m: 1,
  cm: 0.01,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
};

export const toBaseDistance = (value: number, unit: any): number => value * M_PER_UNIT[unit];
export const fromBaseDistance = (value: number, unit: any): number => value / M_PER_UNIT[unit];

export const toBaseTemp = (value: number, unit: any): any => {
  switch (unit) {
    case 'c':
      return value + 273.15;
    case 'f':
      return (value + 459.67) * (5 / 9);
    case 'k':
      return value;
  }
};

export const fromBaseTemp = (value: number, unit: any): any => {
  switch (unit) {
    case 'c':
      return value - 273.15;
    case 'f':
      return value * (9 / 5) - 459.67;
    case 'k':
      return value;
  }
};
