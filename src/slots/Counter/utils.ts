export const camelCaseToTitleCase = (_: string) =>
  _?.replace(/([A-Z])/g, " $1");
