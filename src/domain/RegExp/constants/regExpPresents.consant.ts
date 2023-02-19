const dateReplacement = {
  value: 'dateReplacement',
  label: 'Date Replacement',
  regExp: `(?<year>  [0-9]{4} ) _?  # year
(?<month> [0-9]{2} ) _?  # month
(?<day>   [0-9]{2} )     # day`,
  pattern: '$<month>-$<day>-$<year>',
  description: 'This preset',
} as const;

export const DEFAULT_REGEXP_PRESET = {
  value: 'custom',
  label: 'Custom',
  regExp: '',
  pattern: '',
  description: 'Custom',
};

export const REGEXP_PRESETS = {
  dateReplacement,
  custom: DEFAULT_REGEXP_PRESET,
} as const;

export const REGEXP_PRESETS_OPTIONS = {
  [DEFAULT_REGEXP_PRESET.value]: DEFAULT_REGEXP_PRESET.label,
  [dateReplacement.value]: dateReplacement.label,
};

export type RegExpPresets = ValueOf<typeof REGEXP_PRESETS>;

type ValueOf<T> = T[keyof T];
